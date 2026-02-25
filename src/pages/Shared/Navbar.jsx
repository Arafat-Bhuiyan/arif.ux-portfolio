import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#", active: true },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="relative z-[100]">
      <div className="bg-white/10 mt-4 md:mt-6 rounded-3xl md:rounded-full shadow-[0px_4px_20px_-1px_rgba(0,149,255,0.30)] outline outline-1 md:outline-2 outline-offset-[-1px] md:outline-offset-[-2px] outline-sky-500/50 backdrop-blur-xl overflow-hidden transition-all duration-300">
        <div className="container mx-auto px-4 md:px-5 py-3 md:py-4 flex justify-between items-center">
          {/* Logo Section */}
          <div className="relative w-16 h-8 md:w-24 md:h-12 flex items-center justify-center">
            <img
              src={logo}
              alt="logo"
              className="absolute w-32 h-32 md:w-48 md:h-48 max-w-none object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:inline-flex justify-start items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`p-2 xl:p-2.5 text-center text-base xl:text-lg font-unbounded leading-normal transition-all duration-300 hover:text-sky-500 ${
                  link.active
                    ? "text-sky-500 font-semibold border-b-2 border-sky-500"
                    : "text-white font-normal hover:-translate-y-0.5"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Hire Me Button & Mobile Toggle */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className="hidden sm:flex w-32 md:w-40 h-9 md:h-11 items-center justify-center bg-sky-500 hover:bg-sky-400 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/20 group cursor-pointer">
              <button className="w-full h-full text-center text-white text-sm md:text-lg font-normal font-unbounded">
                Hire Me
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-white hover:text-sky-500 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen ? "max-h-[400px] border-t border-white/10" : "max-h-0"
          }`}
        >
          <div className="flex flex-col p-4 gap-2 bg-black/20 backdrop-blur-3xl">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`px-4 py-3 rounded-xl text-lg font-unbounded transition-all ${
                  link.active
                    ? "text-sky-500 bg-sky-500/10 font-medium"
                    : "text-white hover:bg-white/5"
                }`}
              >
                {link.name}
              </a>
            ))}
            <div className="sm:hidden mt-4">
              <button className="w-full py-4 bg-sky-500 text-white rounded-xl font-unbounded text-lg hover:bg-sky-400 transition-all active:scale-[0.98]">
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
