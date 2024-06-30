import { configureStore } from '@reduxjs/toolkit';
import product from './ProductSlice';

export const store = configureStore({
  reducer: {
    product,
  },
});
