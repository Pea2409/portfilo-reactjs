import React from "react";
import "./contact.css";
import Walmart from "../../assets/walmart.png";
import Facebook from "../../assets/facebook.png";
import Microsoft from "../../assets/microsoft.png";
import Adobe from "../../assets/adobe.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import InstagramIcon from "../../assets/instagram.png";
import LinkedInIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";

const Contact = () => {
  return (
    <section id="contactPage">
      <div id="client">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          I have had the opportunity to work with a diverse group of companies.
          Some of notable companies I have worked with includes
        </p>
        <div className="clientImgList">
          <img src={Walmart} alt="Walmart" className="clientImg" />
          <img src={Adobe} alt="Adobe" className="clientImg" />
          <img src={Microsoft} alt="Microsoft" className="clientImg" />
          <img src={Facebook} alt="Facebook" className="clientImg" />
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to dicuss any work opportunites
        </span>
        <form action="" className="contactForm">
          <input
            type="text"
            className="contactName"
            placeholder="Enter your name"
          />
          <input
            type="text"
            className="contactEmail"
            placeholder="Enter your email"
          />
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            className="contactMessage"
            placeholder="Enter your message"
          ></textarea>
          <button className="submitBtn" type="submit" value="Send">
            Submit
          </button>
          <div className="contactLink">
            <a href="https://www.facebook.com/phuthinh29">
              <img src={FacebookIcon} alt="FacebookIcon" className="linkItem" />
            </a>
            <a href="https://www.instagram.com/furteen_2/">
              <img
                src={InstagramIcon}
                alt="InstagramIcon"
                className="linkItem"
              />
            </a>
            <a href="https://twitter.com/Furteen2409">
              <img src={TwitterIcon} alt="TwitterIcon" className="linkItem" />
            </a>
            <a href="https://www.linkedin.com/in/ph%C3%BA-th%E1%BB%8Bnh-0947b3268/">
              <img src={LinkedInIcon} alt="FacebookIcon" className="linkItem" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
