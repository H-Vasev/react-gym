

import classes from "./Header.module.css";
import Hero from "./Hero";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <>
      <div className={classes["hero-area"]}>
        <header>
          <Navigation/>
          <Hero/>
        </header>
      </div>
    </>
  );
}
