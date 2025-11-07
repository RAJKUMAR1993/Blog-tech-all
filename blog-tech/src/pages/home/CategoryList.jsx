import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { tagsSelected } from "../../redux/features/filter/filterSlice";

const CategoryList = () => {
  const dispatch = useDispatch();
  const { tags: tagsSelectedTags } = useSelector((state) => state.filter);
  const isTagsSelected = (tag) => tagsSelectedTags.includes(tag);

  return (
    <>
      {/* category list */}
      <div className="mb-4">
        <ul>
          <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300
           ${isTagsSelected("AI") ? "selected bg-green-200 rounded" : ""}`}
          >
            <a
              onClick={() => dispatch(tagsSelected("AI"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-green-200 mr-3"></span>
              Artificial Intelligence
              <span className="text-gray-500 ml-auto">5 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300     ${
              isTagsSelected("Startups") ? "selected bg-green-200 rounded" : ""
            }`}
          >
            <a
              onClick={() => dispatch(tagsSelected("Startups"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-green-200 mr-3"></span>
              Startups
              <span className="text-gray-500 ml-auto">18 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${
              isTagsSelected("Security") ? "selected bg-green-200 rounded" : ""
            }`}
          >
            <a
              onClick={() => dispatch(tagsSelected("Security"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-yellow-300 mr-3"></span>
              Security
              <span className="text-gray-500 ml-auto">34 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${
              isTagsSelected("Apps") ? "selected bg-green-200 rounded" : ""
            } `}
          >
            <a
              onClick={() => dispatch(tagsSelected("Apps"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
              Apps
              <span className="text-gray-500 ml-auto">9 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          {/* <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${
              isTagsSelected("Tech") ? "selected bg-green-200 rounded" : ""
            } `}
          >
            <a
              onClick={() => dispatch(tagsSelected("Tech"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
              Tech
              <span className="text-gray-500 ml-auto">9 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${
              isTagsSelected("css") ? "selected bg-green-200 rounded" : ""
            } `}
          >
            <a
              onClick={() => dispatch(tagsSelected("css"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
              Css
              <span className="text-gray-500 ml-auto">9 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li>
          <li
            className={`px-1 py-4 border-b border-t border-white hover:border-gray-200 transition duration-300 ${
              isTagsSelected("debounce") ? "selected bg-green-200 rounded" : ""
            } `}
          >
            <a
              onClick={() => dispatch(tagsSelected("debounce"))}
              className="flex items-center text-gray-600 cursor-pointer"
            >
              <span className="inline-block h-4 w-4 bg-blue-300 mr-3"></span>
              Debounce
              <span className="text-gray-500 ml-auto">9 articles</span>
              <i className="text-gray-500 bx bx-right-arrow-alt ml-1"></i>
            </a>
          </li> */}
        </ul>
      </div>
    </>
  );
};

export default CategoryList;
