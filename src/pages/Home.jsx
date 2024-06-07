import React from 'react';
import { Projects } from '../components/Projects';
import { Landing } from '../components/Landing';
import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <div className="bg-zinc-950">
      <section className="mb-10">
        <Hero />
      </section>
      <section className="container mx-auto mt-28">
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
