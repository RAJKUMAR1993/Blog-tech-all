import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/home/Home";
import SingleBlog from "./pages/blogs/singleBlog";
const app = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/blogs/:id" element={<SingleBlog />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default app;
