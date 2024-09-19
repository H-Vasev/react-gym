import classes from "./LogIn.module.css";

export default function LogIn() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>LogIn</h1>
          <div className={classes["form-container"]}>
            <label>Email</label>
            <input type="email" />

            <label>Password</label>
            <input type="text" />

            <div className={classes["button-container"]}>
              <button>LogIn</button>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
