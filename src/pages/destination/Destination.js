import React from "react";
import "./style.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import image from "../../assets/destination/image-moon.webp";

const Destination = () => {
  return (
    <div className="destination">
      <Header />
      <section className="main-destination flex container">
        <article className="destination-image">
          <h5>
            <span className="menu-num">01</span> PICK YOUR DESTINATION
          </h5>
          <img src={image} alt="" />
        </article>
        <article className="destination-info"></article>
      </section>
      <Footer />
    </div>
  );
};

export default Destination;
