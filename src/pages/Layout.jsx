import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
export const Layout = () => {
  return (
    <div className="bg-zinc-950 flex text-white flex-col min-h-screen">
      <header className="">
        <Navbar />
      </header>
      <main className="mb-20">
        <Outlet />
      </main>
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
};
