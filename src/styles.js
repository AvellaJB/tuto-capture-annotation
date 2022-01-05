import styled from "styled-components";
import { motion } from "framer-motion";
// Styled component
//Installation d'une extension pour pouvoir styliser le CSS en dessous comme du CSS normal
//Sinon tout est en string jaune.
//Avantage du styled components on peux écrire du javascript dedans pour les animation.

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  @media (max-width: 1300px) {
    display: block;
    padding: 2rem 2rem;
    text-align: center;
  }
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;
  h2 {
    font-weight: lighter;
  }
  @media (max-width: 1300px) {
    padding: 0;
    button {
      margin: 2rem 0rem 5rem 0rem;
    }
  }
`;

export const Image = styled.div`
  // On ajoute le overflow hidden parce qu'on va animer l'image qui va zoomer et on veux pas qu'elle dépasse du Div
  overflow: hidden;
  flex: 1;
  z-index: 2;
  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
