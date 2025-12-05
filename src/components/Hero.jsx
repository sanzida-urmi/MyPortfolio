import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from('#intro-slider', {
        xPercent: -100,
        duration: 1.3,
        delay: 0.3,
      })
        .from(['#title-1', '#title-2', '#title-3'], {
          opacity: 0,
          y: '+=30',
          stagger: 0.5,
        })
        .from('#social-icons a', {
            opacity: 0,
            y: 20,
            stagger: 0.2,
            duration: 0.5,
            ease: "power2.out"
        }, "-=0.5")
        .from('#resume-btn', {
            scale: 0,
            duration: 0.5,
            ease: "back.out(1.7)"
        }, "-=0.3")
         .from('#profile-img', {
            scale: 0,
            opacity: 0,
            duration: 1,
            ease: "elastic.out(1, 0.3)"
        }, "-=1.5");
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div id="home" className="p-6 md:p-8" ref={comp}>
      <main className="flex flex-col items-center text-center">
        <div id="profile-img" className="relative w-48 h-48 mb-8">
          <div className="absolute inset-0 bg-primary rounded-full transform scale-105"></div>
          <img
            alt="Portrait of Sanzida"
            className="relative w-full h-full object-cover rounded-full border-4 border-background-light dark:border-background-dark"
            src="https://i.ibb.co.com/XHsG3Cz/da440a75-72b6-4474-ae61-116f04f97ec9.jpg"
          />
        </div>
        <div className="w-full max-w-md">
          <h1 id="title-1" className="text-5xl font-extrabold text-gray-800 dark:text-white mb-1">
            Hi, I'm <span className="text-primary">SANZIDA</span>
          </h1>
          <h2 id="title-2" className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-6">
            MERN Stack Developer
          </h2>
          <p id="title-3" className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8">
            I loves building dynamic and responsive web applications. My programming
            journey began with C and Java, and over time I fell in love with web
            development, especially working with React, Node.js, and MongoDB. I
            enjoy turning ideas into clean, user-friendly digital experiences.
            <br />
            <br />
            Outside of coding, I love indoor plants 🌱, reading, and exploring
            creative hobbies like painting and sketching. I’m curious,
            detail-oriented, and always eager to learn something new, whether it’s
            a programming trick or a fun DIY project!
          </p>
        </div>
        <div id="social-icons" className="flex items-center justify-center space-x-4">
          <a
            className="social-icon text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white dark:hover:text-white hover:border-primary transition-colors"
            href="https://web.facebook.com/sanzida.urmi.993873"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            className="social-icon text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white dark:hover:text-white hover:border-primary transition-colors"
            href="https://github.com/sanzida-urmi"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.165 6.837 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z"
                fillRule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            className="social-icon text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-primary hover:text-white dark:hover:text-white hover:border-primary transition-colors"
            href="https://www.linkedin.com/in/most-sanzida-khatun"
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
            </svg>
          </a>
        </div>
        <a
          id="resume-btn"
          href="Most._Sanzida_Khatun_Resume.zip"
          download="Most._Sanzida_Khatun_Resume.zip"
        >
          <button className="w-50 mt-4 bg-primary text-text-light font-bold py-4 px-6 rounded-full">
            <span className="text-black">Download Resume</span>
          </button>
        </a>
      </main>
    </div>
  );
};

export default Hero;
