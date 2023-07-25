import React from "react";

export default function DestinationCarousel(props) {
  return (
    <div className="card">
      <img className="destination-img" src={props.url} alt={props.name} />
      <h2>{props.name}</h2>
      <p className="price">{props.price}</p>
      <p className="description">{props.description}</p>
      <p>
        <button className="btn">View More</button>
      </p>
    </div>
  );
}
