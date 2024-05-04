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

const Layout = () => {
  return (
    <>
      <div className="w-scrren h-screen bg-black">
        <Header />
        <div className="h-[90vh] flex ">
          <Sidebar />
          <div className="overflow-y-scroll w-full">
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
