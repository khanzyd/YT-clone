import React, { useState } from 'react'
import Form_Input from './Form_Input';

const SignUpForm = ({setFormType}) => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [name, setName] = useState("");
  
  let signUp = async () => {
    try {
      let user = await createUserWithEmailAndPassword(auth,email,password);
      setEmail("");
      setPassword("");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Form_Input
        type={"name"}
        placeholder={"Enter name"}
        inputValue={name}
        setter={setName}
      />
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
        onClick={signUp}
      >
        SignUp
      </button>
      <div className="flex select-none">
        <p className="mr-2">Already have an account </p>
        <button
          onClick={() => {
            setFormType("Login");
          }}
          className="underline"
        >
          Login
        </button>
      </div>
    </>
  );
}

export default SignUpForm