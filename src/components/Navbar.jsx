import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  function update(latest, prev) {
    console.log('LATEST:', latest);
    console.log('PREV:', prev);
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
      <div className="container mx-auto h-full w-full flex items-center justify-between">
        <h1>Navbar</h1>
        <nav>
          <Link to={'/'}>Home</Link>
        </nav>
      </div>
    </motion.div>
  );
};
