import React from 'react'
import "./_header.css"
import { FaBars, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbVideoPlus } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";


import YT_Logo from "../../assets/YT_logo_2.svg"
// #0F0F0F navbar main
// #222222 search button

const Header = () => {
  return (
    <div className="h-[8vh] md:h-[10vh] xl:h-[7vh] bg-yt-main text-slate-50 px-[1rem] md:px-[2rem] flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center ">
          <FaBars className="text-3xl mr-3" />
          <div className="w-32">
            <img src={YT_Logo} className="" alt="" />
          </div>
        </div>

        <div className="flex items-center min-w-[30%]">
          <form className="hidden md:flex items-strecth justify-center w-full h-full">
            <input
              type="text"
              placeholder="Search"
              className="w-full bg-yt-tertiary border border-slate-600 outline-none rounded-tl-full rounded-bl-full px-3 py-1"
            />
            <button
              type="submit"
              className="bg-yt-secondary border border-slate-600 px-5 rounded-tr-full rounded-br-full"
            >
              <CiSearch className="text-2xl" />
            </button>
          </form>
        </div>

        <div className="flex gap-5 items-center">
          <FaSearch className="text-2xl md:hidden " />
          <TbVideoPlus className="text-3xl" />
          <IoMdNotificationsOutline className="text-3xl" />
          <FaRegUserCircle className="text-3xl hidden md:block" />
        </div>
      </div>
    </div>
  );
}

export default Header