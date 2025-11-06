import React from "react";

const CategoryList = () => {
  return (
    <>
      {/* Sidebar */}
      <aside className="w-full lg:w-1/3">
        <div className="bg-white p-6 rounded shadow-sm">
          <h3 className="text-gray-800 font-bold text-lg mb-4">
            POPULAR TOPICS
          </h3>
          <ul className="space-y-4">
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-300 rounded mr-3 block"></span>
                <span className="text-gray-700">Nutrition</span>
              </div>
              <span className="text-gray-400 text-sm">23 articles</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-indigo-200 rounded mr-3 block"></span>
                <span className="text-gray-700">Food & Diet</span>
              </div>
              <span className="text-gray-400 text-sm">18 articles</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-300 rounded mr-3 block"></span>
                <span className="text-gray-700">Workouts</span>
              </div>
              <span className="text-gray-400 text-sm">34 articles</span>
            </li>
            <li className="flex items-center justify-between">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-200 rounded mr-3 block"></span>
                <span className="text-gray-700">Immunity</span>
              </div>
              <span className="text-gray-400 text-sm">9 articles</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded shadow-sm mt-6">
          <h3 className="text-gray-800 font-bold text-lg mb-3">SUBSCRIBE</h3>
          <p className="text-gray-600 text-sm mb-4">
            Subscribe to our newsletter. We deliver the best health-related
            articles to your inbox
          </p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="your email address"
              className="border border-gray-200 rounded px-3 py-2 mb-3 text-sm focus:outline-none"
            />
            <button className="bg-indigo-600 text-white rounded py-2">
              Subscribe
            </button>
          </form>
        </div>
      </aside>
    </>
  );
};

export default CategoryList;
