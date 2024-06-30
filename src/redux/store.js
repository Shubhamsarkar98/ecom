import { configureStore } from '@reduxjs/toolkit';
import users from './ProductSlice';

export const store = configureStore({
  reducer: {
    product,
  },
});
