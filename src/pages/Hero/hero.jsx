import React from "react";
// import Laptop from "./images/illustration-hero.svg";
import "./hero.css";
const hero = () => {
  return (
    <section className="h-wrapper">
      <div className="paddings innerWidth flexCenter h-container">
        <div className="h-right">
          <div className="h-imageContainer">
            <img src="./images/illustration-hero.svg" />
          </div>
        </div>
        <div className="flexColStart h-left ">
          <span className="primaryText">
            A Simple Bookmark <br />
            Manager
          </span>
          <span className="secondaryText">
            A clean and simple interface to organize your favourite <br />
            websites. Open a new browser tab and see your sites load instantly.
            Try it for free.
          </span>
          <div className="flexCenter buttons">
            <button className="button">Get it on Chrome</button>
            <button className="button">Get it on Firefox</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default hero;
