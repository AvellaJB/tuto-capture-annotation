import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { MovieState } from "../movieState";

/*Comment faire le content dynamique?

1. On crée 3 components pour chaque movie. 
Avantage = On peux custom chacun d'entre eux. 
On ajoute sur un link dans notre OurWork

2. On créée un MovieData et on a spéraré les Data 
On compare la path de la page dans laquelle on est avec useHistory (qui retourne un array d'objet
qui contient l'URL). Et on compare l'URL à l'URL qu'on a donné dans nos data, si la comparaison est OK
alors on render la data qui correspond. 

3. facon idéale : On utilise une API
On a juste à fetch les données depuis l'API et on n'as pas de data dans notre projets, 
tout est stored dans l'API
On verra ça au prochain projet
*/

const MovieDetail = () => {
  /*On utilise useHistory pour avoi l'URL sur lequel on est actuellement
On invoque la fonction useHistory*/
  const history = useHistory();
  //On récupère l'URL
  const url = history.location.pathname;
  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //UseEffect
  useEffect(() => {
    const currentMovie = movies.filter((stateMovie) => stateMovie.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  return (
    <>
      {movie && (
        <Details>
          <Headline>
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="" />
          </Headline>
          <Awards>
            {movie.awards.map((award) => (
              <Award
                title={award.title}
                description={award.description}
                key={award.title}
              />
            ))}
          </Awards>
          <ImageDisplay>
            <img src={movie.secondaryImg} alt="second image" />
          </ImageDisplay>
        </Details>
      )}
    </>
  );
};

const Details = styled.div`
  color: white;
`;

const Headline = styled.div`
  min-height: 90vh;
  padding-top: 20vh;
  position: relative;
  h2 {
    position: absolute;
    top: 10%;
    left: 50%;
    transform: translate(-50%, -10%);
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

const Awards = styled.div`
  min-height: 80vh;
  display: flex;
  margin: 5rem 10rem;
  align-items: center;
  justify-content: space-around;
`;

const AwardStyle = styled.div`
  padding: 5rem;
  h3 {
    font-size: 2rem;
  }
  .line {
    width: 100%;
    background: #23d997;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  p {
    padding: 2rem 0rem;
  }
`;

const ImageDisplay = styled.div`
  min-height: 50vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

//award component
const Award = ({ title, description }) => {
  return (
    <AwardStyle>
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </AwardStyle>
  );
};

export default MovieDetail;
