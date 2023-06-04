import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import rootReducer, { RootState } from './items/slice';
import thunk, { ThunkDispatch } from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), thunk];

const store = configureStore({
  reducer: rootReducer,
  middleware,
});

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();

export default store;