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
          <img className="" src={logo} />
          <div className="flex flex-col justify-start items-start gap-4">
            <p className="text-justify justify-start text-neutral-400 text-sm font-normal font-unbounded leading-6">
              Designing experiences that feel as good as they look.
            </p>
          </div>
          <div className="inline-flex justify-between items-start gap-3.5">
            <div className="p-2 bg-white/20 rounded-full w-full flex justify-center items-center gap-8">
              <img src={dribble} alt="Dribble" />
            </div>
            <div className="p-2 bg-white/20 rounded-full w-full flex justify-center items-center gap-8">
              <img src={facebook} alt="Facebook" />
            </div>
            <div className="p-2 bg-white/20 rounded-full w-full flex justify-center items-center gap-8">
              <img src={instagram} alt="Instagram" />
            </div>
            <div className="p-2 bg-white/20 rounded-full w-full flex justify-center items-center gap-8">
              <img src={linkedin} alt="LinkedIn" />
            </div>
            <div className="p-2 bg-white/20 rounded-full w-full flex justify-center items-center gap-8">
              <img src={behance} alt="Behance" />
            </div>
          </div>
        </div>
        <div className="flex justify-start items-start gap-14">
          <div className="inline-flex flex-col justify-center items-start gap-6">
            <h1 className="text-justify justify-start text-neutral-200 text-2xl font-bold font-unbounded">
              Home
            </h1>
            <div className="flex flex-col justify-center items-start gap-5">
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                Services
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                Portfolio
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                About Us
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                Contact
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col justify-center items-start gap-6">
            <h1 className="text-justify justify-start text-neutral-200 text-2xl font-bold font-unbounded">
              Services
            </h1>
            <div className="flex flex-col justify-center items-start gap-5">
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                App Design
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                Web Design
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                Dashboard Design
              </p>
              <p className="text-justify justify-start text-neutral-400 text-base font-normal font-unbounded">
                Wireframe
              </p>
            </div>
          </div>
          <div className="inline-flex flex-col justify-center items-start gap-6">
            <h1 className="justify-start text-neutral-200 text-2xl font-bold font-unbounded">
              Contact Info
            </h1>
            <div className="flex flex-col justify-center items-start gap-5">
              <div className="inline-flex justify-center items-center gap-2">
                <div className="w-6 h-6 relative overflow-hidden">
                <img src={call} alt="" />
                </div>
                <div className="justify-start text-neutral-400 text-base font-normal font-unbounded">
                  01757-766272
                </div>
              </div>
              <div className="inline-flex justify-center items-center gap-2">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src={location} alt="" />
                </div>
                <div className="justify-start text-neutral-400 text-base font-normal font-unbounded">
                  Dhaka, bangladesh
                </div>
              </div>
              <div className="inline-flex justify-center items-center gap-2">
                <div className="w-6 h-6 relative overflow-hidden">
                  <img src={message} alt="" />
                </div>
                <div className="justify-start text-neutral-400 text-base font-normal font-unbounded">
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
