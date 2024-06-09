import React from 'react';
import { MdReportGmailerrorred } from 'react-icons/md';

export const Error = () => {
  return (
    <div className="flex justify-center w-full">
      <div className="flex flex-col items-center gap-5">
        <MdReportGmailerrorred className="text-5xl text-custom_mg_orange" />
        <p className="text-xl font-light">
          Failed to fetch portfolio projects. Please try again later.
        </p>
      </div>
    </div>
  );
};
