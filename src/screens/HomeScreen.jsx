import React, { useEffect } from "react";
import CategoriesBar from "../components/categories_Bar/CategoriesBar";
import Home_VideoCard from "../components/home_VideoCard/Home_VideoCard";
import request from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideos } from "../features/videos/homeVideosSlice";

const HomeScreen = () => {
  let dispatch = useDispatch();
  let {videos} = useSelector((store)=>store.homeVideos)
  console.log("rendering homescreen");

  useEffect(() => {
    let getHomeScreenVideos = async () => {
      let res = await request("/videos", {
        params: {
          part: "snippet,statistics,contentDetails",
          chart: "mostPopular",
          regionCode: "IN",
          pageToken: "",
        },
      });
      return res;
    }; 
    getHomeScreenVideos().then((res)=>{
      dispatch(setHomeVideos(
        {
          videos:res?.data?.items,
          nextPageToken: res?.data?.nextPageToken
        }
      ))
    });
    
  }, []);
  
  return (
    <div className="py-3">
      <CategoriesBar />
      <div className="my-10 md:mx-6 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4">
        {
          videos.map((video)=>{
            return <Home_VideoCard key={video.id} video={video} />;
          })
        }
        {/* <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard />
        <Home_VideoCard /> */}
      </div>
    </div>
  );
};

export default HomeScreen;
