import React from 'react'
import ReactPlayer from 'react-player/youtube';
import { useLocation } from 'react-router-dom';

const VideoScreen = () => {
  console.log("videoscreen");
  let {search} = useLocation();
  const query = new URLSearchParams(search)
  console.log(query.get("v"));
  
  return (
    <div className="bg-purple-600 md:w-11/12 mx-2 md:mx-auto mt-5 md:mt-10 flex-col md:flex md:flex-row">
      <div className="bg-red-700 w-full md:w-2/3 md:mx-10">
        <div className="bg-pink-600 h-[30vh] md:h-[65vh]">
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${query.get("v")}`}
            style={{
              margin: "auto",
              borderRadius: "10px",
              overflow: "hidden",
              maxHeight: "100%",
              minHeight: "100%",
              minWidth: "100%",
              maxWidth: "100%",
            }}
            playing={false}
          />
        </div>
      </div>
      <div className="bg-yellow-500 h-[200vh] w-full md:w-1/3">hello</div>
    </div>
  );
}

export default VideoScreen