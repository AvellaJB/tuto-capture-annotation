import React from "react";
import home1 from "../img/home1.png";
//Styled
import {About, Description, Image, Hide} from '../styles'

const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          {/* Ici on sépare le titre en plusieurs div parce qu'on veux les animer indépendament les uns des autres */}
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true</h2>
          </Hide>
        </div>
        <p>
          Contact us for any Photography or Videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
        </Image>
      </About>
  );
};

export default AboutSection;
