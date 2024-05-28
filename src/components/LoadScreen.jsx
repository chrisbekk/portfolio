import React from 'react';
import { Loading } from './Loading';
export const LoadScreen = () => {
  return (
    <div className="bg-zinc-900 text-zinc-400 h-screen flex items-end pb-40 justify-center overflow-hidden">
      <Loading />
    </div>
  );
};
