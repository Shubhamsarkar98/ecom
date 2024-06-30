import { configureStore } from '@reduxjs/toolkit';
import users from './counterSlice';

export const store = configureStore({
  reducer: {
    users,
  },
});
