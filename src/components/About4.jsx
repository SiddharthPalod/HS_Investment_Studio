import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { about4 } from "../constants";
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

const About4 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> Types of investors </p>
        <h2 className={`${styles.sectionHeadText}`}>Banker</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        A bank is a financial institution that accepts deposits from the public and creates a demand deposit 
        while simultaneously making loans.Lending activities can be directly performed by the bank 
        or indirectly through capital markets.Because banks play an important role in financial stability 
        and the economy of a country, most jurisdictions exercise a high degree of regulation over banks.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {about4.map((about4, index) => (
          <AboutCard key={`about4-${index}`} index={index} {...about4} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Hope we helped</p>
        <h2 className={`${styles.sectionHeadText}`}><Link to={'/'}>Go Back</Link></h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About4, "a4");
