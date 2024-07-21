

import classes from "./ChooseUs.module.css";
import u1Image from "../../images/u-1.png";
import u2Image from "../../images/u-2.png";
import u3Image from "../../images/u-3.png";
import u4Image from "../../images/u-4.png";

export default function ChooseUs() {
  return (
    // <section class="us_section layout_padding">
    <section className={classes["us-section"]}>
      <div className={classes.container}>
        <div>
          <h2>Why Choose Us</h2>
        </div>

        <div className={classes["why-us"]}>
          <div className={classes["box-container"]}>
            <img src={u1Image} alt="" />
            <div>
              <h5>QUALITY EQUIPMENT</h5>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <div className={classes["box-container"]}>
            <img src={u2Image} alt="" />
            <div>
              <h5>NUTRITION</h5>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <div className={classes["box-container"]}>
            <img src={u3Image} alt="" />
            <div>
              <h5>HEALTHY DIET PLAN</h5>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
          <div className={classes["box-container"]}>
            <img src={u4Image} alt="" />
            <div>
              <h5>SPORT TRAINING</h5>
              <p>
                ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
