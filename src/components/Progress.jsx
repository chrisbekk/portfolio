import React from 'react';
import { motion } from 'framer-motion';

export const Progress = ({ duration }) => {
  const KEYFRAMES = [0, 0.25, 0.55, 0.55, 0.75, 1];
  const variants = {
    initial: { scaleX: 0 },
    visible: {
      scaleX: KEYFRAMES,
      originX: 0,
      transition: { duration: duration },
    },
    hidden: { opacity: 0 },
  };
  return (
    <div className="border border-zinc-400 h-6 w-80">
      <motion.div
        variants={variants}
        initial="initial"
        animate="visible"
        className="h-full bg-zinc-300"
      ></motion.div>
    </div>
  );
};
