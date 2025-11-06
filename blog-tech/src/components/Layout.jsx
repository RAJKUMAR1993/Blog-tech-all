import React from "react";
import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-2">
        <Navbar />
        <div className="mt-8 min-h-screen">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
