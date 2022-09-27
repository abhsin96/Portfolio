import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <nav className="fixed flex w-screen z-10 flex-wrap items-center justify-between px-2 py-3 bg-[#1a202c]">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="text-3xl cursor-pointer font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-orange-600"
          >
            ABHISHEK
          </Link>
          <button
            className="text-orange-600 cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="px-3 py-2 flex cursor-pointer  items-center text-xs uppercase font-bold leading-snug text-orange-600 hover:opacity-75"
              >
                <i className="fab fa-facebook-square text-lg leading-lg text-orange-600 opacity-75"></i>
                <span className="ml-2 text-xl ">About</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="px-3 py-2 flex items-center cursor-pointer  text-xs uppercase font-bold leading-snug text-orange-600 hover:opacity-75"
              >
                <i className="fab fa-twitter text-lg leading-lg text-orange-600 opacity-75"></i>
                <span className="ml-2 text-xl">Project</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="px-3 py-2 flex items-center cursor-pointer  text-xs uppercase font-bold leading-snug text-orange-600 hover:opacity-75"
              >
                <i className="fab fa-pinterest text-lg leading-lg text-orange-600 opacity-75"></i>
                <span className="ml-2 text-xl">Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
