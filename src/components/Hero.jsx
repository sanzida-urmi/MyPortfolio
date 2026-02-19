import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import Typed from "typed.js";
import { MdFileDownload } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa";
import { Github, Linkedin, Facebook } from "lucide-react";


const Hero = () => {
  const comp = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Intro animation
      const t1 = gsap.timeline();

      t1.from(["#title-1", "#title-2"], {
        opacity: 0,
        y: "+=30",
        stagger: 0.5,
      }).from(
        "#profile-img",
        {
          scale: 0,
          opacity: 0,
          duration: 1,
          ease: "elastic.out(1, 0.3)",
        },
        "-=1"
      );
    }, comp);

    // 🔥 Typing effect
    const typed = new Typed(textRef.current, {
      strings: [
        "MERN Stack Developer",
        "Full Stack Developer",
        "React Developer",
        "Frontend Developer",
        "Backend Developer",
      ],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1200,
      loop: true,
      showCursor: true,
      cursorChar: "|",
    });

    return () => {
      ctx.revert();
      typed.destroy();
    };
  }, []);

  return (
    <div id="home" className="lg:pt-32 pt-28" ref={comp}>
      <main className="flex lg:flex-row-reverse flex-col-reverse items-center gap-20 w-full">
        

        {/* Profile Image */}
        <div className="lg:w-1/2 w-11/12 flex justify-center items-center">
          <div id="profile-img" className="relative w-72 h-72 mb-8">
            <div className="absolute inset-0 bg-orange-700 rounded-full scale-105"></div>
            <img
              alt="Portrait of Sanzida"
              className="relative w-full h-full object-cover rounded-full border-4 border-white"
              src="https://i.ibb.co/ymBPdsMQ/pic.png"
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:w-1/2 w-11/12 lg:pl-10 pl:3">
        <div className="flex items-center gap-2 mb-6">

  {/* Green animated dot */}
  <span className="relative flex h-3 w-3">
    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
  </span>

  {/* Text */}
  <p className="text-xs font-medium text-gray-600 dark:text-gray-400">
    Available for work
  </p>

</div>

          <h1 id="title-1" className="font-extrabold text-orange-700 mb-1">
            Hi, I'm <br />
            <span className="text-white text-4xl sm:text-7xl">SANZIDA</span>
          </h1>

          <h2
            id="title-2"
            className="sm:text-5xl text-2xl font-bold text-white mb-3 sm:mb-6 h-8"
          >
            <span className="text-orange-700" ref={textRef}></span>
          </h2>
           <p className="text-white sm:text-lg text-xs">Building Modern Web Experiences.From concept to deployment, I transform ideas into interactive and engaging digital solutions.</p>
          
          <div className="flex sm:flex-row flex-col gap-1 sm:gap-5">
           <a
           href="/Sanzida_Resume.pdf"
             download="Sanzida_Resume.pdf"
  className="
  w-50 mt-4 mr-4
  relative overflow-hidden
  bg-black
  border-2 border-orange-700
  font-bold py-2 px-5
  rounded-full
  transition-all duration-300
  hover:-translate-y-1
  hover:border-orange-500
  hover:shadow-[0_0_25px_rgba(255,165,0,0.6)]
  active:scale-95 sm:text-lg text-xs
  "
>
  <span className="flex items-center justify-center gap-2 text-white relative z-10">
    Download Resume
    <MdFileDownload size={20} />
  </span>
</a>

<a
  href="#contact"
  className="
  inline-block
  mt-4 mr-4 
  relative overflow-hidden
  bg-black sm:text-lg text-xs
  border-2 border-orange-700
  font-bold py-2 px-5
  rounded-full
  transition-all duration-300
  hover:-translate-y-1
  hover:border-orange-500
  hover:shadow-[0_0_25px_rgba(255,165,0,0.6)]
  active:scale-95
  "
>
  <span className="flex items-center justify-center gap-2 text-white relative z-10">
    Hire me <FaArrowRight size={20} />
  </span>
</a>
</div>
                 <div className="flex gap-4 mt-6">
            <p className=" text-white sm:text-lg text-xs">Welcome to my world</p>
                        <a href="https://github.com/sanzida-urmi" className="text-gray-400 hover:text-orange-500 transition">
                          <Github size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/most-sanzida-khatun/" className="text-gray-400 hover:text-orange-500 transition">
                          <Linkedin size={20} />
                        </a>
                       
                        <a href="https://www.facebook.com/sanzida.urmi.993873" className="text-gray-400 hover:text-orange-500 transition">
                          <Facebook size={20} />
                        </a>
                      </div>

        </div>

      </main>
    </div>
  );
};

export default Hero;
