import React from "react";
import "./_sidebar.css";
import { Link } from "react-router-dom";

import { GoHomeFill } from "react-icons/go";
import { IoIosLogOut } from "react-icons/io";
import {
  MdOutlineSubscriptions,
  MdHistory,
  MdLibraryAdd,
  MdOutlineWatchLater,
  MdWatchLater,
} from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";

const Sidebar = ({sidebar,toggleSidebar}) => {
  return (
    <>
      <div className={`sidebar ${sidebar? "open": "close"}`} >
        <nav className="Navbar flex flex-col  items-strecth min-h-full px-2 py-1 min-w-full">

          <Link to={""} className="link">
            <GoHomeFill className="sidebarIcons" />
            <h3>Home</h3>
          </Link>

          <Link to={""} className="link">
            <MdOutlineSubscriptions className="sidebarIcons" />
            <h3>Subscriptions</h3>
          </Link>

          <Link to={""} className="link">
            <AiOutlineLike className="sidebarIcons" />
            <h3>Liked vidoes</h3>
          </Link>

          <Link to={""} className="link">
            <MdHistory className="sidebarIcons" />
            <h3>History</h3>
          </Link>

          <Link to={""} className="link">
            <MdLibraryAdd className="sidebarIcons" />
            <h3>Library</h3>
          </Link>

          <Link to={""} className="link">
            <MdWatchLater className="sidebarIcons" />
            <h3>Watch later</h3>
          </Link>

        </nav>
      </div>
    </>
  );
};

export default Sidebar;
