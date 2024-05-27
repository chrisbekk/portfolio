import React from 'react';
import { Outlet, Link } from 'react-router-dom';
export const Layout = () => {
  return (
    <div className="bg-neutral-800 flex flex-col min-h-screen">
      <header>
        NAVBAR
        <Link to={'/'}>ROOT</Link>
        <Link to={'/site'}>HERO</Link>
        <Link to={'/pages/home'}>HOME</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>This is a footer element</footer>
    </div>
  );
};
