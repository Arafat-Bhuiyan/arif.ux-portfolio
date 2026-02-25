import React from "react";
import headphone from "../../assets/images/headphone.svg";
import travel from "../../assets/images/travel.svg";
import riding from "../../assets/images/riding.svg";
import money from "../../assets/images/money.svg";
import { Camera, Joystick } from "lucide-react";
import service6 from "../../assets/images/services/service6.png";

export const About = () => {
  return (
    <div id="about" className="pb-14 px-4 sm:px-6 lg:px-8">
      <div className="mb-12 sm:mb-20 space-y-2">
        <p className="text-center text-sky-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded">
          About Me
        </p>
        <p className="text-center text-white text-lg sm:text-xl md:text-2xl font-light font-unbounded px-4">
          Good design is invisible—great design is unforgettable.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-between max-w-7xl mx-auto gap-12 lg:gap-10 pb-9">
        {/* Left Section - Interests */}
        <div className="w-full lg:w-3/5">
          <p className="text-center lg:text-left text-sky-500 text-2xl sm:text-3xl md:text-4xl font-medium font-unbounded">
            Lifestyle & Personal Interests
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mt-8 sm:mt-11">
            {[
              {
                icon: headphone,
                text: "Listening Music",
                color: "text-sky-400",
                from: "from-sky-400/30",
                to: "to-indigo-600/30",
                shadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]",
              },
              {
                icon: travel,
                text: "Traveling",
                color: "text-orange-500",
                from: "from-orange-500/30",
                to: "to-sky-900/30",
                shadow: "hover:shadow-[0_0_20px_rgba(249,115,22,0.2)]",
              },
              {
                icon: riding,
                text: "Riding",
                color: "text-slate-500",
                from: "from-blue-800/30",
                to: "to-orange-700/30",
                shadow: "hover:shadow-[0_0_20px_rgba(30,64,175,0.2)]",
              },
              {
                icon: money,
                text: "Money",
                color: "text-amber-500",
                from: "from-amber-600/30",
                to: "to-sky-500/30",
                shadow: "hover:shadow-[0_0_20_px_rgba(217,119,6,0.2)]",
              },
              {
                lucide: Camera,
                text: "Photography",
                color: "text-sky-400",
                from: "from-sky-400/30",
                to: "to-indigo-600/30",
                shadow: "hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]",
                iconColor: "#3BAACF",
              },
              {
                lucide: Joystick,
                text: "Gaming",
                color: "text-orange-500",
                from: "from-cyan-400/30",
                to: "to-orange-200/30",
                shadow: "hover:shadow-[0_0_20px_rgba(34,211,238,0.2)]",
                iconColor: "#FD6F00",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`w-full h-14 relative bg-gradient-to-r ${item.from} ${item.to} rounded-[120px] overflow-hidden transition-all duration-300 hover:scale-[1.03] ${item.shadow} cursor-default`}
              >
                <div className="w-full h-full flex justify-center items-center gap-2.5 px-4">
                  {item.lucide ? (
                    <item.lucide
                      size={28}
                      color={item.iconColor}
                      className="flex-shrink-0"
                    />
                  ) : (
                    <img
                      src={item.icon}
                      alt={item.text}
                      className="w-7 h-7 flex-shrink-0"
                    />
                  )}
                  <p
                    className={`text-center ${item.color} text-lg sm:text-xl font-medium font-unbounded truncate`}
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Section - Experience Cards */}
        <div className="w-full lg:w-auto flex flex-col sm:flex-row gap-6 sm:gap-7 justify-center lg:justify-end">
          {[
            { value: "1.2+", label: "Years\nExperience" },
            { value: "10+", label: "Project\nComplete" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-full sm:w-60 h-64 sm:h-72 relative bg-gradient-to-b from-sky-500/30 to-sky-950/30 rounded-[50px] sm:rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden transition-all duration-500 hover:scale-105 hover:bg-sky-500/40 group cursor-default shadow-lg"
            >
              <div className="w-full h-full flex flex-col justify-center items-center gap-4 sm:gap-6">
                <p className="self-stretch text-center text-sky-300 text-5xl sm:text-6xl font-semibold font-unbounded transition-transform duration-500 group-hover:scale-110">
                  {item.value}
                </p>
                <p className="text-center text-sky-500 text-xl sm:text-2xl font-semibold font-unbounded transition-colors duration-500 group-hover:text-sky-400">
                  {item.label.split("\n").map((line, i) => (
                    <React.Fragment key={i}>
                      {line}
                      {i === 0 && <br />}
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto self-stretch h-auto p-6 sm:p-10 mt-8 relative bg-sky-500/30 rounded-[40px] sm:rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden transition-all duration-500 hover:bg-sky-500/40 hover:shadow-[inset_0_0_40px_rgba(14,165,233,0.1)]">
        <p className="text-justify lg:text-left text-blue-400 text-sm sm:text-base font-normal font-unbounded leading-relaxed sm:leading-8">
          I’m a passionate UI/UX Designer who loves creating digital experiences
          that are both visually appealing and easy to use. My approach blends
          creativity with functionality—ensuring every design not only looks
          great but also solves real user problems.
          <br />
          <br />
          I specialize in wireframing, prototyping, and crafting clean, modern
          interfaces that guide users effortlessly. With a focus on usability, I
          aim to design products that feel intuitive from the first interaction.
          Collaboration is key to my process, and I enjoy working closely with
          teams to turn ideas into polished, user-centered solutions.
          <br />
          <br />
          For me, design is more than aesthetics—it’s about creating seamless
          connections between people and technology.
        </p>
      </div>
    </div>
  );
};
