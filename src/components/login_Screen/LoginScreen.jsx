import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth } from "../../firebase";
import { useDispatch } from "react-redux";
import { loginUser } from "../../features/authentication/authenticationSlice";

const LoginScreen = () => {
  const dispatch = useDispatch();
  let [email,setEmail] = useState("")
  let [password,setPassword] = useState("")

  onAuthStateChanged(auth,(currentUser)=>{
    dispatch(loginUser({
      email:currentUser?.email,
    }))
  })

  let signUp = async () => {
    try {
      let user = await createUserWithEmailAndPassword(auth,email,password);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  }

  let login = async () => {
    try {
      let user = await signInWithEmailAndPassword(auth, email, password);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-screen w-screen bg-yt-secondary flex justify-center items-center">
      <div className="flex flex-col justify-center items-center gap-5 w-[80%] md:w-[30%] px-5 py-7 border border-1 rounded-3xl">
        <input
          type="email"
          placeholder="Enter email"
          className="w-[80%] px-5 py-1 rounded-xl"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          className="w-[80%] px-5 py-1 rounded-xl"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="bg-yt-tertiary text-slate-100 font-bold px-3 py-1 rounded-full"
          onClick={signUp}
        >
          SignUp
        </button>

        <button
          className="bg-yt-tertiary text-slate-100 font-bold px-3 py-1 rounded-full"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default LoginScreen;
