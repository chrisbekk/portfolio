import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const Card = () => {
  const [isActive, setIsActive] = useState(false);
  const variants = {
    initial: {
      height: 'fit-content',
      width: '100vw',
      position: 'relative',
      zIndex: 'auto',
      transition: { type: 'ease', delay: 0.5 },
    },
    animate: {
      height: '100vh',
      position: 'absolute',
      top: 0,
      zIndex: '100',
      transition: { type: 'ease', delay: 0.15 },
    },
  };

  const cardVariants = {
    initial: {
      height: '100px',
      width: '100px',
      y: '0',
      x: '0',
      transition: { type: 'ease' },
    },
    animate: {
      height: '200px',
      width: '200px',
      y: '10vh',
      x: '20vw',
      transition: { type: 'ease', delay: 0.5 },
    },
  };

  return (
    <motion.div
      variants={variants}
      onClick={() => setIsActive(!isActive)}
      initial="initial"
      animate={isActive ? 'animate' : 'initial'}
      exit="exit"
      className={`${isActive ? 'z-[100]' : 'z-auto'} bg-zinc-900 border-zin-300 border`}
    >
      <div className="flex">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate={isActive ? 'animate' : 'initial'}
          className="size-20 bg-green-300"
        ></motion.div>
        <motion.p
          variants={cardVariants}
          initial="initial"
          animate={
            isActive
              ? {
                  x: '22vw',
                  y: '12vh',
                  transition: { type: 'ease', delay: 0.5, duration: 0.12 },
                }
              : 'initial'
          }
        >
          Project Card
        </motion.p>
      </div>
    </motion.div>
  );
};
