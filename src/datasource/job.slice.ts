import type { PayloadAction } from '@reduxjs/toolkit';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IJob, getJobs } from './remote';

export interface JobState {
  jobs: IJob[];
  totalCount: number;
  status: 'pending' | 'rejected' | 'fullfilled';
}

const initialState: JobState = {
  jobs: [],
  totalCount: 0,
};

export const fetchJobs = createAsyncThunk(
  'jobs/fetchJobs',
  async ({ limit, offset }: { limit: number; offset: number }) => {
    return getJobs({ limit, offset });
  }
);

export const jobSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    setJobs: (state, action: PayloadAction<IJob[]>) => {
      state.jobs = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchJobs.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchJobs.rejected, (state, action: any) => {
        state.status = 'rejected';
      })
      .addCase(fetchJobs.fulfilled, (state, action: any) => {
        state.jobs = [...state.jobs, ...action.payload?.jdList];
        state.totalCount = action.payload?.totalCount;
        state.status = 'fullfilled';
      });
  },
});

export const { setJobs } = jobSlice.actions;

export const jobsReducer = jobSlice.reducer;
