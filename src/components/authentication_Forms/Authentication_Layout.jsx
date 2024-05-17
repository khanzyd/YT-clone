import React, { useState } from "react";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import "./_auth.css";
import { useSelector } from "react-redux";

const Authentication_Layout = () => {
  console.log("authentication layout");
  let [formType, setFormType] = useState("Login");

  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="auth-Layout">
        <h2 className="text-3xl font-semibold tracking-wider">{`${formType} Form`}</h2>
        <div className="form-Buttons select-none">
          <span
            className={`form-Button-Type ${
              formType == "Login" ? "bg-white text-black" : ""
            }`}
            onClick={() => setFormType("Login")}
          >
            Login
          </span>
          <span
            className={`form-Button-Type ${
              formType == "SignUp" ? "bg-white text-black" : ""
            }`}
            onClick={() => setFormType("SignUp")}
          >
            SignUp
          </span>
        </div>

        {formType === "Login" ? (
          <LoginForm setFormType={setFormType} />
        ) : (
          <SignUpForm setFormType={setFormType} />
        )}
      </div>
    </div>
  );
};

export default Authentication_Layout;
