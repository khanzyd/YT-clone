import React from 'react'
import YT_Thumbnail from "../../assets/YT_thumbnail.png"
import YT_Channel from "../../assets/YT_channel2.jpg"
import TextTruncate from 'react-text-truncate';

const SuggestionVideo = () => {
  return (
    <div className="md:flex gap-1">
      <div className="relative w-full md:w-5/12 md:rounded-xl overflow-hidden  ">
        <img src={YT_Thumbnail} alt="" className="h-full w-full object-cover" />
        <span className="absolute bottom-1 right-2 text-sm font-semibold text-slate-100 bg-yt-main px-1">
          {"3:40"}
        </span>
      </div>
      <div className="cursor-pointer md:w-7/12">
        <div className="my-2 flex gap-2">
          <div className="my-auto md:hidden w-[14%] overflow-hidden">
            <img
              src={YT_Channel}
              alt=""
              className="object-cover rounded-full"
            />
          </div>

          <div className="flex flex-col text-slate-100 leading-5 w-[85%] md:w-full">
            <TextTruncate
              line={2}
              className="font-semibold"
              element="h3"
              truncateText="…"
              text={
                "INSANE OCTANE SOLO 23 KILLS and 5,960 DAMAGE APEX LEGENDS GAMEPLAY 2024 VER 20"
              }
              // "INSANE OCTANE SOLO 23 KILLS and 5,960 DAMAGE APEX LEGENDS GAMEPLAY 2024 VER 20"
            />
            <div className="flex gap-3 md:gap-0 md:flex-col my-1 font-light md:text-xs md:tracking-wide">
              <p>{"Hello World"}</p>
              <p>
                {"36M"} views • {"3 years ago"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SuggestionVideo