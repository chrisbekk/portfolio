import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Project } from './Project';

export const Card = ({ data }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className=" bg-zinc-900 hover:cursor-pointer"
    >
      <div className="md:flex md:gap-3 ">
        <div className="">
          <img
            src={data?.media.url}
            alt={data?.media.alt}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-4 md:p-1">
          <h1 className="text-xl sm:text-3xl my-3 md:my-0 md:mb-3 font-semibold">
            {data.title}
          </h1>
          <p className="line-clamp-3 md:line-clamp-4 text-sm md:text-base md:mt-10">
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
