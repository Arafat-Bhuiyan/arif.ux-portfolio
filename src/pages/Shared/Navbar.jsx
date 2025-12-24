import logo from "../../assets/images/logo.png";

function Navbar() {
  return (
    <div className="bg-white/10 rounded-full shadow-[0px_4px_20px_-1px_rgba(0,149,255,0.50)] outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-[6px] overflow-hidden">
      <div className="container mx-auto px-5 py-4 flex justify-between items-center">
        <div className="relative w-24 h-12 flex items-center justify-center">
          <img
            src={logo}
            alt="logo"
            className="absolute w-48 h-48 max-w-none object-contain"
          />
        </div>
        <div className="hidden xl:inline-flex justify-start items-center gap-6">
          <a
            href="/"
            className="p-2.5 text-center text-xl font-unbounded leading-normal text-sky-500 font-semibold border-b-2 border-sky-500 "
          >
            Home
          </a>

          <a
            href="#projects"
            className="p-2.5 text-center text-xl font-unbounded leading-normal text-white font-normal hover:text-sky-500"
          >
            Projects
          </a>

          <a
            href="#about"
            className="p-2.5 text-center text-xl font-unbounded leading-normal text-white font-normal hover:text-sky-500"
          >
            About
          </a>

          <a
            href="#services"
            className="p-2.5 text-center text-xl font-unbounded leading-normal text-white font-normal hover:text-sky-500"
          >
            Services
          </a>

          <a
            href="#contact"
            className="p-2.5 text-center text-xl font-unbounded leading-normal text-white font-normal hover:text-sky-500"
          >
            Contact
          </a>
        </div>
        <div className="w-40 h-11 flex items-center justify-center bg-sky-500 hover:bg-sky-600 rounded-[119px] overflow-hidden">
          <button className="text-center justify-start text-white text-xl font-normal font-unbounded">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
