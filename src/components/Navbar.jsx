import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';
import { NavMenu } from './NavMenu';

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  const [toggleMenu, setToggleMenu] = useState(false);

  function update(latest, prev) {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }
  const variants = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -25 },
  };
  useMotionValueEvent(scrollY, 'change', latest => {
    update(latest, scrollY.prev);
  });
  return (
    <motion.div
      variants={variants}
      animate={hidden ? 'hidden' : 'visible'}
      transition={{ ease: [0.1, 0.25, 0.3, 1], duration: 0.6 }}
      className="h-24 fixed z-50 w-full"
    >
      <div
        className={`${!toggleMenu ? 'container w-full ' : 'w-screen'} relative mx-auto h-full  flex items-center justify-between`}
      >
        <h1>{toggleMenu ? '' : 'Navbar'}</h1>
        <nav>
          <button onClick={() => setToggleMenu(prev => !prev)}>
            {toggleMenu ? '' : 'Menu'}
          </button>
        </nav>
        <NavMenu toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      </div>
    </motion.div>
  );
};
