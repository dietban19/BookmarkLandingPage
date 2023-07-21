import React, { useEffect, useState } from "react";
// import Logo from "../assets/logo-bookmark.svg";
// import "./header.css";
import { useLocation, useNavigate } from "react-router-dom";
import { BiMenuAltRight } from "react-icons/bi";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import "./navbar.css";

const navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentUrl = location.pathname;

  // Set the initial state of the open based on screen width
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    // Add or remove the "disable-scroll" class on the body element based on the "open" state
    if (open) {
      if (window.innerWidth > 768) {
        return;
      }
      document.body.classList.add("disable-scroll");
    } else {
      document.body.classList.remove("disable-scroll");
    }
  }, [open]);

  useEffect(() => {
    const handleScroll = () => {
      const headerWrapper = document.querySelector(".nav-wrapper");
      const headerNav = document.querySelector(".nav-menu");
      const headerButton = document.querySelector(".loginButton");
      if (window.scrollY > 0) {
        headerWrapper.classList.add("scrolled");
        headerNav.classList.add("navScrolled");
        headerButton.classList.add("buttonScrolled");
        setScrolled(true);
      } else {
        headerWrapper.classList.remove("scrolled");
        headerNav.classList.remove("navScrolled");
        headerButton.classList.remove("buttonScrolled");
        setScrolled(false);
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

  function handleClick(e) {
    if (currentUrl !== "/home") {
      navigate(`/home${e}`);
    } else {
      console.log("good");
    }
  }
  function tes(e) {
    navigate(e);
  }
  return (
    <section className="nav-wrapper">
      <div className="paddings innerWidth nav-container">
        <div className="flexCenter navImage">
          {open && window.innerWidth <= 768 ? (
            <a href="/home">
              <img src="./images/logo-bookmark-mobile.svg" />
            </a>
          ) : scrolled ? (
            <a href="/home">
              <img src="./images/logo-bookmark-mobile.svg" />
            </a>
          ) : (
            <a href="/home">
              <img src="./images/logo-bookmark.svg" />
            </a>
          )}
        </div>
        <div className={`flexCenter ${open ? "nav-menu" : "nav-menu  closed"}`}>
          <a
            href="#features"
            onClick={() => {
              handleClick("#features");
            }}
          >
            Features
          </a>
          <a href="#">Pricing</a>
          <Link to="/contacts">Contact</Link>

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
