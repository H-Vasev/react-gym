import { useState } from "react";
import classes from "./LogIn.module.css";
import { useRef } from "react";

export default function LogIn() {
  const [signUp, setSignUp] = useState(false);
  const [messages, setMessages] = useState({
    isError: false,
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

    if (
      formData.confirmPassword != null &&
      formData.password != formData.confirmPassword
    ) {
      setMessages((prevState) => {
        return {
          ...prevState,
          isError: true,
          confirmPassword: "Does not match the password!",
        };
      });
    }

    console.log(formData);

    emailRef.current.value = "";
    passwordRef.current.value = "";
    confirmPasswordRef.current.value = "";
  }

  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>{signUp ? "Register" : "LogIn"}</h1>
          <form className={classes["form-container"]}>
            <label>Email</label>
            <input type="email" ref={emailRef} required />
            <label>Password</label>
            <input type="password" ref={passwordRef} required />
            {signUp && <label>Confirm Password</label>}
            {signUp && (
              <input type="password" ref={confirmPasswordRef} required />            
            )}
            {messages.isError && <p>{messages.confirmPassword}</p>}
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
