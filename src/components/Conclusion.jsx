import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";



const Conclusion = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Conclusion</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
À travers les divers articles analysés sur le sujet, il apparaît clairement que la consultation de pornographie chez les adolescents n'est pas une pratique bénéfique. En effet, ces contenus numériques présentent souvent une représentation très éloignée de la réalité des relations amoureuses et de la sexualité. Les scènes montrées donnent de fausses idées sur ce à quoi doivent ressembler les corps ou les attitudes.
<br/>
<br/>
Cette exposition précoce pourrait aussi influencer négativement certains adolescents, en les encouragent à adopter des comportements inappropriés envers autrui. Par ailleurs, elle participe à banaliser la perte d'innocence propre à la période juvénile. Bien que les jeunes soient poussés par la curiosité, un accompagnement parental fait défaut sur ces sujets tabous.
<br/>
<br/>
Il semble donc qu'une meilleure éducation sexuelle dès le collège permettrait de leur donner une vision plus juste et équilibrée de la sexualité. Plutôt que de laisser libre cours à une consultation en ligne hasardeuse, il vaudrait mieux guider les adolescents vers une découverte apaisée de ces questions, une fois leur maturité affective davantage établie.      </motion.p>
    </>
  );
};

export default SectionWrapper(Conclusion, "about");
