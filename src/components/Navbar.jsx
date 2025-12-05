import React from 'react';

const Navbar = () => {
  return (
    <nav className="sticky z-50 top-0">
      <div className="navbar bg-[#1a0021] text-white px-6 py-4 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                ></path>
              </svg>
            </div>
            <ul
              tabIndex={-1}
              className="menu menu-sm dropdown-content bg-[#1a0021] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <a
                aria-current="page"
                className="mr-3 hover:text-purple-400 transition-colors duration-300 active"
                href="#home"
                data-discover="true"
              >
                Home
              </a>
              <a
                className="mr-3 hover:text-purple-400 transition-colors duration-300"
                href="#about"
                data-discover="true"
              >
                About
              </a>
              <a
                className="mr-3 hover:text-purple-400 transition-colors duration-300"
                href="#project"
                data-discover="true"
              >
                Projects
              </a>
              <a
                className="mr-3 hover:text-purple-400 transition-colors duration-300"
                href="#contact"
                data-discover="true"
              >
                Contact
              </a>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl bg-primary text-white">
            Sanzida
            <p>
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 512 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M161.98 397.63 0 256l161.98-141.63 27.65 31.61L64 256l125.63 110.02-27.65 31.61zm188.04 0-27.65-31.61L448 256 322.37 145.98l27.65-31.61L512 256 350.02 397.63z"></path>
              </svg>
            </p>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <a
              aria-current="page"
              className="mr-3 hover:text-purple-400 transition-colors duration-300 active"
              href="#home"
              data-discover="true"
            >
              Home
            </a>
            <a
              className="mr-3 hover:text-purple-400 transition-colors duration-300"
              href="#about"
              data-discover="true"
            >
              About
            </a>
            <a
              className="mr-3 hover:text-purple-400 transition-colors duration-300"
              href="#project"
              data-discover="true"
            >
              Projects
            </a>
            <a
              className="mr-3 hover:text-purple-400 transition-colors duration-300"
              href="#contact"
              data-discover="true"
            >
              Contact
            </a>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
