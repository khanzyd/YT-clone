import React from "react";
import Layout from "../components/Layout";
import CategoriesBar from "../components/categories_Bar/CategoriesBar";
import Home_VideoCard from "../components/home_VideoCard/Home_VideoCard";


const HomeScreen = () => {
  return (
    <div className="py-3">
      <Layout>
        <CategoriesBar />
      </Layout>
        <div className="my-10 md:mx-6 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4">
          <Home_VideoCard />
          <Home_VideoCard />
          <Home_VideoCard />
          <Home_VideoCard />
          <Home_VideoCard />
          <Home_VideoCard />
        </div>
    </div>
  );
};

export default HomeScreen;
