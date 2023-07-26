import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosInstance } from "../../helpers";

export const authenticateUser = createAsyncThunk(
  "user/authenticateUser",
  async ({formValues, isLogin}, { rejectWithValue }) => {
    try {
      const endpoint = `/users/${isLogin ? 'login' : 'register'}`;
      const { data } = await axiosInstance.post(endpoint, formValues);
      localStorage.setItem('token', data.token);
      localStorage.setItem('refreshToken', data.refreshToken);
      return data;
    } catch (error) {
      return rejectWithValue(error?.response?.data?.message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    userData: null,
    loading: null,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.loading = false;
      state.userData = action.payload.user;
    });
    builder.addCase(authenticateUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export const userReducer = userSlice.reducer;