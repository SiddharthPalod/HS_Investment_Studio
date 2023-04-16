import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { Routes, Route, BrowserRouter, Link, useParams } from "react-router-dom";
import About1 from "./About1";
import About2 from "./About2";
import About3 from "./About3";
import About4 from "./About4";

const AboutCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <Link to={"/" + title}>
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            // onClick={() => open(source_code_link, "_blank")}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img
              src={icon}
              alt="icon-not-found"
              className="w-16 h-16 object-contain"
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </Link>
      </motion.div>
    </Tilt>
  );
};


const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Lets know each other</p>
        <h2 className={styles.sectionHeadText}>ABOUT US.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Welcome to the Hemang-Siddharth's Investment Studios, Your one stop
        destination for learning investment techniques. We have worked in
        Goldman Sach's and Morgan Stanley before and with our expertise we can
        guide amateurs across the stock market. Get through the website and
        welcome a world of ventures.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <AboutCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const AboutWithTitle = () => {
  const { title } = useParams();
  switch (title) {
    case "Angel_Investor":
      return <About1 />;
    case "Peer-to-Peer_Lender":
      return <About2 />;
    case "Venture_Capitalist":
      return <About3 />;
    case "Banker":
      return <About4 />;
    default:
      return null;
  }
};

const AppRouter = () => {
  return (
    // <About1 />
    // <BrowserRouter>
      <Routes>
        <Route path="/:title" element={<AboutWithTitle />} />
        <Route exact path="/" element={<About />} />
      </Routes>
    // </BrowserRouter>
  );
};

// export default About;

export default SectionWrapper(About, "about");
