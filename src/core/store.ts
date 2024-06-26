import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { filterReducer } from '../datasource/filter.slice';
import { jobsReducer } from '../datasource/job.slice';

const reducers = combineReducers({
  filterUseCase: filterReducer,
  jobUseCase: jobsReducer,
});

export const reduxStore = configureStore({
  reducer: reducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof reduxStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof reduxStore.dispatch;
