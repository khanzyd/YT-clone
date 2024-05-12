import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Header from "./src/components/header/Header";
import Sidebar from "./src/components/sidebar/Sidebar";
import Loader from "./src/components/loader/Loader";
import { auth } from "./src/firebase";
import { loginUser } from "./src/features/authentication/authenticationSlice";
import { onAuthStateChanged } from "firebase/auth";

const Layout = () => {
  const [loading, setLoading] = useState(true);

  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => setSidebar((value) => !value);

  return (
    <>
      {loading && <Loader />}
      {!loading && user.email && (
        <div className="w-scrren h-screen bg-yt-main">
          <Header toggleSidebar={toggleSidebar} />

          <div className="h-[92vh] md:h-[90vh] xl:h-[93vh] md:flex relative ">
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />

            <div className="overflow-y-scroll w-full h-full">
              <Outlet />
            </div>
          </div>
        </div>
      )}
    </>
  );
  // (
  //   loading ? (
  //     <>
  //       {console.log("loading")}
  //       <Loader />
  //       {console.log("loading2")}
  //     </>
  //   ) : (
  //     <>
  //       {!user.email ? (
  //         <>
  //           <h1 className="text-4xl">!user.email</h1>
  //         </>
  //       ) : (
  //         <div className="w-scrren h-screen bg-black">
  //           <Header toggleSidebar={toggleSidebar} />

  //           <div className="h-[92vh] md:h-[90vh] xl:h-[93vh] md:flex relative ">
  //             <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />

  //             <div className="overflow-y-scroll w-full h-full">
  //               <Outlet />
  //             </div>
  //           </div>
  //         </div>
  //       )}
  //     </>
  //   )
  // );
};

export default Layout;
