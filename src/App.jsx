import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import HomeScreen, { } from "./screens/HomeScreen";
import Layout from "./Layout";
import Authentication_Layout from "./components/authentication_Forms/Authentication_Layout";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./features/auth/authSlice";
import { setLoading } from "./features/loading";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeScreen />} />
      </Route>
      <Route path="/auth" element={<Authentication_Layout />} />
    </>
  )
);

function App() {
  let dispatch = useDispatch();
  
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        setUser({
          email: currentUser?.email,
          name: currentUser?.displayName,
          emailVerified: currentUser?.emailVerified,
        })
      );
      dispatch(setLoading());
      console.log("user changed in useEffect");
    });
  }, []);

  return (
    <>
      <div className="bg-yt-main h-screen w-screen">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
