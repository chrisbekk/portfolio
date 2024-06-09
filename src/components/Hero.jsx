import React from 'react';

export const Hero = () => {
  return (
    <div className="h-[70vh] relative">
      <div className="flex flex-col justify-center items-center h-full">
        <div>
          <p className=" text-4xl ">Hi!</p>
          <h1 className="text-custom_mg_orange text-5xl">
            My name is Christian, and I'm a frontend developer
          </h1>
          <p className="text-4xl">Welcome to my portfolio page</p>
        </div>
      </div>

      <div className="w-full h-[1px] bg-custom_mg_orange shadow-[0px_14px_4px_1px_rgba(221,100,36,0.75)] absolute bottom-20"></div>
    </div>
  );
};
