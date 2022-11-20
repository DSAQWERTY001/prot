import React, { memo } from "react";
import "../styles/about.scss";
import img from "../images/mike.jpg";


import {
  IoPersonSharp,
  IoMailSharp,
  IoPhonePortraitOutline
} from "react-icons/io5";

const About = memo(({ refs }) => {
  return (
    <section ref={refs} className="about-section">
      <div className="section-title">ABOUT ME</div>

      <div className="about-content">
        <img
          className="about-picture"
          src={img}
        ></img>
        <div className="about-info">
          <b className="info-title">"Hello, I'm Mike"</b>
          <div className="info">
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis, tenetur exercitationem unde,
            voluptas dolores explicabo voluptate fugiat est cupiditate illo facere maxime perspiciatis commodi a quidem obcaecati saepe placeat.
          </div>
          <ul>
            <li>
              <div className="info-li">
                <IoPersonSharp className="icon" />  : TEERAPONG BOONTOOL
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoMailSharp className="icon" />  : trpng.bt@gamil.com
              </div>
            </li>
            <li>
              <div className="info-li">
                <IoPhonePortraitOutline className="icon" />  : 0910209264
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
});

export default About;
