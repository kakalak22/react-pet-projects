import React from "react";
import { useGlobalContext } from "./context";
import phoneImg from "./images/phone.svg";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  const handleSubmenu = (event) => {
    closeSubmenu();
  }
  return (
    <section className="hero" onMouseOver={handleSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris in
            est in sem tempus euismod at at justo. Duis sit amet lorem quis
            justo consectetur facilisis non eu sem. Maecenas blandit, arcu at
            pretium commodo, arcu augue porttitor ligula, sed faucibus magna
            lectus eu orci. In in nisi mattis, malesuada enim vel, gravida dui.
            Cras hendrerit mollis tellus, quis gravida magna.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
