import React from "react";

const Subscribe = () => {
  return (
    <>
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
    </>
  );
};

export default Subscribe;
