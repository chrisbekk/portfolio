import React from 'react';
import { Link } from 'react-router-dom';
export const Root = () => {
  return (
    <div>
      <h1>LOADING HAPPENS HERE</h1>
      <Link to={'/site'}>HERO</Link>
    </div>
  );
};
