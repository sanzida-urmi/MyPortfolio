import React from 'react';
import SectionWrapper from './SectionWrapper';

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="bg-background-light dark:bg-background-dark font-display"
    >
      <div className="flex flex-col">
        <main className="flex-grow p-6">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-primary uppercase">
                ABOUT ME
              </p>
              <h1 className="text-3xl font-bold mt-2 text-gray-900 dark:text-white">
                Full-Stack Developer Crafting Digital Solutions That Drive Results
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg flex flex-col space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center"></div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  I specialize in building scalable web applications with modern
                  stacks like MERN. Every project reflects my meticulous attention
                  to technical detail, clean architecture, and performance
                  optimization.
                </p>
              </div>
              <div className="bg-white dark:bg-zinc-800 p-4 rounded-lg flex flex-col space-y-4 shadow-sm">
                <div className="w-12 h-12 rounded-full bg-primary/20 dark:bg-primary/30 flex items-center justify-center"></div>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  From concept to deployment, I ensure the final product is not
                  just functional but delivers an engaging user experience that
                  aligns with business goals and user needs.
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </SectionWrapper>
  );
};

export default About;
