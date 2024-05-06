import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { IFilter } from '../components/filters';

export interface FilterState {
  filter: IFilter;
}

const initialFilterState: IFilter = {
  techStack: [],
  minExp: '',
  numOfEmp: [],
  company: '',
  location: [],
  minPay: '',
  roles: [],
};

const initialState: FilterState = {
  filter: initialFilterState,
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilter: (state, action: PayloadAction<IFilter>) => {
      state.filter = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;
