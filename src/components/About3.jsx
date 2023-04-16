import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { about3 } from "../constants";
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

const About3 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> Types of investors </p>
        <h2 className={`${styles.sectionHeadText}`}>Venture Capitalist</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        Venture capital is a form of private equity financing that is provided by venture capital firms or funds to startups, 
        early-stage, and emerging companies that have been deemed to have high growth potential or which have demonstrated high growth 
        (in terms of number of employees, annual revenue, scale of operations, etc). 
        Venture capital firms or funds invest in these early-stage companies in exchange for equity, or an ownership stake. 
        Venture capitalists take on the risk of financing risky start-ups in the hopes that some of the companies 
        they support will become successful.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {about3.map((about3, index) => (
          <AboutCard key={`about3-${index}`} index={index} {...about3} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Hope we helped</p>
        <h2 className={`${styles.sectionHeadText}`}><Link to={'/'}>Go Back</Link></h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About3, "a3");
