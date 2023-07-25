import "./HeroRestStyles.css";
import React from "react";
import { TypeAnimation } from "react-type-animation";

export default function HeroRest(props) {
  const text = props.text;
  console.log(text);
  const textSecond = props.text2;
  console.log(textSecond);

  return (
    <div className="herorest">
      <div className="heading">
        <h1>{props.heading}</h1>
        <p>
          <TypeAnimation
            sequence={[text, 1000, textSecond, 1000]}
            wrapper="span"
            loop
            speed={40}
            style={{ display: "inline-block", color: "white" }}
            repeat={Infinity}
          />
        </p>
      </div>
    </div>
  );
}
