import React, { useEffect, useState } from 'react';
import { LoadScreen } from '../../components/LoadScreen';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Landing } from '../../components/Landing';
import { Hero } from '../../components/Hero';

export const Start = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 1500);
  }, []);

  const variants = {
    initial: { opacity: 0 },
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <>
      <AnimatePresence>
        {isVisible ? (
          <motion.div
            variants={variants}
            initial="initial"
            animate="visible"
            exit="hidden"
          >
            <Landing />
          </motion.div>
        ) : (
          <LoadScreen />
        )}
      </AnimatePresence>
    </>
  );
};
