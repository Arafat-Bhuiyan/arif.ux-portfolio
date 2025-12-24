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
    <div id="projects" className="py-14 relative">
      {/* BG Image Left */}
      <div
        className="absolute left-0 top-0 w-[941px] h-[894px] z-0"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "left center",
        }}
      />

      {/* Header */}
      <div className="relative mb-32 z-10">
        {/* Header Content */}
        <div className="relative space-y-2">
          <p className="text-center text-sky-500 text-5xl font-semibold font-unbounded">
            Projects
          </p>
          <p className="text-center text-white text-2xl font-light font-unbounded">
            A showcase of creativity, precision, and passion.
          </p>
        </div>
      </div>
      <div className="relative w-full">
        <div className="absolute inset-0 bg-[#002152] rounded-full blur-[150px] z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Projects content will go here in the future */}
          <div className="space-y-12">
            {projects.slice(0, visibleCount).map((project, idx) => (
              <div
                key={project.id}
                className="relative w-full h-[28rem] rounded-[50px] shadow-[0px_5px_40px_0px_rgba(0,0,0,0.25)] overflow-hidden z-10"
              >
                {/* Background Image */}
                <div className="absolute inset-0 z-0" />
                {/* Overlay Color/Gradient */}
                <div
                  className={`absolute inset-0 z-0 ${project.containerBg}`}
                />

                {/* Content */}
                <div className="relative z-10 w-full h-full px-6 py-6 inline-flex flex-col justify-start items-start gap-2.5">
                  <div className="w-full inline-flex justify-start items-center gap-20">
                    {/* Left Image */}
                    <div className="w-1/2 h-[404px] rounded-[75px] overflow-hidden">
                      <img
                        src={innerCards[project.id - 1]}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Right Section */}
                    <div className="w-1/2 inline-flex flex-col justify-start items-start gap-7 z-10">
                      <div className="self-stretch flex flex-col justify-start items-start gap-5">
                        <div className="w-96 flex flex-col justify-start items-start gap-5">
                          <div className="self-stretch flex flex-col justify-start items-start gap-5">
                            <div className="flex flex-col justify-start items-start gap-5">
                              <p
                                className={`justify-start text-4xl font-medium font-unbounded ${project.titleColor}`}
                              >
                                {project.title}
                              </p>
                              <p className="justify-start text-white text-2xl font-normal font-unbounded">
                                Worked on
                              </p>
                            </div>
                            <div className="self-stretch inline-flex justify-start items-center gap-3.5">
                              <div className="w-36 h-12 relative bg-sky-500/30 rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-white text-base font-normal font-unbounded">
                                  Website
                                </div>
                              </div>
                              <div className="w-48 h-12 relative bg-sky-500/30 rounded-[75px] outline outline-2 outline-offset-[-2px] outline-sky-500/60 overflow-hidden">
                                <div className="w-full h-full flex items-center justify-center text-white text-base font-normal font-unbounded">
                                  Admin Panel
                                </div>
                              </div>
                            </div>
                          </div>
                          <h1 className="self-stretch justify-start text-white text-2xl font-normal font-unbounded">
                            Technology I have used
                          </h1>
                        </div>
                        <div className="self-stretch inline-flex justify-start items-center gap-2.5">
                          <div className="w-36 h-11 relative bg-white rounded-[120px] overflow-hidden">
                            <div className="left-[17px] top-[10px] absolute inline-flex justify-start items-center gap-[5px]">
                              <img src={figma} alt="" />
                              <p className="text-center justify-start text-black text-base font-normal font-unbounded">
                                Figma
                              </p>
                            </div>
                          </div>
                          <div className="w-36 h-11 relative bg-white rounded-[120px] overflow-hidden">
                            <div className="left-[28px] top-[10px] absolute inline-flex justify-start items-center gap-[5px]">
                              <img src={miro} alt="" />
                              <p className="text-center justify-start text-black text-base font-normal font-unbounded">
                                Miro
                              </p>
                            </div>
                          </div>
                          <div className="w-36 h-11 relative bg-white rounded-[120px] overflow-hidden">
                            <div className="left-[15px] top-[10px] absolute inline-flex justify-start items-center gap-[5px]">
                              <img src={photoshop} alt="" />
                              <p className="text-center justify-start text-black text-xs font-normal font-unbounded">
                                Photoshop
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-[439px] self-stretch h-16 relative bg-sky-500 rounded-[119px] shadow-[0px_0px_40px_0px_rgba(0,0,0,0.25)] overflow-hidden">
                        <div className="left-[109px] top-[19px] absolute inline-flex justify-start items-center gap-2.5">
                          <Link size={28} color="#ffffff" />
                          <div className="text-center justify-start text-white text-2xl font-normal font-unbounded">
                            Go to Design
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex justify-center py-20 overflow-hidden">
            {/* BG Image Right */}
            <div
              className="absolute right-[5%] top-[-13%] -translate-y-1/2 w-[869px] h-[500px] z-0"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "right center",
              }}
            />
            {visibleCount < projects.length && (
              <button
                type="button"
                onClick={() => setVisibleCount(projects.length)}
                className="w-[487px] h-20 bg-sky-500/30 rounded-[119px] outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-sm text-white text-2xl font-normal font-['Unbounded'] flex items-center justify-center hover:bg-sky-500/40 transition"
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
