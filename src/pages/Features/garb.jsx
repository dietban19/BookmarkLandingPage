import React, { useState, useEffect } from "react";
import "./features.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import data from "../../utils/slider.json";
import "swiper/css";
const TabChoices = () => {
  const [activeTab, setActiveTab] = useState("Simple Bookmarking");

  const swiper = useSwiper();

  const handleTabClick = (tabTitle, index) => {
    setActiveTab(tabTitle);
    swiper.slideTo(index, 300);
  };

  return (
    <div className="flexCenter tabContainer">
      <span
        className={`tabTitle ${
          activeTab === "Simple Bookmarking" ? "active" : ""
        }`}
        onClick={() => handleTabClick("Simple Bookmarking", 0)}
      >
        Simple Bookmarking
      </span>
      <span
        className={`tabTitle ${
          activeTab === "Speedy Searching" ? "active" : ""
        }`}
        onClick={() => handleTabClick("Speedy Searching", 1)}
      >
        Speedy Searching
      </span>
      <span
        className={`tabTitle ${activeTab === "Easy Sharing" ? "active" : ""}`}
        onClick={() => handleTabClick("Easy Sharing", 2)}
      >
        Easy Sharing
      </span>
    </div>
  );
};
const Features = () => {
  // State to keep track of the active tab
  const [activeTab, setActiveTab] = useState("Simple Bookmarking");
  const swiper = useSwiper();
  // Function to handle click on the tab
  const handleTabClick = (tabTitle, index) => {
    setActiveTab(tabTitle);
    console.log(tabTitle, index);
    swiper.slideTo(index, 300);
    // swiper.slideTo(index, 300);
  };

  useEffect(() => {
    // When the activeTab changes, find the corresponding index and slide to it
    const index = data.findIndex((item) => item.title === activeTab);
    if (index !== -1) {
      swiper.slideTo(index, 300);
    }
  }, [activeTab, swiper]);
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
        </span>
        {data.map((card, i) => (
          <div className="flexCenter tabContainer">
            <span
              key={i}
              className={`tabTitle ${
                activeTab === `${card.tab}` ? "active" : ""
              }`}
              onClick={() => handleTabClick(`${card.tab}`, 0)}
            >
              {card.tab}
            </span>
          </div>
        ))}
        <Swiper className="swiperWrapper" slidesPerView={1}>
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              <div className="flexCenter f-card">
                <img src={card.image}></img>
                <div className=" flexColStart f-card__details">
                  <span className="primaryText">{card.title}</span>
                  <span className="secondaryText">{card.detail}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Features;
