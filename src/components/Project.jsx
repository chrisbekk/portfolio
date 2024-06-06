import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, animate, motion } from 'framer-motion';
import { ProjectLink } from './ProjectLink';
import { FaGithub } from 'react-icons/fa';
import { BiLogoNetlify } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Tags } from './Tags';
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
      className="text-white font-primary"
    >
      <motion.div className="px-2 lg:rounded-t-2xl max-w-[1024px] lg:mx-auto border border-green-300">
        <div className="">
          <div className="">
            <img
              src={data?.media.url}
              alt={data?.media.alt}
              className="w-full h-full lg:rounded-t-2xl"
            />
          </div>
          <div className="mt-3">
            <h1 className="text-4xl lg:text-5xl text-custom_orange">
              {data?.title}
            </h1>
            <div className="my-3">
              <Tags tags={data?.tags} />
            </div>
            <p className="text-lg">{data?.description}</p>
          </div>
        </div>
        <div className="w-full h-[50px] bg-[url('/statusbar.png')] flex justify-around bg-center bg-origin-content bg-no-repeat bg-cover mt-16">
          <ProjectLink path={data?.links.repo}>
            <FaGithub className="size-10 text-custom_brown" />
            <p className="font-mono">Github</p>
          </ProjectLink>
          <ProjectLink path={data?.links.site}>
            <BiLogoNetlify className="size-10 text-custom_brown" />
            <p className="font-mono">Deployed Link</p>
          </ProjectLink>
        </div>
      </motion.div>
    </motion.div>,
    document.getElementById('card'),
  );
};
