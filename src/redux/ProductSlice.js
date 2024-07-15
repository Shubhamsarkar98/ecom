import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';

// Define the async thunk to fetch products
export const getProduct = createAsyncThunk('products/getProduct', async () => {
  const res = await api.get('/products');
  console.log(res.data)
  return res.data;
});

const initialState = {
  products: [],
  status: 'idle', // For tracking the status of the async thunk
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProduct.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload;
      })
      .addCase(getProduct.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectProducts = (state) => state.products.products;
export const selectProductStatus = (state) => state.products.status;
export const selectProductError = (state) => state.products.error;

export default productSlice.reducer;
