import React from 'react';
import { Link } from 'react-router-dom';
import { Loading } from './Loading';
export const LoadScreen = () => {
  const size = 'size-3';
  const borderRadius = 'rounded-sm';
  const color = 'bg-zinc-400';

  return (
    <div className="bg-zinc-900 text-zinc-400 h-screen flex items-end pb-40 justify-center overflow-hidden">
      <Loading />
    </div>
  );
};
