import "./FooterStyles.css";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneVolume,
  FaWhatsapp,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div
            className="location"
            style={{
              color: "white",
              fontSize: "1.2rem",
            }}
          >
            <FaHome
              size={25}
              style={{ color: "white", marginRight: "3.5rem" }}
            />
            Bally Howrah,West Bengal,India
          </div>
          <div
            className="phone"
            style={{
              color: "white",
              marginRight: "2rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <FaPhoneVolume
              size={20}
              style={{ color: "white", marginRight: "0.5rem" }}
            />
            {"/  "}
            <FaWhatsapp
              size={20}
              style={{ color: "white", marginRight: "0.7rem" }}
            />
            8910020117
          </div>
          <div
            className="email"
            style={{
              color: "white",
              marginRight: "2rem",
              marginTop: "0.1rem",
              fontWeight: "bold",
              fontSize: "1.2rem",
            }}
          >
            <HiOutlineMail
              size={20}
              style={{
                color: "white",
                marginRight: "3.5rem",
                marginTop: "0.8rem",
              }}
            />
            souvik.bhattacharya7@gmail.com
          </div>
        </div>
        <div className="right">
          <h3
            style={{
              color: "white",
              fontWeight: "bold",
              fontSize: "2rem",
              paddingBottom: "0.7rem",
            }}
          >
            About this Website
          </h3>
          <p>Hi, this is Souvik,Founder of this Travel Website. </p>
          <p>
            I am a traveller and I will update all the infos of different places
            which I have visited. Cheers !!!
          </p>
          <div className="social">
            <FaFacebook
              size={25}
              style={{ color: "white", marginRight: "1.2rem" }}
            />
            <FaInstagram
              size={25}
              style={{ color: "white", marginRight: "1.2rem" }}
            />
            <FaLinkedinIn
              size={25}
              style={{ color: "white", marginRight: "1.2rem" }}
            />
            <FaGithub
              size={25}
              style={{ color: "white", marginRight: "1rem", marginTop: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
