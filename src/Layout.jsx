import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Loader from "./components/loader/Loader";

const Layout = () => {
  const user = useSelector((store) => store.user);
  const { loading } = useSelector((store) => store.loading);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      {!user.email ? (
        <Navigate to={"/auth"} />
      ) : (
        <div className="w-scrren bg-yt-main">
          {/* <Header toggleSidebar={toggleSidebar} /> */}
          <Header/>

          <div className="h-[92vh] md:h-[90vh] xl:h-[93vh] md:flex relative">
            <Sidebar/>

            <div className="overflow-auto w-full h-full">
              <Outlet/>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Layout;
