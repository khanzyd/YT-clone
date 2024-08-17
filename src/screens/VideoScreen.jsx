import React, { useEffect } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import VideoDetails from '../components/videoScreen/VideoDetails';
import SuggestionVideo from '../components/videoScreen/SuggestionVideo';
import request from '../api';
import { useDispatch, useSelector } from 'react-redux';
import watchVideoSlice, { setWatchVideoInfo } from '../features/videos/watchVideoSlice';
import numeral from 'numeral';


const VideoScreen = () => { 
  console.log("videoscreen");
  let dispatch = useDispatch();
  
  let {search} = useLocation();
  const query = new URLSearchParams(search)
  let id = query.get("v");
  
  let getVideoScreenInfo = async () => {
    let res = await request("/videos", {
      params: {
        part: "snippet,contentDetails,statistics",
        id
      },
    });

    let rawInfo = res?.data?.items[0] || {};
    let data = {
      title: res?.data?.items[0]?.snippet?.localized?.title,
      channelTitle : rawInfo?.snippet?.channelTitle,
      // channelImg :
      // channelSubscribers :
      description: rawInfo?.snippet?.localized?.description,
      descriptionTags: rawInfo?.snippet?.tags,
      viewCount: numeral(rawInfo?.statistics?.viewCount).format("0.0a"),
      likeCount: numeral(rawInfo?.statistics?.likeCount).format("0.0a"),
      commentCount: numeral(rawInfo?.statistics?.commentCount).format("0.0a"),
    };
    // console.log(rawInfo);
    // console.log(data.commentCount);
    dispatch(setWatchVideoInfo({WatchVideoInfo:{data}}));
    return res;
  } 

  useEffect(() => {
    getVideoScreenInfo().then((data)=>{
      console.log("done");
      console.log();
      
    })
  }, [])
  
  return (
    <div className="md:w-11/12 mx-2 md:mx-auto mt-5 md:mt-10 flex-col md:flex md:flex-row">
      <div className="w-full md:w-2/3 md:mx-10">
        <div className="h-[27vh] md:h-[65vh] md:rounded-2xl md:overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            style={{
              margin: "auto",
              borderRadius: "0px",
              overflow: "hidden",
              maxHeight: "100%",
              minHeight: "100%",
              minWidth: "100%",
              maxWidth: "100%",
            }}
            playing={false}
            controls={true}
          />
        </div>
        <VideoDetails/>
      </div>
      <div className="h-[200vh] w-full md:w-1/3">
          <div className='flex flex-col gap-2'>
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
            <SuggestionVideo />
          </div>
      </div>
    </div>
  );
}

export default VideoScreen