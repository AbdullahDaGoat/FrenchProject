import { motion } from "framer-motion";
import React from "react";
import {useTypewriter, Cursor} from "react-simple-typewriter"
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { useEffect } from 'react';

const Hero = () => {
  const [text] = useTypewriter({
    words: ["P o r n o g r a p h i e"],
    typeSpeed: 200,
    loop: 0 | true,
  })

  useEffect(() => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    link.rel = 'preconnect';
    link.href = 'https://fonts.gstatic.com';
    link.rel = 'stylesheet';
    link.href = 'https://fonts.googleapis.com/css2?family=Courier+Prime+Code&display=swap';
    document.head.appendChild(link);
  }, []);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[yellow]'>Les Adolescents</span>
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[red]'>ET La</span>
          </h1>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[orange]' style={{ fontFamily: 'Courier Prime', fontWeight: 'bold' }}>
              {text}
            </span>
            <span>
              <Cursor/>
            </span>
          </h1>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
