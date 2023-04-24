import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "./style.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <section className="main-home flex container">
        <article className="hero-text">
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <p>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </article>
        <article className="hero-button">
          <button className="main-btn">Explore</button>
        </article>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
