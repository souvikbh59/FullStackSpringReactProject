import React from "react";
import Footer from "../components/Footer";
import HeroRest from "../components/HeroRest";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroRest
        heading="CONTACT"
        text="Here is the way to Connect with me"
        text2="Please Review this Page"
      />
      <Footer />
    </div>
  );
};

export default Contact;
