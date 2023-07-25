import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { destinationsData, responsive } from "../components/Data";
import DestinationCarousel from "./DestinationCarousel";
import "./DestinationCarouselStyles.css";

export default function DestinationCarouselImpl() {
  const destinations = destinationsData.map((item) => (
    <DestinationCarousel
      name={item.name}
      url={item.imageurl}
      description={item.description}
    />
  ));

  return (
    <div className="App">
      <Carousel showDots={true} responsive={responsive}>
        {destinations}
      </Carousel>
    </div>
  );
}
