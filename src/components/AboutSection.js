import React from "react";
import home1 from "../img/home1.png";
//Styled
import styled from "styled-components";

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

// Styled component
//Installation d'une extension pour pouvoir styliser le CSS en dessous comme du CSS normal
//Sinon tout est en string jaune.
//Avantage du styled components on peux écrire du javascript dedans pour les animation. 

const About = styled.div`
min-height : 90vh; 
display: flex;
align-items: center;
justify-content : space-between;
padding: 5rem 10rem;
color : white;
`;
const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2 {
  font-weight: lighter;
}
`;

const Image = styled.div`
// On ajoute le overflow hidden parce qu'on va animer l'image qui va zoomer et on veux pas qu'elle dépasse du Div
overflow : hidden;
flex : 1;
img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
`; 

const Hide = styled.div`
overflow: hidden; 
`;

export default AboutSection;
