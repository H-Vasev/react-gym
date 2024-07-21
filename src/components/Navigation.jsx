import classes from "./Navigation.module.css"

export default function Navigation() {
  return (
    <div>
      <nav className={classes.navigation}>
        <p className={classes.title}>
          Neogym
        </p>
        <ul className={classes["nav-bar"]}>
          <li>
            <a href="index.html">
              Home
            </a>
          </li>
          <li>
            <a href="why.html">
              Why us
            </a>
          </li>
          <li>
            <a href="trainer.html">
              trainers
            </a>
          </li>
          <li>
            <a href="contact.html">
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
