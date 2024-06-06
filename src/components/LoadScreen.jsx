import React from 'react';
import { Loading } from './Loading';
import { Progress } from './Progress';
export const LoadScreen = ({ duration }) => {
  return (
    <div className="bg-black text-zinc-400 h-screen flex-col flex justify-end pb-40 items-center overflow-hidden">
      <div>loading...</div>
      {/* <Loading /> */}
      <Progress duration={duration} />
    </div>
  );
};
