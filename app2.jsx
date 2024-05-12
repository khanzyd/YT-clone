import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";

import HomeScreen from "./src/screens/HomeScreen";
import Layout, { } from "./src/Layout";
import { setLoading } from "./src/features/loading";
import Authentication_Layout from "./src/components/authentication_Forms/Authentication_Layout";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./src/firebase";
import { loginUser } from "./src/features/authentication/authenticationSlice";


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
  const loading = useSelector((store)=>store.loading)
  console.log(loading);
  let navigate = useNavigate

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(
        loginUser({
          email: currentUser?.email,
        })
      );
      if (!currentUser) {
        setLoading(false);
        navigate("/auth");
      } else {
        setLoading(false);
      }
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