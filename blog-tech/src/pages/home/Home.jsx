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
        <Category />
      </div>
    </>
  );
};

export default Home;
