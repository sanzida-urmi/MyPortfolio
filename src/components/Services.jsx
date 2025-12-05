import React from 'react';
import SectionWrapper from './SectionWrapper';

const Services = () => {
  return (
    <SectionWrapper className="bg-background-light dark:bg-background-dark font-display">
      <div className="flex flex-col">
        <main className="flex-grow p-6">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            My Services
          </p>
          <div className="gap-10 flex flex-col md:flex-row">
            <div className="bg-card-light  dark:bg-card-dark rounded-DEFAULT p-6 flex flex-col text-center items-center shadow-lg">
              <div className="mb-4"></div>
              <h2 className="text-xl text-black font-bold mb-2 text-text-light-primary dark:text-text-dark-primary">
                Modern Design Principles
              </h2>
              <p className="text-sm text-gray-500 text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
                I apply contemporary design principles to create clean,
                accessible, and aesthetically pleasing interfaces. My design
                process is user-centered, ensuring that every element serves a
                purpose and contributes to a cohesive and engaging user journey.
              </p>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-DEFAULT p-6 flex flex-col text-center items-center shadow-lg">
              <div className="mb-4"></div>
              <h2 className="text-xl text-black font-bold mb-2 text-text-light-primary dark:text-text-dark-primary">
                Web Development
              </h2>
              <p className="text-sm text-gray-500 text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
                I develop full-stack web applications using React, Node.js,
                Express, and MongoDB. My goal is to write clean, efficient, and
                maintainable code that ensures high performance and scalability
                for any project.
              </p>
            </div>
            <div className="bg-card-light dark:bg-card-dark rounded-DEFAULT p-6 flex flex-col text-center items-center shadow-lg">
              <div className="mb-4"></div>
              <h2 className="text-xl text-black font-bold mb-2 text-text-light-primary dark:text-text-dark-primary">
                Responsive Design
              </h2>
              <p className="text-sm text-gray-500 text-text-light-secondary dark:text-text-dark-secondary mb-6 leading-relaxed">
                I create fully responsive websites that look great on all devices
                — from mobile phones to large desktop screens. I use Tailwind CSS
                and modern layouts to ensure fluid user experiences everywhere.
              </p>
            </div>
          </div>
        </main>
      </div>
    </SectionWrapper>
  );
};

export default Services;
