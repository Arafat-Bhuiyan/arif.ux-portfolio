import logo from "../../assets/images/logo2.png";
import dribble from "../../assets/images/dribble2.svg";
import facebook from "../../assets/images/facebook2.svg";
import instagram from "../../assets/images/instagram2.svg";
import linkedin from "../../assets/images/linkedin2.svg";
import behance from "../../assets/images/behance2.svg";
import message from "../../assets/images/Message.svg";
import call from "../../assets/images/call.svg";
import location from "../../assets/images/location.svg";

export const Footer = () => {
  return (
    <footer className="w-full h-auto relative bg-[#002152] rounded-tl-[30px] rounded-tr-[30px] sm:rounded-tl-[50px] sm:rounded-tr-[50px] overflow-hidden">
      <div className="container mx-auto px-6 py-12 sm:px-10 sm:py-16 lg:px-20 lg:py-20 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-20">
        {/* Left Section - Logo & Socials */}
        <div className="flex flex-col justify-start items-center lg:items-start gap-6 sm:gap-8 w-full lg:w-auto">
          <img
            className="w-32 sm:w-40 lg:w-auto transition-transform duration-300 hover:scale-105"
            src={logo}
            alt="Logo"
          />
          <div className="flex flex-col justify-start items-center lg:items-start gap-4">
            <p className="text-center lg:text-left text-neutral-400 text-sm sm:text-base font-normal font-unbounded leading-relaxed max-w-[320px]">
              Designing experiences that feel as good as they look.
            </p>
          </div>

          {/* Social Links Container */}
          <div className="flex justify-center lg:justify-start items-center gap-4 flex-wrap">
            <a
              href="https://dribbble.com/arifulislam_1995"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-sky-500 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-sky-500/10"
            >
              <img src={dribble} alt="Dribble" className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/Sh0pnilll"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-sky-500 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-sky-500/10"
            >
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/sh0pnill_hasanigsh=MXg3eGxvamdtcWprMA=="
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-sky-500 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-sky-500/10"
            >
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariful-islam95/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-sky-500 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-sky-500/10"
            >
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/arifulislam1995"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-sky-500 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg shadow-sky-500/10"
            >
              <img src={behance} alt="Behance" className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Right Section - Grid Layout links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 sm:gap-14 w-full lg:w-auto">
          {/* Quick Links */}
          <div className="flex flex-col justify-start items-center sm:items-start gap-4 sm:gap-6">
            <h1 className="text-neutral-200 text-xl sm:text-2xl font-bold font-unbounded">
              Home
            </h1>
            <div className="flex flex-col justify-center items-center sm:items-start gap-3 sm:gap-4">
              <a
                href="#services"
                className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="flex flex-col justify-start items-center sm:items-start gap-4 sm:gap-6">
            <h1 className="text-neutral-200 text-xl sm:text-2xl font-bold font-unbounded">
              Services
            </h1>
            <div className="flex flex-col justify-center items-center sm:items-start gap-3 sm:gap-4 cursor-default">
              <p className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                App Design
              </p>
              <p className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                Web Design
              </p>
              <p className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                Dashboard Design
              </p>
              <p className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                Wireframe
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="flex flex-col justify-start items-center sm:items-start gap-4 sm:gap-6 sm:col-span-2 md:col-span-1">
            <h1 className="text-neutral-200 text-xl sm:text-2xl font-bold font-unbounded">
              Contact Info
            </h1>
            <div className="flex flex-col justify-start items-center sm:items-start gap-4">
              <div className="flex items-center gap-3 group cursor-pointer transition-all hover:translate-x-1">
                <div className="w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110">
                  <img src={call} alt="Call" className="w-full h-full" />
                </div>
                <div className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded group-hover:text-sky-400">
                  01757-766272
                </div>
              </div>
              <div className="flex items-center gap-3 group cursor-pointer transition-all hover:translate-x-1">
                <div className="w-6 h-6 flex-shrink-0 transition-transform group-hover:scale-110">
                  <img
                    src={location}
                    alt="Location"
                    className="w-full h-full"
                  />
                </div>
                <div className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded group-hover:text-sky-400">
                  Dhaka, Bangladesh
                </div>
              </div>
              <div className="flex items-start gap-3 group cursor-pointer transition-all hover:translate-x-1">
                <div className="w-6 h-6 flex-shrink-0 mt-1 transition-transform group-hover:scale-110">
                  <img src={message} alt="Email" className="w-full h-full" />
                </div>
                <div className="text-neutral-400 text-sm sm:text-base font-normal font-unbounded group-hover:text-sky-400 flex flex-col gap-1">
                  <span>aarifulislam19955#gmail.com</span>
                  <span>arifulislam.uiux@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="border-t border-white/5 py-6">
        <p className="text-center text-neutral-500 text-xs sm:text-sm font-light font-unbounded">
          © {new Date().getFullYear()} Ariful Islam. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
