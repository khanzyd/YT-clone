import React from 'react'
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';
import VideoDetails from '../components/videoScreen/VideoDetails';
import SuggestionVideo from '../components/videoScreen/SuggestionVideo';

const VideoScreen = () => {
  console.log("videoscreen");
  let {search} = useLocation();
  const query = new URLSearchParams(search)
  console.log(query.get("v"));
  
  return (
    <div className="md:w-11/12 mx-2 md:mx-auto mt-5 md:mt-10 flex-col md:flex md:flex-row">
      <div className="w-full md:w-2/3 md:mx-10">
        <div className="h-[27vh] md:h-[65vh] md:rounded-2xl md:overflow-hidden">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${query.get("v")}`}
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