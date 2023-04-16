import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { banklogo } from "../constants";

const Bank = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {banklogo.map((Banknology) => (
        <div className='w-28 h-28' key={Banknology.name}>
          <BallCanvas icon={Banknology.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Bank, "");
