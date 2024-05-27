import React from 'react';
import { Link } from 'react-router-dom';
export const Start = () => {
  return (
    <div>
      HERO IMAGE IS HERE <Link to={'/'}>ROOT</Link>
      <Link to={'/pages/home'}>Home</Link>
    </div>
  );
};
