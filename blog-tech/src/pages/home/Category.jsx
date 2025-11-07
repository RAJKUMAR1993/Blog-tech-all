import React from "react";
import CategoryList from "./CategoryList";
import Subscribe from "./Subscribe";

const Category = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3">
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="text-gray-800 font-bold text-lg mb-4">
            POPULAR TOPICS
          </h3>
          <CategoryList />
        </div>

        <div className="bg-white p-6 rounded shadow-sm mt-6">
          <h3 className="text-gray-800 font-bold text-lg mb-3">SUBSCRIBE</h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to our newsletter. We deliver the best health-related
            articles to your inbox
          </p>
          <Subscribe />
        </div>
      </aside>
    </>
  );
};

export default Category;
