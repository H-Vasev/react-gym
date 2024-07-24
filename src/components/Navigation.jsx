
import { NavLink } from "react-router-dom";
import classes from "./Navigation.module.css";

export default function Navigation() {

  return (
    <div className={classes.container}>
      <nav className={classes.navigation}>
        <p className={classes.title}>Neogym</p>
        <ul className={classes["nav-bar"]}>
          <li>
            <NavLink>Home</NavLink>
          </li>
          <li>
            <NavLink>Why us</NavLink>
          </li>
          <li>
            <NavLink to="/training">start now</NavLink>
          </li>
          <li>
            <NavLink>Contact Us</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
