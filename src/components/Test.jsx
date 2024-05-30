import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
export const Test = ({ title, description, image, link }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const variants = {
    initial: {
      opacity: 0,
      width: 0,
      height: 0,
      inset: 0,
      backgroundColor: 'salmon',
      position: 'absolute',
      zIndex: '1000',
    },
    animate: { opacity: 1, width: '100vw', height: '100vh' },
    exit: { opacity: 0, width: 0, height: 0 },
  };
  return createPortal(
    <motion.div
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {title}
    </motion.div>,
    document.getElementById('card'),
  );
};
