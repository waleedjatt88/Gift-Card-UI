// src/store/store.js
import { configureStore } from '@reduxjs/toolkit';
import policiesReducer from './policiesSlice';

export const store = configureStore({
  reducer: {
    policies: policiesReducer,
  },
});