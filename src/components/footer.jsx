import React from "react";
import "./footer.css";
const footer = () => {
  return (
    <section className="foot-wrapper">
      <div className="paddings innerWidth footer-container">
        <div className="flexCenter footerLeft">
          <div className="footerImage">
            <img src="./images/logo-bookmark-footer.svg" />
          </div>
          <nav className="flexCenter footerNav">
            <a href="">Features</a>
            <a href="">Pricing</a>
            <a href="">Contact</a>
          </nav>
        </div>
        <div className="flexCenter footerRight">
          <a href="">
            <img src="./images/icon-facebook.svg" />
          </a>
          <a href="">
            <img src="./images/icon-twitter.svg" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default footer;
