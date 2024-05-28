import React from 'react';

export const Loading = () => {
  const size = 'size-3';
  const borderRadius = 'rounded-sm';
  const color = 'bg-zinc-400';
  return (
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
  );
};
