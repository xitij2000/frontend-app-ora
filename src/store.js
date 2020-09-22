import { configureStore } from '@reduxjs/toolkit';
import { oraReducer } from './ora-dashboard/data';

const store = configureStore({
  reducer: oraReducer,
});

export default store;
