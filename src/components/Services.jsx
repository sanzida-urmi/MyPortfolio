import React from 'react';
import SectionWrapper from './SectionWrapper';


const Services = () => {
  return (
    <SectionWrapper id="services" className=" font-display mt-10">
      <div className="flex flex-col">
        <main className="flex-grow p-6">
          <p className="text-sm font-semibold tracking-widest text-white uppercase">
            My Services
          </p>
          <div className="gap-8 mt-10 flex flex-col md:flex-row">
            <div
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  }}
  className="
    relative overflow-hidden
    rounded-xl sm:p-6 p-4
    flex flex-col text-center items-center
    bg-[#0f0f12]
    border border-white/5
    backdrop-blur-xl
    shadow-[0_20px_50px_rgba(0,0,0,0.6)]
    transition-all duration-300
    hover:-translate-y-1
  "
  style={{
    backgroundImage:
      "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 45%)",
  }}
>
  <div className="relative z-10 flex flex-col items-center">
    <div className="sm:mb-4 mb-2"></div>

    <h2 className="sm:text-xl text-sm font-bold mb-2 text-white">
      Web Development
    </h2>

    <p className="sm:text-sm text-xs text-gray-400 sm:mb-6 mb-2 leading-relaxed text-start sm:text-center">
      I develop full-stack web applications using React, Node.js, Express, and MongoDB. My goal is to write clean, efficient, and maintainable code that ensures high performance and scalability for any project.
    </p>
  </div>
</div>


            <div
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  }}
  className="
    relative overflow-hidden
    rounded-xl sm:p-6 p-4
    flex flex-col text-center items-center
    bg-[#0f0f12]
    border border-white/5
    backdrop-blur-xl
    shadow-[0_20px_50px_rgba(0,0,0,0.6)]
    transition-all duration-300
    hover:-translate-y-1
  "
  style={{
    backgroundImage:
      "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 45%)",
  }}
>
  <div className="relative z-10 flex flex-col items-center">
    <div className="mb-4"></div>

    <h2 className="sm:text-xl text-sm font-bold mb-2 text-white">
     Responsive Design
    </h2>

    <p className="sm:text-sm text-xs text-gray-400 sm:mb-6 mb-2 leading-relaxed text-start sm:text-center">
      I create fully responsive websites that look great on all devices — from mobile phones to large desktop screens. I use Tailwind CSS and modern layouts to ensure fluid user experiences everywhere.
    </p>
  </div>
</div>



            <div
  onMouseMove={(e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  }}
  className="
    relative overflow-hidden
    rounded-xl sm:p-6 p-4
    flex flex-col text-center items-center
    bg-[#0f0f12]
    border border-white/5
    backdrop-blur-xl
    shadow-[0_20px_50px_rgba(0,0,0,0.6)]
    transition-all duration-300
    hover:-translate-y-1
  "
  style={{
    backgroundImage:
      "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 45%)",
  }}
>
  <div className="relative z-10 flex flex-col items-center">
    <div className="sm:mb-4 mb-2"></div>

    <h2 className="sm:text-xl text-sm font-bold mb-2 text-white">
      Modern Design Principles
    </h2>

    <p className="sm:text-sm text-xs text-gray-400 sm:mb-6 mb-2 leading-relaxed text-start sm:text-center">
      I apply contemporary design principles to create clean,
      accessible, and aesthetically pleasing interfaces. My design
      process is user-centeorange, ensuring that every element serves a
      purpose and contributes to a cohesive and engaging user journey.
    </p>
  </div>
</div>


          </div>
        </main>
      </div>
    </SectionWrapper>
  );
};

export default Services;
