import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import "../index.css"
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] '
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary hover:bg-quadry transition 0.5s-all rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-25 h-25 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Table des Matières</p>
        <h2 className={styles.sectionHeadText}>
  Introduction
</h2>      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        À l’ère numérique d’aujourd’hui, les adolescents ont accès à un large éventail de contenus, y compris la pornographie, et ses effets sur les individus font l’objet d’un débat considérable. Ce site Web vise à fournir des informations précises sur les effets de la pornographie sur les adolescents, en explorant les conséquences positives et négatives. Les conclusions et les publications seront reprises sur les réseaux sociaux ci-dessous, dont nous discuterons plus en détail. De cette façon, nous pouvons mieux comprendre les questions complexes entourant le rôle de la pornographie dans la vie des adolescents et sa prévalence dans la société contemporaine.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
