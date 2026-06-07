import React from "react";
import BorderedTitle from "../BorderedTitle/BorderedTitle";

const HomeAbout = () => {
  return (
    <section className="about">
      <BorderedTitle>What we do</BorderedTitle>
      <div className="about__info">
        <p>
          We create brands, products and websites <br /> built for launch, growth and long-term scale
        </p>
        <ul>
          <li>Brand Identity</li>
          <li>Product Design</li>
          <li>Web Design</li>
          <li>Development</li>
          <li>Motion</li>
          <li>AI Design</li>
        </ul>
      </div>
    </section>
  );
};

export default HomeAbout;
