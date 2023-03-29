import React from "react";
import "./AboutBlockOne.css";
import aboutimg1 from "../../../Assates/img/AboutPageBlock1.jpg"
const AboutBlockOne = () => {
  return (
    <section className="AboutBlock1">
      <div className="main">
        <img src={aboutimg1} alt="" />
        <div className="About_text">
          <h1> About Backup</h1>
          <h5>fundraising <span> & charity</span></h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu
            magna eros. Vestibulum placerat ligula vitae purus pulvinar, non
            eleifend tellus feugiat. Pellentesque eu bibendum lectus, a finibus
            erat. Praesent dictum mauris at lectus eleifend, eu lacinia arcu
            faucibus. In hac habitasse platea dictumst. Duis lacinia tortor
            ipsum, vel interdum ipsum tristique in. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Quisque at lacus arcu. Phasellus ac
            urna enim.
          </p>
          <button type="button"> let's Talk</button>
        </div>
      </div>
    </section>
  );
};

export default AboutBlockOne;
