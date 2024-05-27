import React from 'react';
import { Link } from 'react-router-dom';
export const Root = () => {
  const size = 'size-3';
  const borderRadius = 'rounded-sm';
  const color = 'bg-zinc-400';
  return (
    <div className="bg-zinc-900 text-zinc-400 h-screen flex items-end pb-40 justify-center">
      <div className="flex gap-1">
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
        <div className={`${size} ${borderRadius} ${color}`}></div>
      </div>
      {/* <Link to={'/site'}>HERO</Link> */}
    </div>
  );
};
