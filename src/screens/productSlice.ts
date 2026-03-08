import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductsByCategories } from "../services/api";

export const loadProducts = createAsyncThunk(
  "products/load",
  async (categories: string[]) => {
    return await fetchProductsByCategories(categories);
  }
);

interface ProductState {
  items: any[];
  loading: boolean;
  error: string | null;
}

const initialState: ProductState = {
  items: [],
  loading: false,
  error: null,
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loadProducts.pending, (state) => {
        state.loading = true;
      })
      .addCase(loadProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(loadProducts.rejected, (state) => {
        state.loading = false;
        state.error = "Erro ao carregar produtos";
      });
  },
});

export default productSlice.reducer;