import React from "react";
import Layout from "../common/Layout";
import Navbar from "../navbar";
import Footer from "../footer";
import Hero from "../../pages/Hero/hero";
import Features from "../../pages/Features/features";
import Download from "../../pages/Download/download";
import FAQ from "../../pages/FAQ/faq";
import SignUp from "../../pages/SignUp/signup";
import Contacts from "../../pages/Contacts/contacts";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Layout>
        <Hero />
        <Features></Features>
        <Download />
        <FAQ />
        <SignUp />
        {/* <Footer /> */}
      </Layout>
    </>
  );
};

export default Home;
