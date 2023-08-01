import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const saveProduct = createAsyncThunk(
  "product/saveProduct",
  async ({ product }, { rejectWithValue }) => {
    try {
      const method = "post";
      const { data } = await axiosInstance[method]("/products", {
        product,
      });
      return data;
    } catch (error) {
      return rejectWithValue("პროდუქტის დამატებისას მოხდა შეცდომა");
    }
  }
);

export const fetchHomePageProducts = createAsyncThunk(
  "product/fetchHomePageProducts",
  async (_, {rejectWithValue}) => {
    try {
      const {data} = await axiosInstance("/products");
      return data;
    } catch (error) {
      return rejectWithValue("პროდუქტების გამოტანისას მოხდა შეცდომა");
    }
  }
)

const productSlice = createSlice({
  name: "product",
  initialState: {
    loading: false,
    error: null,
    homePageProducts: [],
  },
  extraReducers: (builder) => {
    builder.addCase(fetchHomePageProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchHomePageProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.homePageProducts = action.payload.products
      state.error = null;
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
  },
});

export const productReducer = productSlice.reducer;
