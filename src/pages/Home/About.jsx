import React from "react";
import headphone from "../../assets/images/headphone.svg";
import travel from "../../assets/images/travel.svg";
import riding from "../../assets/images/riding.svg";
import money from "../../assets/images/money.svg";
import { Camera, Joystick } from "lucide-react";
import service6 from "../../assets/images/services/service6.png";

export const About = () => {
  return (
    <div id="about" className="pb-14">
      <div className="mb-20 space-y-2">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded">
          About Me
        </p>
        <p className="text-center justify-start text-white text-2xl font-light font-unbounded">
          Good design is invisible—great design is unforgettable.
        </p>
      </div>
      <div className="flex justify-between max-w-7xl mx-auto gap-10 pb-9">
        {/* Left Section */}
        <div>
          <p className="text-center justify-start text-sky-500 text-4xl font-medium font-unbounded">
            Lifestyle & Personal Interests
          </p>
          <div className="grid grid-cols-2 gap-6 mt-11">
            <div className="w-72 h-14 relative bg-gradient-to-r from-sky-400/30 to-indigo-600/30 rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] cursor-default">
              <div className="w-full h-full flex justify-center items-center gap-2.5">
                <img src={headphone} alt="Headphone" />
                <p className="text-center justify-start text-sky-400 text-2xl font-medium font-unbounded">
                  Listening Music
                </p>
              </div>
            </div>
            <div className="w-72 h-14 relative bg-gradient-to-r from-orange-500/30 to-sky-900/30 rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(249,115,22,0.2)] cursor-default">
              <div className="w-full h-full flex justify-center items-center gap-2.5">
                <img src={travel} alt="Travel" />
                <p className="text-center justify-start text-orange-500 text-2xl font-medium font-unbounded">
                  Traveling
                </p>
              </div>
            </div>
            <div className="w-72 h-14 relative bg-gradient-to-r from-blue-800/30 to-orange-700/30 rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(30,64,175,0.2)] cursor-default">
              <div className="w-full h-full flex justify-center items-center gap-2.5">
                <img src={riding} alt="Riding" />
                <p className="text-center justify-start text-slate-500 text-2xl font-medium font-unbounded">
                  Riding
                </p>
              </div>
            </div>
            <div className="w-72 h-14 relative bg-gradient-to-r from-amber-600/30 to-sky-500/30 rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(217,119,6,0.2)] cursor-default">
              <div className="w-full h-full flex justify-center items-center gap-2.5">
                <img src={money} alt="Money" />
                <p className="text-center justify-start text-amber-500 text-2xl font-medium font-unbounded">
                  Money
                </p>
              </div>
            </div>
            <div className="w-72 h-14 relative bg-gradient-to-r from-sky-400/30 to-indigo-600/30 rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)] cursor-default">
              <div className="w-full h-full flex justify-center items-center gap-2.5">
                <Camera size={32} color="#3BAACF" />
                <p className="text-center justify-start text-sky-400 text-2xl font-medium font-unbounded">
                  Photography
                </p>
              </div>
            </div>
            <div className="w-72 h-14 relative bg-gradient-to-r from-cyan-400/30 to-orange-200/30 rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] cursor-default">
              <div className="w-full h-full flex justify-center items-center gap-2.5">
                <img
                  src={service6}
                  alt="Gaming"
                  className="w-[32px] h-[32px] hidden"
                />{" "}
                {/* Placeholder for consistency if needed, but using Joystick below */}
                <Joystick size={32} color="#FD6F00" />
                <p className="text-center justify-start text-orange-500 text-2xl font-medium font-unbounded">
                  Gaming
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="flex gap-7">
          <div className="w-60 h-72 relative bg-gradient-to-b from-sky-500/30 to-sky-950/30 rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-sky-500/40 group cursor-default">
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
              <p className="self-stretch text-center justify-start text-sky-300 text-6xl font-semibold font-unbounded transition-transform duration-500 group-hover:scale-110">
                1.2+
              </p>
              <p className="text-center justify-start text-sky-500 text-2xl font-semibold font-unbounded transition-colors duration-500 group-hover:text-sky-400">
                Years
                <br />
                Experience
              </p>
            </div>
          </div>
          <div className="w-60 h-72 relative bg-gradient-to-b from-sky-500/30 to-sky-950/30 rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-sky-500/40 group cursor-default">
            <div className="w-full h-full flex flex-col justify-center items-center gap-6">
              <p className="self-stretch text-center justify-start text-sky-300 text-6xl font-semibold font-unbounded transition-transform duration-500 group-hover:scale-110">
                10+
              </p>
              <p className="text-center justify-start text-sky-500 text-2xl font-semibold font-unbounded transition-colors duration-500 group-hover:text-sky-400">
                Project
                <br />
                Complete
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto self-stretch h-80 p-10 relative bg-sky-500/30 rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden transition-all duration-500 hover:bg-sky-500/40 hover:shadow-[inset_0_0_40px_rgba(14,165,233,0.1)]">
        <p className="text-justify justify-start text-blue-400 text-base font-normal font-unbounded leading-8">
          I’m a passionate UI/UX Designer who loves creating digital experiences
          that are both visually appealing and easy to use. My approach blends
          creativity with functionality—ensuring every design not only looks
          great but also solves real user problems.
          <br />I specialize in wireframing, prototyping, and crafting clean,
          modern interfaces that guide users effortlessly. With a focus on
          usability, I aim to design products that feel intuitive from the first
          interaction. Collaboration is key to my process, and I enjoy working
          closely with teams to turn ideas into polished, user-centered
          solutions.
          <br />
          For me, design is more than aesthetics—it’s about creating seamless
          connections between people and technology.
        </p>
      </div>
    </div>
  );
};
