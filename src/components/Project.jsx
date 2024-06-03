import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, animate, motion } from 'framer-motion';
export const Project = ({ isActive, data }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
  const overLayVariants = {
    initial: {
      opacity: 0,
      width: '100vw',
      height: 0,
      inset: 0,
      backgroundColor: '#171717',
      position: 'absolute',
      zIndex: '1000',
    },
    animate: {
      opacity: 1,
      width: '100vw',
      height: '100vh',
      transition: { delay: 0.125 },
    },
    exit: {
      opacity: 0,
      width: '100vw',
      height: 0,
      transition: { delay: 0.175 },
    },
  };

  return createPortal(
    <motion.div
      variants={overLayVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="text-white font-primary sm:flex sm:items-center lg:justify-center"
    >
      <motion.div className="border border-custom_green max-w-[1024px] lg:mx-auto h-[80vh]">
        <div className="lg:grid lg:grid-cols-[0.4fr_0.6fr]">
          <div className="">
            <img
              src={data?.media.url}
              alt={data?.media.alt}
              className="w-full h-full"
            />
          </div>
          <div>
            <h1>{data?.title}</h1>
            <p>{data?.description}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>,
    document.getElementById('card'),
  );
};
