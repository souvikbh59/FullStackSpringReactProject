import React from "react";
import DestinationCarouselImpl from "../components/DestinationCarouselImpl";
import Footer from "../components/Footer";
import HeroRest from "../components/HeroRest";
import Navbar from "../components/Navbar";
import PricingCard from "../components/PricingCard";

const Destinations = () => {
  return (
    <div>
      <Navbar />
      <HeroRest
        heading="DESTINATIONS"
        text="Some of the places that I recently visited"
        text2="Here are the informations below"
      />
      <DestinationCarouselImpl />
      <PricingCard />
      <Footer />
    </div>
  );
};

export default Destinations;
