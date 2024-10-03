import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import classes from "./LogIn.module.css";
import { validateForm } from "../utilities/formValidation.js";
import { fetchRegisteredUser, fetchLogIn } from "../store/user-actions.js";

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

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  function handelSignUp() {
    setSignUp((state) => !state);
  }

  async function handleRegister(event) {
    event.preventDefault();

    const formData = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: signUp ? confirmPasswordRef.current?.value : null,
    };
    const validations = validateForm(formData);
    console.log(validations)
    setMessages((prevState) => (prevState = validations));

    if (
      !validations.isEmailError &&
      !validations.isPasswordError &&
      !validations.isConfirmPassError
    ) {
      await dispatch(
        fetchRegisteredUser(
          formData.email,
          formData.password,
          formData.confirmPassword
        )
      );
      navigate("/");
    }

    if (!signUp && !validations.isEmailError && !validations.isPasswordError) {
      await dispatch(fetchLogIn(formData.email, formData.password));
      navigate("/");
    }

    emailRef.current.value = "";
    passwordRef.current.value = "";

    if(confirmPasswordRef.current){
      confirmPasswordRef.current.value = "";
    }
  }

  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>{signUp ? "Register" : "LogIn"}</h1>
          <form className={classes["form-container"]}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            {messages.isEmailError && (
              <p className={classes["error-message"]}>{messages.email}</p>
            )}
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
            {messages.isPasswordError && (
              <p className={classes["error-message"]}>{messages.password}</p>
            )}
            {signUp && <label>Confirm Password</label>}
            {signUp && (
              <input type="password" ref={confirmPasswordRef} required />
            )}
            {messages.isConfirmPassError && (
              <p className={classes["error-message"]}>
                {messages.confirmPassword}
              </p>
            )}
            <div className={classes["button-container"]}>
              {!signUp && (
                <button type="button" onClick={handleRegister}>
                  LogIn
                </button>
              )}
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
