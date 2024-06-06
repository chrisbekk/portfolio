import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
export const NavMenu = ({ toggleMenu, setToggleMenu }) => {
  const handleClose = e => {
    console.log(e.currentTarget);
    setToggleMenu(false);
  };
  useEffect(() => {
    if (toggleMenu) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [toggleMenu]);
  const backdropVariants = {
    initial: {
      opacity: 0,
      height: 0,
      y: 0,
    },
    show: {
      opacity: 1,
      minHeight: '100vh',
      y: 0,
      zIndex: 100,
    },
    exit: {
      opacity: 0,
      height: 0,
      originY: 1,
      y: 0,
    },
  };
  const menuVariants = {
    initial: {
      height: 0,
    },
    show: {
      height: '400px',
      zIndex: '1000',
      transition: { delay: 0.5 },
    },
    exit: {
      opacity: 0,
      height: 0,
      originY: 1,
      y: 0,
    },
  };
  return (
    <AnimatePresence>
      {toggleMenu && (
        <motion.div
          onClick={handleClose}
          variants={backdropVariants}
          initial="initial"
          animate="show"
          exit="exit"
          className="w-full bg-black bg-opacity-65 absolute top-0"
        >
          <motion.div
            onClick={e => e.stopPropagation()}
            variants={menuVariants}
            initial="initial"
            animate="show"
            exit="exit"
            className="bg-neutral-950 w-full"
          >
            <button onClick={() => setToggleMenu(false)}>CLOSE</button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
