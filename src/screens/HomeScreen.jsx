import React, { useEffect, useState } from "react";
import CategoriesBar from "../components/categories_Bar/CategoriesBar";
import Home_VideoCard from "../components/home_VideoCard/Home_VideoCard";
import request from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideos } from "../features/videos/homeVideosSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  let dispatch = useDispatch();
  let { videos,nextPageToken } = useSelector((store) => store.homeVideos);
  // let [hVideos,setHVideos] = useState([])
  console.log("rendering homescreen");
  // console.log(nextPageToken);
  // console.log(videos);

  let getHomeScreenVideos = async () => {
    let res = await request("/videos", {
      params: {
        part: "snippet",
        chart: "mostPopular",
        maxResults: 30,
        regionCode: "IN",
        pageToken: nextPageToken? nextPageToken : "",
      },
    });
    
    dispatch(
      setHomeVideos({
        videos: videos.length>0 ? videos.concat(res?.data?.items) : res?.data?.items,
        nextPageToken: res?.data?.nextPageToken,
      })
    );
    // setHVideos(videos)
  };

  useEffect(() => {
    getHomeScreenVideos()
  }, []);
  // useEffect(() => {
  //   setHVideos(videos)
  // }, [videos])
  
  return (
    <div className="homescreen py-3">
      <CategoriesBar />
      {/* <div className="my-10 md:mx-6 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-8 xl:gap-4 bg-red-400 overflow-auto"> */}
      {/* {videos.map((video) => {
          return (
            <Home_VideoCard key={video.id} video={video} />
          );
        })} */}

      <InfiniteScroll
        dataLength={videos.length} 
        next={() => {
          console.log("adding videos");
          getHomeScreenVideos();
        }}
        hasMore={true}
        height={"100vh"}
        className="infinite-scroll-component"
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>Yay! You have seen it all</b>
          </p>
        }
      >
        {videos.map((video, index) => {
          return <Home_VideoCard key={index} video={video} />;
        })}
      </InfiniteScroll>
    </div>
  );
};

export default HomeScreen;
