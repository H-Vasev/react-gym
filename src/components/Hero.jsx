
import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <section>
        <div className={classes.hero}>
          <h3>Fitness</h3>
          <h2>Training</h2>
          <h1>Neogym</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse .
          </p>
        </div>
      </section>
    </>
  );
}
