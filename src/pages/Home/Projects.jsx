import React, { useState } from "react";
import miro from "../../assets/images/miro.svg";
import photoshop from "../../assets/images/photoshop.svg";
import figma from "../../assets/images/figma.svg";
import bgImg from "../../assets/images/blue-bg.png";
import bgImg2 from "../../assets/images/blue-bg2.png";
import innerCard1 from "../../assets/images/projects/innerCard1.png";
import innerCard2 from "../../assets/images/projects/innerCard2.png";
import innerCard3 from "../../assets/images/projects/innerCard3.png";
import innerCard4 from "../../assets/images/projects/innerCard4.png";
import innerCard5 from "../../assets/images/projects/innerCard5.png";
import innerCard6 from "../../assets/images/projects/innerCard6.png";
import innerCard7 from "../../assets/images/projects/innerCard7.png";
import innerCard8 from "../../assets/images/projects/innerCard8.png";
import innerCard9 from "../../assets/images/projects/innerCard9.png";
import innerCard10 from "../../assets/images/projects/innerCard10.png";

import { Link } from "lucide-react";

export const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);
  const projects = [
    {
      id: 1,
      title: "Learnin GPT",
      titleColor: "text-sky-500",
      containerBg: "bg-sky-500/30",
    },
    {
      id: 2,
      title: "A1c Boost",
      titleColor: "text-yellow-400",
      containerBg: "bg-teal-600/60",
    },
    {
      id: 3,
      title: "Stars",
      titleColor: "text-blue-600",
      containerBg: "bg-sky-900/60",
    },
    {
      id: 4,
      title: "J-Mart",
      titleColor: "text-white",
      containerBg: "bg-gradient-to-l from-sky-950 to-sky-700",
    },
    {
      id: 5,
      title: "Scan 2Home",
      titleColor: "text-red-500",
      containerBg: "bg-[#3D2542]",
    },
    {
      id: 6,
      title: "A1c Boost Landing Page",
      titleColor: "text-yellow-400",
      containerBg: "bg-teal-600/60",
    },
    {
      id: 7,
      title: "The Radical Commons",
      titleColor: "text-pink-900",
      containerBg: "bg-pink-500",
    },
    {
      id: 8,
      title: "Farda",
      titleColor: "text-white",
      containerBg: "bg-emerald-700",
    },
    {
      id: 9,
      title: "AI Real Estate Analysis",
      titleColor: "text-green-600",
      containerBg: "bg-gradient-to-r from-green-700 to-green-950",
    },
    {
      id: 10,
      title: "O-ber",
      titleColor: "text-white",
      containerBg: "bg-gradient-to-r from-sky-950 to-blue-500",
    },
  ];
  const innerCards = [
    innerCard1,
    innerCard2,
    innerCard3,
    innerCard4,
    innerCard5,
    innerCard6,
    innerCard7,
    innerCard8,
    innerCard9,
    innerCard10,
  ];

  return (
    <div id="projects" className="py-14 relative px-4 sm:px-6 lg:px-8">
      {/* BG Image Left - Responsive Visibility */}
      <div
        className="absolute left-0 top-0 w-full sm:w-[941px] h-[894px] z-0 opacity-20 sm:opacity-100 pointer-events-none"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left center",
        }}
      />

      {/* Header */}
      <div className="relative mb-12 sm:mb-20 lg:mb-32 z-10">
        <div className="relative space-y-4">
          <p className="text-center text-sky-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded">
            Projects
          </p>
          <p className="text-center text-white text-base sm:text-xl md:text-2xl font-light font-unbounded max-w-2xl mx-auto">
            A showcase of creativity, precision, and passion.
          </p>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 bg-[#002152] rounded-full blur-[80px] sm:blur-[150px] z-0 h-1/2 w-full" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="space-y-8 sm:space-y-12">
            {projects.slice(0, visibleCount).map((project, idx) => (
              <div
                key={project.id}
                className="group relative w-full h-auto lg:h-[28rem] rounded-[30px] sm:rounded-[50px] shadow-[0px_5px_40px_0px_rgba(0,0,0,0.25)] overflow-hidden z-10 transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.015] hover:shadow-[0px_20px_60px_0px_rgba(0,0,0,0.3)]"
              >
                {/* Background Image/Overlay */}
                <div className="absolute inset-0 z-0 bg-black/5 group-hover:bg-black/0 transition-colors duration-500" />
                <div
                  className={`absolute inset-0 z-0 transition-opacity duration-500 ${project.containerBg}`}
                />

                {/* Content Container */}
                <div className="relative z-10 w-full h-full p-5 sm:p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row justify-start items-center gap-8 lg:gap-12 xl:gap-20 h-full">
                    {/* Project Image */}
                    <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-full rounded-[25px] sm:rounded-[40px] lg:rounded-[75px] overflow-hidden flex-shrink-0">
                      <img
                        src={innerCards[project.id - 1]}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                      />
                    </div>

                    {/* Project Details */}
                    <div className="w-full lg:w-1/2 flex flex-col justify-between items-center lg:items-start gap-6 sm:gap-8 h-full py-2">
                      <div className="flex flex-col justify-start items-center lg:items-start gap-4 sm:gap-6 w-full">
                        <div className="flex flex-col justify-start items-center lg:items-start gap-2 sm:gap-3">
                          <p
                            className={`text-center lg:text-left text-2xl sm:text-3xl md:text-4xl font-medium font-unbounded transition-all duration-500 group-hover:translate-x-2 ${project.titleColor}`}
                          >
                            {project.title}
                          </p>
                          <p className="text-white text-lg sm:text-xl md:text-2xl font-normal font-unbounded">
                            Worked on
                          </p>
                        </div>

                        {/* Detail Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 w-full">
                          <div className="px-6 py-2 bg-sky-500/30 rounded-full outline outline-1 sm:outline-2 outline-offset-[-1px] outline-sky-500/60 transition-all duration-300 hover:bg-sky-500/50">
                            <span className="text-white text-xs sm:text-sm md:text-base font-normal font-unbounded whitespace-nowrap">
                              Website
                            </span>
                          </div>
                          <div className="px-6 py-2 bg-sky-500/30 rounded-full outline outline-1 sm:outline-2 outline-offset-[-1px] outline-sky-500/60 transition-all duration-300 hover:bg-sky-500/50">
                            <span className="text-white text-xs sm:text-sm md:text-base font-normal font-unbounded whitespace-nowrap">
                              Admin Panel
                            </span>
                          </div>
                        </div>

                        {/* Tech Stack Header */}
                        <h2 className="text-white text-lg sm:text-xl font-normal font-unbounded mt-2">
                          Technology I have used
                        </h2>

                        {/* Tech Badges */}
                        <div className="flex flex-wrap justify-center lg:justify-start items-center gap-3 w-full">
                          {[
                            { img: figma, name: "Figma" },
                            { img: miro, name: "Miro" },
                            { img: photoshop, name: "Photoshop", size: "xs" },
                          ].map((tech, i) => (
                            <div
                              key={i}
                              className="px-4 py-2 bg-white rounded-full flex items-center gap-2 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                            >
                              <img
                                src={tech.img}
                                alt={tech.name}
                                className="w-4 h-4 sm:w-5 sm:h-5"
                              />
                              <span
                                className={`text-black ${tech.size === "xs" ? "text-[10px] sm:text-xs" : "text-xs sm:text-sm"} font-medium font-unbounded`}
                              >
                                {tech.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Call to Action Button */}
                      <div className="w-full sm:max-w-md h-12 sm:h-14 md:h-16 relative bg-sky-500 rounded-full shadow-lg overflow-hidden transition-all duration-300 hover:bg-sky-400 hover:scale-[1.02] cursor-pointer group/btn active:scale-95">
                        <div className="w-full h-full flex justify-center items-center gap-3 transition-transform duration-300 group-hover/btn:translate-x-1">
                          <Link
                            size={24}
                            className="text-white transition-transform duration-300 group-hover/btn:rotate-12"
                          />
                          <span className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-unbounded">
                            Go to Design
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Explore More Button Section */}
          <div className="relative flex justify-center py-10 sm:py-20 overflow-hidden px-4">
            {/* BG Image Right Overlay */}
            <div
              className="absolute right-[5%] top-1/2 -translate-y-1/2 w-full sm:w-[869px] h-[300px] sm:h-[500px] z-0 opacity-10 pointer-events-none"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
                backgroundPosition: "right center",
              }}
            />
            {visibleCount < projects.length && (
              <button
                type="button"
                onClick={() => setVisibleCount(projects.length)}
                className="w-full sm:w-[487px] h-14 sm:h-20 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-sm text-white text-lg sm:text-2xl font-normal font-unbounded flex items-center justify-center hover:bg-sky-500/40 transition-all duration-300 hover:scale-105 active:scale-95 z-10"
              >
                Explore All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
