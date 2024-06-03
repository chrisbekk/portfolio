import React from 'react';
import { Projects } from '../components/Projects';

export const Home = () => {
  return (
    <div className="bg-black">
      <section className="h-[50vh]"></section>
      <section className="container mx-auto">
        <div className="mx-2 md:mx-0">
          {' '}
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 font-semibold underline">
            Projects
          </h1>
          <Projects />
        </div>
      </section>
    </div>
  );
};
