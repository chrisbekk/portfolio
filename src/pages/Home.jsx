import React from 'react';
import { Projects } from '../components/Projects';
import { Landing } from '../components/Landing';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <div className="bg-black">
      <section className="">
        <Hero />
      </section>
      <section className="container mx-auto">
        <div className="mx-2 md:mx-0">
          {' '}
          <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8 font-semibold">
            Projects
          </h1>
          <Projects />
        </div>
      </section>
    </div>
  );
};
