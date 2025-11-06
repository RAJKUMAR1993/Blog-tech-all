import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getSingleBlog } from "./singleBlogApi";

const initialState = {
  blog: {},
  loading: false,
  isError: false,
  error: "",
};

// Create the blog slice using Redux Toolkit thunks for async actions

export const singleFetchBlog = createAsyncThunk(
  "blog/singleFetchBlog",
  async (id) => {
    try {
      const response = await getSingleBlog(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const singleBlogSlice = createSlice({
  name: "blog",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(singleFetchBlog.pending, (state) => {
        state.isError = false;
        state.loading = true;
        state.blog = {};
      })
      .addCase(singleFetchBlog.fulfilled, (state, action) => {
        state.loading = false;
        state.blog = action.payload;
      })
      .addCase(singleFetchBlog.rejected, (state, action) => {
        state.loading = false;
        state.blog = {};
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export const { actions } = singleBlogSlice;
export default singleBlogSlice.reducer;
