import React from 'react';
import { Outlet } from 'react-router-dom';
export const Layout = () => {
  return (
    <div>
      HEADER AND FOOTER IS HERE
      <Outlet />
    </div>
  );
};
