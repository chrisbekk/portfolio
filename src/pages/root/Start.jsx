import React, { useEffect, useState } from 'react';
import { LoadScreen } from '../../components/LoadScreen';
import { AnimatePresence, motion } from 'framer-motion';
import { Landing } from '../../components/Landing';

export const Start = () => {
  const [isVisible, setIsVisible] = useState(false);
  const DURATION = 5;
  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, DURATION * 1000);
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
          <LoadScreen duration={DURATION} />
        )}
      </AnimatePresence>
    </>
  );
};
