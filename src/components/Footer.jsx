import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0d] border-t border-white/5 mt-0">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid grid-cols-1 md:grid-cols-4 sm:gap-12 gap-8">

          {/* About */}
          <div>
            <a className="sm:text-3xl text-xl font-bold" href="#home">
          SANZ<span className="text-orange-700">IDA</span>
        </a>
            <p className="text-gray-400 leading-relaxed sm:mt-4 mt-2 sm:text-md text-sm">
              MERN Stack Developer passionate about building fast,
              secure, and scalable web applications with modern UI/UX.
            </p>

            <div className="flex gap-4 sm:mt-6 mt-3">
              <a href="https://github.com/sanzida-urmi" className="text-gray-400 hover:text-orange-500 transition">
                <Github size={15} sm:size={20} />
              </a>
              <a href="https://www.linkedin.com/in/most-sanzida-khatun/" className="text-gray-400 hover:text-orange-500 transition">
                <Linkedin size={15} sm:size={20} />
              </a>
             
              <a href="https://www.facebook.com/sanzida.urmi.993873" className="text-gray-400 hover:text-orange-500 transition">
                <Facebook size={15} sm:size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="sm:text-lg text-md font-semibold text-orange-500 sm:mb-4 mb-2">
              Quick Links
            </h3>
            <ul className="sm:space-y-2 space-y-1 text-gray-400 sm:text-md text-sm">
                           <li><a href="#home" className="hover:text-white transition cursor-pointer" >Home</a></li>
          <li><a href="#about" className="hover:text-white transition cursor-pointer">About</a></li>
          <li><a href="#services" className="hover:text-white transition cursor-pointer">Services</a></li>
          <li><a href="#skills" className="hover:text-white transition cursor-pointer">Skills</a></li>
          <li><a href="#project" className="hover:text-white transition cursor-pointer">Projects</a></li>
          <li><a href="#contact" className="hover:text-white transition cursor-pointer">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="sm:text-lg text-md font-semibold text-orange-500 mb-4">
              Services
            </h3>
            <ul className="sm:space-y-2 space-y-1 text-gray-400 sm:text-md text-sm">
              <li>MERN Stack Development</li>
              <li>REST API Development</li>
              <li>Responsive UI Design</li>
              <li>Database Integration</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="sm:text-lg text-md font-semibold text-orange-500 mb-4">
              Contact
            </h3>
            <ul className="sm:space-y-2 space-y-1 text-gray-400 sm:text-md text-sm">
              <li className="break-all">Email: mostsanzidakhatun752@gmail.com</li>
              <li>Phone: 01329427224</li>
              <li>Location: Faridpur, Bangladesh</li>
            </ul>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="border-t border-white/5 mt-12 pt-6 text-center text-gray-500 sm:text-sm text-xs">
          © {new Date().getFullYear()} Sanzida. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
