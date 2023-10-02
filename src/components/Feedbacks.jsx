import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({
  index,
  name,
  description,
  description2,
  image,
  link,
  link2,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
        
         <a href={link}>
           <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
         </a>

        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
          <p className='mt-2 text-secondary text-[14px]'><a href={link2} className="hover:text-purple-500">{description2}</a></p>
        </div>

      </Tilt>
    </motion.div>
  );
};

const Feedback = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Preuve No. 2</p>
        <h2 className={`${styles.sectionHeadText}`}>Réseaux Sociaux</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Publications populaires sur les réseaux sociaux, principalement en français, discutant des raisons pour lesquelles la pornographie nous affecte, de comment elle nous affecte et plus encore !
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Feedback, "");