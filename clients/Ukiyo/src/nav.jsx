import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isNavbarScrolled, setIsNavbarScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsNavbarScrolled(true);
      } else {
        setIsNavbarScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 bg-dark w-full z-10 ${
        isNavbarScrolled ? "navbar-scrolled bg-gray-500" : ""
      }`}
    >
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <a className="navbar-brand" href="/home">
            <img
              src="../src/assets/logo.jpeg"
              alt="Logo"
              className="h-12 sm:h-16 lg:h-20"
            />
          </a>
          <div className="hidden md:flex space-x-8">
            <Link
              to="/services"
              className="text-black font-bold hover:text-white"
            >
              Services
            </Link>
            <Link
              to="/portfolio"
              className="text-black font-bold hover:text-white"
            >
              Portfolio
            </Link>
            <Link to="/about" className="text-black font-bold hover:text-white">
              About
            </Link>
            <Link to="/team" className="text-black font-bold hover:text-white">
              Team
            </Link>
            <Link
              to="/contact"
              className="text-black font-bold hover:text-white"
            >
              Contact
            </Link>
          </div>
          <div className="hidden md:flex space-x-5">
            <Link
              to="/a"
              className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
            >
              Register
            </Link>
          </div>
          <div className="md:hidden">
            <button className="navbar-toggler flex items-center justify-center p-2 text-gray-700 rounded">
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a2 2 0 012 2v10a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2zm10 0a2 2 0 012 2v10a2 2 0 01-2 2H13a2 2 0 01-2-2V7a2 2 0 012-2zm4 0a2 2 0 012 2v10a2 2 0 01-2 2H17a2 2 0 01-2-2V7a2 2 0 012-2z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;