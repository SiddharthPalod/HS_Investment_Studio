import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { about1 } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";

const AboutCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
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
          <img
            src={image}
            alt='icon-not-found'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

      </Tilt>
    </motion.div>
  );
};

const About1 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> Types of investors </p>
        <h2 className={`${styles.sectionHeadText}`}>Angel Investor</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        An angel investor (also known as a business angel, informal investor, angel funder, private investor, or seed investor) is an individual 
        who provides capital for a business or businesses, including startups, usually in exchange for convertible debt
        or ownership equity. Angel investors usually give support to start-ups at the earliest stage (when risks of the start-ups failing are relatively high), 
        once or in a consecutive manner, and when most investors are not prepared to back them.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {about1.map((about1, index) => (
          <AboutCard key={`about1-${index}`} index={index} {...about1} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Hope we helped</p>
        <h2 className={`${styles.sectionHeadText}`}><Link to={'/'}>Go Back</Link></h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About1, "a1");
