import React from "react";
import home1 from "../img/home1.png";
//Styled
import { About, Description, Image, Hide } from "../styles";

//Framer Motion
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

const AboutSection = () => {
  /*
  //Variables d'animation
  const titleAnim = {
    //On a ici l'état qu'on a nommé hidden et l'état show
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { duration: 2 } },
  };

  /* Avantage des variants, si on a un élément parent qui détient un variant, on peux utiliser
 staggerChildren qui va appliquer le même style aux enfants, le 0.5 donne un délais entre chaque anim
 on a aussi la propriété when: qui prend en valeur afterchildren ou beforechildren pour appliquer le style avant 
 ou après que l'anim de l'enfant soit arrivée
  */
  /*
  const container = {
    hidden: { x: 100 },
    show: { x: 0, transition: { duration: 1, staggerChildren: 0.5 } },
  };*/

  return (
    <About>
      <Description>
        <motion.div>
          {/* Ici on sépare le titre en plusieurs div parce qu'on veux les animer indépendament les uns des autres */}
          <Hide>
            {/* Pour utiliser Framer Motion on doit remplacer nos tags et plutot que de tout écrire dans le code directement
            on va plutot les stored dans une variable aussi appelée variants
            On fait donc appel au variable (nom variable animation) et puis on donne notre état initial et notre anim*/}
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Contact us for any Photography or Videography ideas that you have. We
          have professionals with amazing skills.
        </motion.p>
        <motion.button variants={fade}>Contact Us</motion.button>
      </Description>
      <Image>
        <motion.img variants={photoAnim} src={home1} alt="guy with a camera" />
      </Image>
      <Wave />
    </About>
  );
};

export default AboutSection;
