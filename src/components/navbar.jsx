import React, { useEffect, useState } from "react";
// import Logo from "../assets/logo-bookmark.svg";
// import "./header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  // Set the initial state of the open based on screen width
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Add or remove the "disable-scroll" class on the body element based on the "open" state
    if (open) {
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [open]);
  useEffect(() => {
    const handleScroll = () => {
      const headerWrapper = document.querySelector(".h-wrapper");
      if (window.scrollY > 0) {
        headerWrapper.classList.add("scrolled");
      } else {
        headerWrapper.classList.remove("scrolled");
      }
    };
    const handleResize = () => {
      // Always open the menu when screen width is greater than 768 pixels
      setOpen(window.innerWidth > 768);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  function toggleNav() {
    setOpen((prevOpen) => !prevOpen);

    console.log(open);
  }

  const closeIconStyle = {
    color: "white", // Change this to the desired color
    // Other styles if needed
  };
  return (
    <section className="nav-wrapper">
      <div className="paddings innerWidth nav-container">
        <div className="flexCenter navImage">
          <a href="#asdf">
            {open ? (
              <img src="./images/logo-bookmark-mobile.svg" />
            ) : (
              <img src="./images/logo-bookmark.svg" />
            )}
          </a>
        </div>
        <div className={`flexCenter ${open ? "nav-menu" : "nav-menu  closed"}`}>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Contact</a>
          <button className="navButton loginButton">
            <a href="#">Login</a>
          </button>
        </div>
        <div className="menu-icon">
          <button onClick={toggleNav}>
            {open ? (
              <MdClose size={40} style={closeIconStyle} />
            ) : (
              <BiMenuAltRight size={40} />
            )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default navbar;
