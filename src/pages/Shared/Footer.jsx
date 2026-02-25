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
    <div className="w-full h-auto relative bg-[#002152] rounded-tl-[20px] rounded-tr-[20px]">
      <div className="flex justify-between items-center gap-40 p-20">
        <div className="inline-flex flex-col justify-start items-start gap-7">
          <img
            className="transition-transform duration-300 hover:scale-105"
            src={logo}
            alt="Logo"
          />
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-justify justify-start text-neutral-400 text-sm font-normal font-unbounded leading-6 max-w-[300px]">
              Designing experiences that feel as good as they look.
            </p>
          </div>
          <div className="inline-flex justify-between items-start gap-3.5">
            <a
              href="https://dribbble.com/arifulislam_1995"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <img src={dribble} alt="Dribble" className="w-5 h-5" />
            </a>
            <a
              href="https://www.facebook.com/Sh0pnilll"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <img src={facebook} alt="Facebook" className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/sh0pnill_hasanigsh=MXg3eGxvamdtcWprMA=="
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <img src={instagram} alt="Instagram" className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/ariful-islam95/"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <img src={linkedin} alt="LinkedIn" className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/arifulislam1995"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 bg-white/10 hover:bg-white/20 rounded-full w-10 h-10 flex justify-center items-center transition-all duration-300 hover:scale-110"
            >
              <img src={behance} alt="Behance" className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div className="flex justify-start items-start gap-14">
          <div className="inline-flex flex-col justify-center items-start gap-6">
            <h1 className="text-justify justify-start text-neutral-200 text-2xl font-bold font-unbounded">
              Home
            </h1>
            <div className="flex flex-col justify-center items-start gap-5">
              <a
                href="#services"
                className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#projects"
                className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                Portfolio
              </a>
              <a
                href="#about"
                className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:text-sky-500 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="inline-flex flex-col justify-center items-start gap-6">
            <h1 className="text-justify justify-start text-neutral-200 text-2xl font-bold font-unbounded">
              Services
            </h1>
            <div className="flex flex-col justify-center items-start gap-5 cursor-default">
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                App Design
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                Web Design
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                Dashboard Design
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded hover:translate-x-1 transition-transform">
                Wireframe
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col justify-center items-start gap-6">
            <h1 className="justify-start text-neutral-200 text-2xl font-bold font-unbounded">
              Contact Info
            </h1>
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="inline-flex justify-center items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                <div className="w-6 h-6 relative overflow-hidden transition-transform group-hover:scale-110">
                  <img src={call} alt="" />
                </div>
                <div className="justify-start text-neutral-400 text-base font-normal font-unbounded group-hover:text-sky-400 transition-colors">
                  01757-766272
                </div>
              </div>
              <div className="inline-flex justify-center items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                <div className="w-6 h-6 relative overflow-hidden transition-transform group-hover:scale-110">
                  <img src={location} alt="" />
                </div>
                <div className="justify-start text-neutral-400 text-base font-normal font-unbounded group-hover:text-sky-400 transition-colors">
                  Dhaka, bangladesh
                </div>
              </div>
              <div className="inline-flex justify-center items-center gap-2 group cursor-pointer hover:translate-x-1 transition-transform">
                <div className="w-6 h-6 relative overflow-hidden transition-transform group-hover:scale-110">
                  <img src={message} alt="" />
                </div>
                <div className="justify-start text-neutral-400 text-base font-normal font-unbounded group-hover:text-sky-400 transition-colors text-xs lg:text-base break-all">
                  aarifulislam19955#gmail.com
                  <br />
                  arifulislam.uiux@gmail.com
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
