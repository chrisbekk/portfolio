import React from 'react';
import { motion } from 'framer-motion';
export const StartButton = ({ setMove }) => {
  const variants = {
    initial: { width: '320px', height: '24px' },
    animate: {
      width: '120px',
      height: '80px',
    },
  };
  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { delay: 0.2 } },
  };
  return (
    <motion.button
      onClick={() => setMove(true)}
      variants={variants}
      initial="initial"
      animate="animate"
      className="absolute bottom-20 left-[50vw] -translate-x-[50%] rounded-lg text-custom_mg_orange font-mono text-3xl border border-custom_mg_orange"
    >
      <motion.p variants={textVariants} initial="initial" animate="animate">
        ENTER
      </motion.p>
    </motion.button>
  );
};
