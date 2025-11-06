import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const app = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
};

export default app;
