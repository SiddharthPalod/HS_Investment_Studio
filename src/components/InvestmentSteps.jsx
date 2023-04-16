import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { InvestmentStepss } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const InvestmentStepsCard = ({ InvestmentSteps }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#1d1836",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={InvestmentSteps.date}
      iconStyle={{ background: InvestmentSteps.iconBg }}
      icon={
        <div className='flex justify-center items-center w-full h-full'>
          <img
            src={InvestmentSteps.icon}
            alt={InvestmentSteps.company_name}
            className='w-[60%] h-[60%] object-contain'
          />
        </div>
      }
    >
      <div>
        <h3 className='text-white text-[24px] font-bold'>{InvestmentSteps.title}</h3>
        <p
          className='text-secondary text-[16px] font-semibold'
          style={{ margin: 0 }}
        >
          {InvestmentSteps.company_name}
        </p>
      </div>

      <ul className='mt-5 list-disc ml-5 space-y-2'>
        {InvestmentSteps.points.map((point, index) => (
          <li
            key={`InvestmentSteps-point-${index}`}
            className='text-white-100 text-[14px] pl-1 tracking-wider'
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const InvestmentSteps = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          Lets get you started with a path
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Journey of Investment.
        </h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {InvestmentStepss.map((InvestmentSteps, index) => (
            <InvestmentStepsCard
              key={`InvestmentSteps-${index}`}
              InvestmentSteps={InvestmentSteps}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(InvestmentSteps, "invest");
