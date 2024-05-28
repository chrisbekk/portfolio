import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export const Layout = () => {
  return (
    <div className="bg-black flex text-white flex-col min-h-screen">
      <header className="flex justify-between w-full px-5 h-32 items-center border-red-300 border">
        <h1>Navbar</h1>
        <div className="flex gap-4">
          <Link to={'/'}>ROOT</Link>
          <Link to={'/site'}>HERO</Link>
          <Link to={'/pages/home'}>HOME</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>This is a footer element</footer>
    </div>
  );
};
