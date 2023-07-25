import "./HeroStyles.css";
import React from "react";
import Image1 from "../assets/kedarnath.jpeg";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="intro-image" alt="Kedarnath" src={Image1} />
      </div>
      <div className="content">
        <p>Hi, I am a Traveller and a</p>
        <h1>
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "React Developer",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Java Developer",
              1000,
              "Web Developer",
              1000,
              "Full Stack Developer",
              1000,
            ]}
            wrapper="span"
            speed={40}
            style={{ display: "inline-block", color: "white" }}
            repeat={Infinity}
          />
        </h1>

        <div>
          <Link to="/Destinations" className="btn">
            Destinations
          </Link>
          <Link to="/Contact" className="btn btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
