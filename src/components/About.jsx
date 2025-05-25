import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, fadeIn } from '../utils/motion';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>
      About Me
    </motion.h1>
    <div className={style.para}>
      <motion.p variants={fadeIn('', '', 0.5, 1)} className={style.text}>
        Hey there! I&apos;m
        {' '}
        <a
          href="https://www.linkedin.com/in/deepakporwaldp/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
         Deepak Porwal,
        </a>
        {' '}
        a passionate software engineer specializing in React . I thrive on delivering state-of-the-art software solutions. When I&apos;m not coding, you&apos;ll find me exploring the fascinating worlds of Problem Solving, DSA, and Music.
      </motion.p>
      <motion.p variants={fadeIn('', '', 1, 1)} className={style.text}>
        My journey into software development was anything but ordinary. I am a  third-year student at Lakshmi Narain College of technology & Science, Bhopal    
        {' '}
        I Solved  700+ DSA Questions  on coding platforms like
        <a
          href="https://leetcode.com/u/Deepakporwal/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          Leetcode 
        </a>
   
        {' '}
        and 
        <a
          href="https://www.geeksforgeeks.org/user/deepakporkxur/"
          target="_blank"
          className={style.link}
          rel="noreferrer"
        >
          {' '}
          geeksforgeeks
        </a>
        {' '}
      
          
      </motion.p>
      <motion.p variants={fadeIn('', '', 1.25, 1)} className={style.text}>
        Ready to bring your project to life? Reach out—I&apos;m excited to collaborate!
        {' '}
        <a
          href="/DeepakPorwalsResume.pdf"
          target=" "
          className={style.link}
          rel="noreferrer"
        >
          Check out my resume
        </a>
        {' '}
        for more insights into my journey and qualifications.
      </motion.p>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
