import React from 'react'
import { FaChevronRight } from "react-icons/fa";

import "./_categoriesBar.css"


const CategoriesBar = () => {

    let categories = ["All","React js", "Next js", "Computer Programming", "Science fiction", "Gaming", "Anime", "Movies", "React js", "Next js", "Computer Programming", "Science fiction", "Gaming", "Anime", "Movies"];

  return (
    <div className="px-3 md:px-6 flex py-1 my-2 max-w-full">
      <div className="categoriesBar ">
        {categories.map((category,index) => {
          return (
            <button key={index} className="bg-yt-secondary font-semibold tracking-wide text-center text-slate-100 px-3 py-1 rounded-md">
              {category}
            </button>
          );
        })}
      </div>
      <button className=" ml-4 text-white right-0 bg-red-500">
        <FaChevronRight className="text-xl" />
      </button>
    </div>
  );
}

export default CategoriesBar