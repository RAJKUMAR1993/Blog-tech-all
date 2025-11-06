import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./features/blogs/blogSlice.jsx";
import singleBlogReducer from "./features/singleBlog/singleBlogSlice.jsx";
import relatedBlogsReducer from "./features/relatedBlogs/relatedBlogsSlice.jsx";
export const store = configureStore({
  reducer: {
    // Add your reducers here
    blogs: blogReducer,
    blog: singleBlogReducer,
    relatedBlogs: relatedBlogsReducer,
  },
});
