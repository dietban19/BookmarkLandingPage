import React from "react";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./pages/Hero/hero";
import Features from "./pages/Features/features";
import Download from "./pages/Download/download";
import FAQ from "./pages/FAQ/faq";
import SignUp from "./pages/SignUp/signup";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <SignUp />
      <Footer />
    </div>
  );
};

export default App;
