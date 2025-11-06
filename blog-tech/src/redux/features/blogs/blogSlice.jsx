import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getBlog } from "./blogApi";

const initialState = {
  blogs: [],
  loading: false,
  isError: false,
  error: "",
};

// Create the blog slice using Redux Toolkit thunks for async actions

export const fetchBlogs = createAsyncThunk(
  "blog/fetchBlogs",
  async (_, thunkAPI) => {
    try {
      const response = await getBlog();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const blogSlice = createSlice({
  name: "blogs",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.isError = false;
        state.loading = true;
        state.blogs = [];
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.blogs = [];
        state.isError = true;
        state.error = action.error?.message;
      });
  },
});

export const { actions } = blogSlice;
export default blogSlice.reducer;
