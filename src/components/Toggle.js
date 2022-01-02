import react, { useState } from "react";
import { motion } from "framer-motion";
// ici en passant en paramètre children on récupère les infos qu'il y'a dans le wrap Toggle dans la FAQ.
//une fois qu'on a accès au children on peux mettre en place notre logique directment sur ce components et le
//réutiliser dans notre code.

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.div layout className="question" onClick={() => setToggle(!toggle)}>
      <motion.h4 layout>{title}</motion.h4>
      {toggle ? children : ""}
      <motion.div className="faq-line"></motion.div>
    </motion.div>
  );
};

export default Toggle;
