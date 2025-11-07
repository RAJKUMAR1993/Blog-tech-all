import React from "react";
import Banner from "../home/Banner";
import PostCards from "../blogs/PostCards";
import Category from "./Category";
const Home = () => {
  return (
    <>
      <div>
        <Banner />
        <PostCards />
      </div>
    </>
  );
};

export default Home;
