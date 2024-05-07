import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider
} from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import { useState } from "react";

const Layout = () => {
  const [sidebar, setSidebar] = useState(true);
  const toggleSidebar = () => setSidebar((value)=>{
    console.log(!value);
    return !value});
  return (
    <>
      <div className="w-scrren h-screen bg-black">
        <Header toggleSidebar={toggleSidebar} />
        <div className="h-[92vh] md:h-[90vh] xl:h-[93vh] md:flex relative ">
          <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
          <div className="overflow-y-scroll w-full h-full">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout/>}>
      <Route path="/" element={<HomeScreen />} />
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;