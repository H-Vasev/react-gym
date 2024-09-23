import { useState, useRef } from "react";

import classes from "./LogIn.module.css";
import { validateForm } from "../utilities/formValidation.js";

export default function LogIn() {
  const [signUp, setSignUp] = useState(false);
  const [messages, setMessages] = useState({
    isEmailError: false,
    isPasswordError: false,
    isConfirmPassError: false,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handelSignUp() {
    setSignUp((state) => !state);
  }

  function handleRegister(event) {
    event.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: signUp ? confirmPasswordRef.current.value : null,
    };

    const validations = validateForm(formData);

    setMessages(prevState => prevState = validations)
    
    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  }
  
  console.log(messages)
  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>{signUp ? "Register" : "LogIn"}</h1>
          <form className={classes["form-container"]}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            {messages.isEmailError && <p className={classes["error-message"]}>{messages.email}</p>}
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
            {messages.isPasswordError && <p className={classes["error-message"]}>{messages.password}</p>}
            {signUp && <label>Confirm Password</label>}
            {signUp && (
              <input type="password" ref={confirmPasswordRef} required />
            )}
            {messages.isConfirmPassError && <p className={classes["error-message"]}>{messages.confirmPassword}</p>}
            <div className={classes["button-container"]}>
              {!signUp && <button type="button">LogIn</button>}
              {!signUp && <span>or</span>}
              {!signUp ? (
                <button type="button" onClick={handelSignUp}>
                  Sign Up
                </button>
              ) : (
                <button type="button" onClick={handleRegister}>
                  Register
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
