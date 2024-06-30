import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const counterSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
  },
});

export const { increment } = counterSlice.actions;
export const selectUser=(state)=>state.products.products
export default counterSlice.reducer;
