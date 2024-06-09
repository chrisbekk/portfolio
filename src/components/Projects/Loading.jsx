import React from 'react';
import { CgSpinner } from 'react-icons/cg';
export const Loading = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col items-center gap-5">
        <CgSpinner className="text-5xl text-custom_mg_orange animate-spin" />
        <p className="text-xl font-light">Fetching Projects...</p>
      </div>
    </div>
  );
};
