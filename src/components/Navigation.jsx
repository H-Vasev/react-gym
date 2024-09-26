import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { popUpIsVisible } from "../store/video-actions";

import classes from "./Navigation.module.css";
import PopUp from "./PopUp";
import { useEffect } from "react";

export default function Navigation() {
  const dispatch = useDispatch();
  const popUpData = useSelector((state) => state.video.popUpData);
  const isVisible = popUpData.isVisible;

  const isLoggedIn = useSelector((state) => state.user.loggedUser); 
  console.log(isLoggedIn)

  useEffect(() => {
    if (isVisible) {
      const data = { name: "", isVisible: false, isSelected: false };

      const timer = setTimeout(() => {
        dispatch(popUpIsVisible(data));
      }, 3000);

      return () => clearTimeout(timer)
    }
  }, [isVisible, dispatch]);

  return (
    <>
      <div className={classes.container}>
        <nav className={classes.navigation}>
          <p className={classes.title}>Neogym</p>
          <ul className={classes["nav-bar"]}>
            <li>
              <NavLink>Home</NavLink>
            </li>
            <li>
              <NavLink>Select Workout</NavLink>
            </li>
            <li>
              <NavLink to="/exercise">Configure your Workout</NavLink>
            </li>
          </ul>
          {isLoggedIn ? <p>Welcome: {isLoggedIn}</p> : ""}
          {isLoggedIn ? <button>LogOut</button> : <NavLink to="/login">Login</NavLink>}
        </nav>

        {isVisible && (
          <PopUp message={popUpData.name} isSelected={popUpData.isSelected} />
        )}
      </div>
    </>
  );
}
