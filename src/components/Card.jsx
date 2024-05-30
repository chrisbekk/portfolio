import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Test } from './Test';

export const Card = ({ title, description, image, links }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      onClick={() => setIsActive(!isActive)}
      className={`${isActive ? 'z-[100]' : 'z-auto'} bg-zinc-900 border-zin-300 border`}
    >
      <div className="flex">
        <div className="size-20 bg-green-300"></div>
        <h1>{title}</h1>
      </div>
      <AnimatePresence>{isActive && <Test title={title} />}</AnimatePresence>
    </div>
  );
};
