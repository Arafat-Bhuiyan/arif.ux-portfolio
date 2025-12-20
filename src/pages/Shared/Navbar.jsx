import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";

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
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `h-6 text-center text-xl font-unbounded leading-normal ${
                isActive
                  ? "text-sky-500 font-semibold underline"
                  : "text-white font-normal hover:text-sky-500"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/projects"
            end
            className={({ isActive }) =>
              `h-6 text-center text-xl font-unbounded leading-normal ${
                isActive
                  ? "text-sky-500 font-semibold underline"
                  : "text-white font-normal hover:text-sky-500"
              }`
            }
          >
            Projects
          </NavLink>

          <NavLink
            to="/about"
            end
            className={({ isActive }) =>
              `h-6 text-center text-xl font-unbounded leading-normal ${
                isActive
                  ? "text-sky-500 font-semibold underline"
                  : "text-white font-normal hover:text-sky-500"
              }`
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            end
            className={({ isActive }) =>
              `h-6 text-center text-xl font-unbounded leading-normal ${
                isActive
                  ? "text-sky-500 font-semibold underline"
                  : "text-white font-normal hover:text-sky-500"
              }`
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            end
            className={({ isActive }) =>
              `h-6 text-center text-xl font-unbounded leading-normal ${
                isActive
                  ? "text-sky-500 font-semibold underline"
                  : "text-white font-normal hover:text-sky-500"
              }`
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="w-40 h-11 flex items-center justify-center bg-sky-500 hover:bg-sky-600 rounded-[119px] overflow-hidden">
          <div className="text-center justify-start text-white text-xl font-normal font-unbounded">
            Hire Me
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
