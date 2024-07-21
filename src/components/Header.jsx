

import classes from "./Header.module.css";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div class={classes["hero-area"]}>
        <header>
          <Navigation/>
        </header>
      </div>
    </>
  );
}
