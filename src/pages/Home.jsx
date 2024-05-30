import React from 'react';
import { Projects } from '../components/Projects';

export const Home = () => {
  return (
    <div className="bg-black">
      <section className="h-[50vh]"></section>
      <section className="">
        <h1 className="text-2xl sm:text-4xl">Projects</h1>
        <Projects />
      </section>
    </div>
  );
};
