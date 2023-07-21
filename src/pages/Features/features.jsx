import React, { useState, useEffect } from "react";
import "./features.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import "swiper/css";
const Features = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Simple Bookmarking");
  const swiper = useSwiper();
  // Function to handle click on the tab
  const handleTabClick = (tabTitle, index) => {
    setActiveTab(tabTitle);
    console.log(tabTitle, index);
  };

  // useEffect(() => {
  //   // When the activeTab changes, find the corresponding index and slide to it
  //   const index = data.findIndex((item) => item.title === activeTab);
  //   if (index !== -1) {
  //     swiper.slideTo(index, 300);
  //   }
  // }, [activeTab, swiper]);
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        <span className="flexColCenter f-header">
          <span className="f-header__title"> Features</span>
          <span className="secondaryText f-header__desc">
            Our aim is to make it quick and easy for you to access your
            favourite websites. Your bookmarks sync between your devices so you
            can access them on the go.
          </span>
          <div className="flexCenter tabContainer">
            {data.map((card, i) => (
              <span
                key={i}
                className={`tabTitle ${
                  activeTab === `${card.tab}` ? "active" : ""
                }`}
                onClick={() => handleTabClick(`${card.tab}`, i)}
              >
                {card.tab}
              </span>
            ))}
          </div>
        </span>
        <div className="flexCenter f-cardContainer">
          {data.map((card, i) =>
            activeTab === card.tab ? (
              <div key={i} className="flexCenter f-card">
                <img src={card.image}></img>
                <div className=" flexColStart f-card__details">
                  <span className="primaryText">{card.title}</span>
                  <span className="secondaryText">{card.detail}</span>
                  <button className="button">More Info</button>
                </div>
              </div>
            ) : null
          )}
        </div>
      </div>
    </section>
  );
};

export default Features;
