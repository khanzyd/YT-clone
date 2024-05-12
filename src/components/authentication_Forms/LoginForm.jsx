import {
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase";
import { useDispatch, useSelector } from "react-redux";
import Form_Input from "./Form_Input";
import { useNavigate } from "react-router-dom";
import { setLoading } from "../../features/loading";

const LoginForm = ({ setFormType }) => {
  let {loading} = useSelector((store)=>store.loading)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let login = () => {
    try {
      signInWithEmailAndPassword(auth, email, password).then(() => {
        navigate("/");
      });
      dispatch(setLoading());
      // setEmail("");
      // setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form_Input
        type={"email"}
        placeholder={"Enter Email"}
        inputValue={email}
        setter={setEmail}
      />
      <Form_Input
        type={"password"}
        placeholder={"Enter Password"}
        inputValue={password}
        setter={setPassword}
      />

      <button
        className="form-submit-btn"
        onClick={login}
      >
        {`${loading == false? "Login":"loading..."}`}
      </button>
      <div className="flex select-none">
        <p className="mr-2">Don't have an account </p>
        <button
          onClick={() => {
            setFormType("SignUp");
          }}
          className="underline"
        >
          signUp
        </button>
      </div>
    </>
  );
};

export default LoginForm;
