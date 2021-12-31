import React from "react";
import home1 from "../img/home1.png";
const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          {/* Ici on sépare le titre en plusieurs div parce qu'on veux les animer indépendament les uns des autres */}
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <img src={home1} alt="guy with a camera" />
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact us for any Photography or Videography ideas that you have. We
          have professionals with amazing skills.
        </p>
        <button>Contact Us</button>
      </div>
    </div>
  );
};

export default AboutSection;
