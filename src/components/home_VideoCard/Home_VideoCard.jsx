import React from 'react'
import TextTruncate from "react-text-truncate";
import YT_Thumbnail from "../../assets/YT_thumbnail.png"
import YT_Channel from "../../assets/YT_channel2.jpg"

const Home_VideoCard = () => {
  return (
    <>
      <div className="w-full py-2 cursor-pointer">
        <div className="relative w-full rounded-xl overflow-hidden">
          <img src={YT_Thumbnail} alt="" className="object-cover" />
          <span className="absolute bottom-1 right-2 text-sm font-semibold text-slate-100 bg-yt-main px-1">
            9:10:54
          </span>
        </div>
        <div className="flex justify-center mt-4 md:mt-4">
          <div className="h-[10%] overflow-hidden">
            <img
              src={YT_Channel}
              alt=""
              className="object-cover rounded-full"
            />
          </div>
          <div className="flex flex-col px-4 text-slate-100 leading-5 max-w-[85%]">
            <TextTruncate
              line={2}
              className="font-bold"
              element="h3"
              truncateText="…"
              text="INSANE OCTANE SOLO 23 KILLS and 5,960 DAMAGE APEX LEGENDS GAMEPLAY 2024 VER 20"
              // textTruncateChild={<a href="#">Read on</a>}
            />
            {/* <h3 className="font-bold">
              INSANE OCTANE SOLO 23 KILLS and 5,960 DAMAGE
            </h3> */}
            <div className="flex gap-3 md:gap-0 md:flex-col my-1 font-light">
              <p>APEX LEGENDS</p>
              <p>115M views • 1 year ago </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home_VideoCard