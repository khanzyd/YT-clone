import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Loader from "./components/loader/Loader";

const Layout = () => {
  const user = useSelector((store) => store.user);
  const { loading } = useSelector((store) => store.loading);

  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => setSidebar((value) => !value);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!user.email ? (
        <Navigate to={"/auth"} />
      ) : (
        <div className="w-scrren  bg-yt-main">
          <Header toggleSidebar={toggleSidebar} />

          <div className="h-[92vh] md:h-[90vh] xl:h-[93vh] md:flex relative">
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />

            <div className="screen overflow-auto w-full h-full">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
