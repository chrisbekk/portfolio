import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from './Project';

export const Card = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className="  hover:cursor-pointer"
    >
      <div className="md:grid md:grid-cols-[0.3fr_0.7fr] md:gap-3 ">
        <div className="">
          <img
            src={data?.media.url}
            alt={data?.media.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-1">
          <h1 className="text-xl sm:text-3xl my-3 md:my-0 md:mb-3">
            {data.title}
          </h1>
          <p className="line-clamp-3 md:line-clamp-4 text-base md:text-lg md:mt-10">
            {data.description}
          </p>
        </div>
      </div>
      <AnimatePresence>
        {isActive && <Project isActive={isActive} data={data} />}
      </AnimatePresence>
    </div>
  );
};
