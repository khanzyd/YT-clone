import React, { useEffect } from "react";
import CategoriesBar from "../components/categories_Bar/CategoriesBar";
import Home_VideoCard from "../components/home_VideoCard/Home_VideoCard";
import request from "../api";
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideos } from "../features/videos/homeVideosSlice";
import InfiniteScroll from "react-infinite-scroll-component";

const HomeScreen = () => {
  let dispatch = useDispatch();
  let { videos,nextPageToken } = useSelector((store) => store.homeVideos);
  console.log("rendering homescreen");

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
  };

  useEffect(() => {
    getHomeScreenVideos()
  }, []);

  return (
    <div className="homescreen py-3">
      <CategoriesBar />
      <InfiniteScroll
        dataLength={videos.length} 
        next={() => {
          console.log("adding videos");
          getHomeScreenVideos();
        }}
        style={{padding: "0px"}}
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
