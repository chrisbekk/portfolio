import React from 'react';
import { Card } from '../Card';
export const Projects = () => {
  return (
    <div className="flex flex-col gap-3 mx-auto">
      <Card title={'The Auction House'} />
      <Card title={'Digital Market'} />
      <Card title={'Holidaze'} />
    </div>
  );
};
