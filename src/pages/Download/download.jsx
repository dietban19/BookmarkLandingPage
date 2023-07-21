import React from "react";
import "./download.css";
const download = () => {
  return (
    <section className="d-wrapper">
      <div className="paddings innerWidth flexColCenter d-container">
        <div className="flexCenter d-header">
          <span className="primaryText d-header__title">
            Download The extension
          </span>
          <span className="secondaryText">
            We’ve got more browsers in the pipeline. Please do let us know if
            you’ve got a favourite you’d like us to prioritize.
          </span>
        </div>
        <div className="flexCenter browsers">
          <div className="flexColCenter browserCard">
            <img src="./images/logo-chrome.svg" alt="chrome" />
            <span className="browserName">Add to Chrome</span>
            <span className="secondaryText">Minimum version: 62</span>
            <img src="./images/bg-dots.svg" />
            <button className="button">Add & Install Extension</button>
          </div>

          <div className="flexColCenter browserCard">
            <img src="./images/logo-firefox.svg" alt="firefox" />
            <span className="browserName">Add to Firefox</span>
            <span className="secondaryText">Minimum version: 65</span>
            <img src="./images/bg-dots.svg" />
            <button className="button">Add & Install Extension</button>
          </div>

          <div className="flexColCenter browserCard">
            <img src="./images/logo-opera.svg" alt="opera" />
            <span className="browserName">Add to Opera</span>
            <span className="secondaryText">Minimum version: 42</span>
            <img src="./images/bg-dots.svg" />
            <button className="button">Add & Install Extension</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default download;
