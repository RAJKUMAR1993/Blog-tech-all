import React, { useEffect, useState } from "react";
import Card from "./Card ";
import CategoryList from "../home/CategoryList";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../redux/features/blogs/blogSlice";

const PostCards = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
  const { blogs, loading, isError, error } = useSelector(
    (state) => state.blogs
  );
  useEffect(() => {
    // Dispatch an action to fetch blogs
    dispatch(fetchBlogs());
  }, [dispatch]);

  // Pagination logic (if needed)
  const blogPerPage = 5;
  const startIndexPage = (currentPage - 1) * blogPerPage;
  const endIndexPage = currentPage * blogPerPage;
  const paginationBlogsData = blogs.slice(startIndexPage, endIndexPage);

  const handlePageChange = (nextPage) => {
    setCurrentPage(nextPage);
  };

  return (
    <>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-2/3">
            {/* single cards */}
            {!isError && !loading && blogs.length > 0 ? (
              <div>
                {paginationBlogsData.map((blog, index) => (
                  <Card key={index} blog={blog} />
                ))}
              </div>
            ) : (
              <div className="col-span-12">No blogs found!</div>
            )}
            {/* Map through blogs and render cards */}
            <div>
              {}
              <div className="pagination space-x-2">
                <button
                  className="px-2 bg-red-500 text-white rounded cursor-pointer"
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                <span>{currentPage}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  className="px-2 bg-indigo-500 text-white rounded cursor-pointer"
                >
                  Next
                </button>
              </div>
            </div>
            {/* ) : (<div className="col-span-12">No blogs found!</div>
        )} */}
          </div>
          <CategoryList />
        </div>
      </div>
    </>
  );
};

export default PostCards;
