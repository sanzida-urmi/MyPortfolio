import React, { useState } from 'react';
import SectionWrapper from './SectionWrapper';
import { TbTargetArrow } from "react-icons/tb";
import { FaLaptopCode } from "react-icons/fa";

const About = () => {
 

  return (
    <SectionWrapper
      id="about"
      className=" font-sans"
    >
      <div className="flex flex-col">
        <main className="flex-grow px-6">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold tracking-widest text-white uppercase mt-20 mb-10">
                ABOUT ME
              </p>
              <p className="sm:text-sm text-xs font-semibold tracking-widest text-white uppercase mb-10">
                I loves building dynamic and responsive web applications. My programming journey began with C and Java, and over time I fell in love with web development, especially working with React, Node.js, and MongoDB. I enjoy turning ideas into clean, user-friendly digital experiences. Outside of coding, I love indoor plants, reading, and exploring creative hobbies like painting and sketching. I’m curious, detail-oriented, and always eager to learn something new, whether it’s a programming trick or a fun DIY project!
              </p>
              <h1 className="sm:text-3xl text-sm font-bold mt-2 text-white">
                Full-Stack Developer Crafting Digital Solutions That Drive Results
              </h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
    p-4 rounded-lg
    flex flex-col space-y-4
    bg-[#0f0f12]
    border border-white/5
    backdrop-blur-xl
    shadow-[0_20px_50px_rgba(0,0,0,0.6)]
    transition-all duration-300
    hover:-translate-y-1
  "
  style={{
    backgroundImage:
      "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 40%)",
  }}
>
  <div className="sm:w-12 w-8 h-8 sm:h-12 rounded-full bg-orange-700 flex items-center justify-center"><FaLaptopCode size={20} sm:size={30} />
</div>

  <p className="text-gray-400 sm:text-sm text-xs">
    I specialize in building scalable web applications with modern
    stacks like MERN. Every project reflects my meticulous attention
    to technical detail, clean architecture, and performance optimization.
  </p>
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
    p-4 rounded-lg
    flex flex-col space-y-4
    bg-[#0f0f12]
    border border-white/5
    backdrop-blur-xl
    shadow-[0_20px_50px_rgba(0,0,0,0.6)]
    transition-all duration-300
    hover:-translate-y-1
  "
  style={{
    backgroundImage:
      "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 40%)",
  }}
>
  <div className="sm:w-12 w-8 h-8 sm:h-12 rounded-full bg-orange-700 flex items-center justify-center"><TbTargetArrow  size={20} sm:size={30}/></div>

  <p className="text-gray-400 sm:text-sm text-xs">
    From concept to deployment, I ensure the final product is not just functional but delivers an engaging user experience that aligns with business goals and user needs.
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
