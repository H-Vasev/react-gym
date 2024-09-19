import classes from "./LogIn.module.css";

export default function LogIn() {
  return (
    <>
      <div className={classes.container}>
        <div>
          <h1>LogIn</h1>
          <div className={classes["form-container"]}>
            <div>
              <label>Email</label>
              <input type="email" />
            </div>
            <div>
              <label>Password</label>
              <input type="text" />
            </div>
            <div>
              <button>LogIn</button>
              <button>Register</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
