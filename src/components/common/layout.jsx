import React from "react";
import Navbar from "../navbar";
import Footer from "../footer";
import Hero from "../../pages/Hero/hero";

const Layout = ({ children }) => {
  // Find the first child component
  let firstChild = null;
  React.Children.forEach(children, (child) => {
    if (!firstChild && React.isValidElement(child)) {
      firstChild = child;
    }
  });
  // console.log("FIRST", children[0]);

  return (
    <>
      <div className="navdiv">
        <Navbar />

        {firstChild}
      </div>

      {React.Children.map(children, (child) => {
        if (child !== firstChild) {
          return child;
        }
        return null; // Skip the first child since we already rendered it above
      })}

      <Footer />
    </>
  );
};

export default Layout;
