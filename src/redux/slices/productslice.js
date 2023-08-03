import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product, productId }, { rejectWithValue, dispatch }) => {
    try {
      const method = productId ? "put" : "post";
      const endpoint = productId ? `/products/${productId}` : "/products";
      const { data } = await axiosInstance[method](endpoint, {
        product,
      });
      dispatch(fetchHomePageProducts());
      return data;
    } catch (error) {
      return rejectWithValue("პროდუქტის დამატებისას მოხდა შეცდომა");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance("/products");
      return data;
    } catch (error) {
      return rejectWithValue("პროდუქტების გამოტანისას მოხდა შეცდომა");
    }
  }
);

export const deleteProduct = createAsyncThunk(
  "product/deleteProduct",
  async (id, { rejectWithValue, dispatch }) => {
    try {
      await axiosInstance.delete(`/products/${id}`);
      dispatch(fetchHomePageProducts());
    } catch (error) {
      return rejectWithValue("პროდუქტების წაშლისას მოხდა შეცდომა");
    }
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    homePageProducts: [],
    selectedProduct: null,
    categories: [],
  },
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products;
      state.error = null;
      state.categories = action.payload.categories;
    });
    builder.addCase(fetchHomePageProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(saveProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(saveProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(saveProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(deleteProduct.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(deleteProduct.fulfilled, (state) => {
      state.loading = false;
      state.error = null;
    });
    builder.addCase(deleteProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const productReducer = productSlice.reducer;

export const { setSelectedProduct } = productSlice.actions;
