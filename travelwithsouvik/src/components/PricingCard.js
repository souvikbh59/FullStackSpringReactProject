import "./PricingCardStyles.css";
import React from "react";
import { Link } from "react-router-dom";

const PricingCard = () => {
  return (
    <div className="pricing">
      <h3
        style={{
          color: "white",
          textAlign: "center",
          fontSize: "3.5rem",
          padding: "1.2rem",
        }}
      >
        Plans with Prices
      </h3>
      <div className="card-container">
        <div className="card">
          <h3>North Sikkim</h3>
          <span className="bar"></span>
          <p>- via Gangtok - </p>
          <p className="btc">Rs.7500</p>
          <p>- 4 Nights 5 Days - </p>
          <p>- Min. 6 persons (p.p.rate) - </p>
          <p>- Sealdah to Sealdah - </p>
          <p>- Contact : 123456789 - </p>
          <Link to="/Contact" className="btn" id="button">
            Contact
          </Link>
        </div>

        <div className="card">
          <h3>Kedarnath and Tunganath</h3>
          <span className="bar"></span>
          <p>- via Haridwar - </p>
          <p className="btc">Rs.12500</p>
          <p>- 8 Nights 9 Days - </p>
          <p>- Min. 8 persons (p.p.rate) - </p>
          <p>- Howrah to Howrah - </p>
          <p>- Contact : 123456789 - </p>
          <Link to="/Contact" className="btn" id="button">
            Contact
          </Link>
        </div>

        <div className="card">
          <h3>Sandakfu and Phalut</h3>
          <span className="bar"></span>
          <p>- via Manebhanjan - </p>
          <p className="btc">Rs.7500</p>
          <p>- 4 Nights 5 Days - </p>
          <p>- Min. 5 persons - </p>
          <p>- Sealdah to Sealdah - </p>
          <p>- Contact : 123456789 - </p>
          <Link to="/Contact" className="btn" id="button">
            Contact
          </Link>
        </div>

        <div className="card">
          <h3>Varanashi</h3>
          <span className="bar"></span>
          <p className="btc">Rs.3500</p>
          <p>- 2 Nights 3 Days - </p>
          <p>- Min. 5 persons (p.p.rate) - </p>
          <p>- Howrah to Howrah - </p>
          <p>- Contact : 123456789 - </p>
          <Link to="/Contact" className="btn" id="button">
            Contact
          </Link>
        </div>

        <div className="card">
          <h3>Darjeeling</h3>
          <span className="bar"></span>
          <p>- via Chota Mangwa - </p>
          <p className="btc">Rs.5500</p>
          <p>- 3 Nights 4 Days - </p>
          <p>- Min. 7 persons (p.p.rate) - </p>
          <p>- Sealdah to Sealdah - </p>
          <p>- Contact : 123456789 - </p>
          <Link to="/Contact" className="btn" id="button">
            Contact
          </Link>
        </div>

        <div className="card">
          <h3>Puri</h3>
          <span className="bar"></span>
          <p>- with SideSeen - </p>
          <p className="btc">Rs.4000</p>
          <p>- 3 Nights 4 Days - </p>
          <p>- Min. 4 persons (p.p.rate) - </p>
          <p>- Howrah to Howrah - </p>
          <p>- Contact : 123456789 - </p>
          <Link to="/Contact" className="btn" id="button">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PricingCard;
