import React from "react";
import CategoriesBar from "../components/categories_Bar/CategoriesBar";
import Home_VideoCard from "../components/home_VideoCard/Home_VideoCard";

const HomeScreen = () => {
  return (
    <div className="py-3 px-4 bg-yt-main">
      <CategoriesBar />
      <div className="py-3 bg-orange-600">
        <h1 className="text-xl text-slate-50">HomeScreen</h1>
        <Home_VideoCard/>
      </div>
    </div>
  );
};

export default HomeScreen;
