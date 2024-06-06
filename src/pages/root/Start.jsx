import React, { useEffect, useState } from 'react';
import { LoadScreen } from '../../components/LoadScreen';
import { AnimatePresence, motion } from 'framer-motion';
import { Landing } from '../../components/Landing';
import { Progress } from '../../components/Progress';
import { StartButton } from '../../components/StartButton';

export const Start = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [move, setMove] = useState(false);
  const DURATION = 5;
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, DURATION * 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      <Landing move={move} />
      {!isVisible ? (
        <Progress duration={DURATION} />
      ) : (
        <StartButton setMove={setMove} />
      )}
    </div>
  );
};
