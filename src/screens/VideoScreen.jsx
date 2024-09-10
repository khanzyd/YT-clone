import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import VideoDetails from '../components/videoScreen/VideoDetails';
import SuggestionVideo from '../components/videoScreen/SuggestionVideo';
import { useDispatch } from 'react-redux';
import { togglesideBar } from '../features/sidebarSlice';
import request from '../api';


const VideoScreen = () => { 
  console.log("videoscreen");
  let dispatch = useDispatch();
  let {search} = useLocation();
  const query = new URLSearchParams(search)
  let videoId = query.get("v");
  dispatch(togglesideBar(false));

  return (
    <div className="md:w-11/12 mx-2 md:mx-auto mt-5 md:mt-10 flex-col md:flex md:flex-row">
      <div className="w-full md:w-2/3 md:mx-10">
        <div className="h-[27vh] md:h-[65vh] md:rounded-2xl md:overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${videoId}`}
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
        <VideoDetails videoId={videoId}/>
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