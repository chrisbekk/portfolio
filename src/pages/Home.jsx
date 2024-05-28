import React from 'react';
import { Card } from '../components/Card';
export const Home = () => {
  return (
    <div className="bg-black">
      <div className="flex flex-col gap-5">
        <Card />
        <Card />
      </div>
    </div>
  );
};
