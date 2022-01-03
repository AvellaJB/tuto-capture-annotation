//TEST
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

export const UseScroll = () => {
  const controls = useAnimation();
  //Ici element permet de cibler l'éléments qu'on veux suivre, et cela permet de savoir
  //quand est-ce qu'il apparaît à l'écran, le threshold retient l'anim (tant qu'on vois pas 50% du DIV
  //il ne se passe rien.)
  const [element, view] = useInView({ threshold: 0.5 });
  if (view) {
    controls.start("show");
  } else {
    controls.start("hidden");
  }

  return [element, controls];
};
