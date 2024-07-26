import React from "react";
import "./_header.css";
import { FaBars, FaRegUserCircle, FaSearch } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbVideoPlus } from "react-icons/tb";
import { IoMdNotificationsOutline } from "react-icons/io";

import YT_Logo from "../../assets/YT_logo_2.svg";
import { useDispatch } from "react-redux";
import { togglesideBar } from "../../features/sidebarSlice";

const Header = () => {
  let dispatch = useDispatch();
  return (
    <div className="h-[8vh] md:h-[10vh] xl:h-[7vh] bg-yt-main border-b-2 border-b-yt-secondary text-slate-50 px-4 flex items-center">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center select-none">
          <FaBars
            className="text-3xl mr-3"
            onClick={() => {
              dispatch(togglesideBar());
            }}
          />
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
          <FaSearch className="text-2xl md:hidden cursor-pointer " />
          <TbVideoPlus className="text-3xl cursor-pointer" />
          <IoMdNotificationsOutline className="text-3xl cursor-pointer" />
          <FaRegUserCircle className="text-3xl hidden md:block cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Header;
