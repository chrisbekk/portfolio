import React from 'react';

export const Hero = () => {
  return (
    <div className="h-screen relative">
      {/* <div className="size-[420px] rotate-45 border border-custom_mg_orange absolute bottom-[35%] left-[50vw] -translate-x-[50%] shadow-[10px_16px_4px_2px_rgba(221,100,36,0.25)]"></div> */}
      <div className="w-full h-[1px] bg-custom_mg_orange shadow-[0px_14px_4px_1px_rgba(221,100,36,0.75)] absolute bottom-20"></div>
      <div className="w-[3px] h-[75vh] bg-custom_mg_orange absolute bottom-6 left-[15vw] shadow-[15px_20px_4px_0px_rgba(221,100,36,0.25)]"></div>
      <div className="w-[6px] h-[55vh] bg-custom_mg_orange absolute bottom-6 right-[15vw] shadow-[24px_-39px_8px_0px_rgba(221,100,36,0.50)]"></div>
    </div>
  );
};
