import styled from "styled-components";


// Styled component
//Installation d'une extension pour pouvoir styliser le CSS en dessous comme du CSS normal
//Sinon tout est en string jaune.
//Avantage du styled components on peux écrire du javascript dedans pour les animation. 

export const About = styled.div`
min-height : 90vh; 
display: flex;
align-items: center;
justify-content : space-between;
padding: 5rem 10rem;
color : white;
`;
export const Description = styled.div`
flex: 1;
padding-right: 5rem;
h2 {
  font-weight: lighter;
}
`;

export const Image = styled.div`
// On ajoute le overflow hidden parce qu'on va animer l'image qui va zoomer et on veux pas qu'elle dépasse du Div
overflow : hidden;
flex : 1;
img {
  width: 100%;
  height: 80vh;
  object-fit: cover;
}
`; 

export const Hide = styled.div`
overflow: hidden; 
`;
