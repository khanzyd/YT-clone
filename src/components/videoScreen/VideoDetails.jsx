import React from "react";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { PiShareFat } from "react-icons/pi";
import YT_Channel from "../../assets/YT_channel2.jpg";

const VideoDetails = () => {
  return (
    <div className=" py-2 px-1 md:px-0">
      <h4 className="text-[1.1rem] font-semibold text-slate-50 leading-5 md:text-xl">
        Sikkim Tour Plan and Budget | Detailed A-Z Travel Guide | Top Tourist
        Places to visit in Sikkim
      </h4>

      <div className="flex flex-col justify-between gap-2 md:flex-row md:py-1 md:items-stretch">
        <div className="md:pr-4 py-1 md:py-0 flex md:block justify-between items-center">
          <div className="flex gap-3 items-center">
            <div className="w-12 h-12 md:w-11 md:h-11 rounded-full overflow-hidden">
              <img src={YT_Channel} alt="" className="" />
            </div>
            <div className="flex justify-center items-center gap-3 md:gap-0 md:flex-col md:items-start leading-5 text-slate-50">
              <p className="text-xl md:text-lg font-normal tracking-wide">
                Creator
              </p>
              <p className="text-sm md:text-sm font-bold md:font-normal text-nowrap">
                11 <span className="hidden md:inline">Subscribers</span>
              </p>
            </div>
          </div>
          <div className="md:hidden">
            <button className="px-3 py-1 bg-red-700 rounded-full">
              <p className="font-bold text-lg text-slate-50">Subscribe</p>
            </button>
          </div>
        </div>
        <div className="text-slate-50">
          <div className="flex items-center justify-between md:justify-normal h-full gap-3 ">
            <div className="flex bg-gray-700 rounded-full ">
              <button className="flex items-center gap-2 justify-center border-r-2 border-r-slate-200 px-3 py-1 font-semibold">
                <AiOutlineLike className="text-2xl " />
                22
              </button>
              <button className="flex items-center justify-center font-semibold gap-2 px-3 py-1">
                22
                <AiOutlineDislike className="text-2xl " />
              </button>
            </div>
            <button className="px-3 py-1 flex items-center justify-center gap-2 bg-gray-700 rounded-full">
              <PiShareFat className="text-xl" />
              <p className="font-semibold">share</p>
            </button>
            <button className="px-3 py-1 flex items-center justify-center gap-2 bg-gray-700 rounded-full">
              <FaRegBookmark className="text-xl" />
              <p className="font-semibold">Save</p>
            </button>
            <button className="px-3 py-1 bg-red-600 rounded-full hidden md:block">
              <p className="font-semibold">Subscribe</p>
            </button>
          </div>
        </div>
      </div>

      <div className="my-2 bg-gray-700 text-slate-50 text-sm rounded-xl px-3 py-2">
        <p className="text-[0.95rem]">78k views &nbsp; 2 years ago</p>
        <p className="">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora placeat quae nihil maxime laudantium beatae perspiciatis eos est corporis dolorem! Quisquam.</p>
        <div></div>
      </div>

      <div className="my-3">
        <h3 className="text-2xl font-semibold text-slate-50 ">Comments</h3>
      </div>
    </div>
  );
};

export default VideoDetails;
