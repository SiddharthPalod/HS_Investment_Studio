import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { about2 } from "../constants";
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

const About2 = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}> Types of investors </p>
        <h2 className={`${styles.sectionHeadText}`}>Peer to Peer Lender</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
        Peer-to-peer lending, also abbreviated as P2P lending, is the practice of lending money to individuals 
        or businesses through online services that match lenders with borrowers. 
        Peer-to-peer lending companies often offer their services online, and attempt to operate with lower overhead 
        and provide their services more cheaply than traditional financial institutions.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {about2.map((about2, index) => (
          <AboutCard key={`about2-${index}`} index={index} {...about2} />
        ))}
      </div>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>Hope we helped</p>
        <h2 className={`${styles.sectionHeadText}`}><Link to={'/'}>Go Back</Link></h2>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About2, "a2");
