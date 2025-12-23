import React from "react";
import miro from "../../assets/images/miro.svg";
import photoshop from "../../assets/images/photoshop.svg";
import figma from "../../assets/images/figma.svg";
import bgImg from "../../assets/images/blue-bg.png";
import bgImg2 from "../../assets/images/blue-bg2.png";
import card1logo from "../../assets/images/projects/card1logo.png";
import card1home from "../../assets/images/projects/card1home.png";
import card1topics from "../../assets/images/projects/card1topics.png";
import card2logo from "../../assets/images/projects/card2logo.png";
import card2home from "../../assets/images/projects/card2home.png";
import card2topics from "../../assets/images/projects/card2topics.png";
import card3logo from "../../assets/images/projects/card3logo.png";
import card3home from "../../assets/images/projects/card3home.png";
import card3topics from "../../assets/images/projects/card3topics.png";
import card4logo from "../../assets/images/projects/card4logo.png";
import card4home from "../../assets/images/projects/card4home.png";
import card4topics from "../../assets/images/projects/card4topics.png";
import card5logo from "../../assets/images/projects/card5logo.png";
import card5home from "../../assets/images/projects/card5home.png";
import card5topics from "../../assets/images/projects/card5topics.png";
import card6logo from "../../assets/images/projects/card6logo.png";
import card6home from "../../assets/images/projects/card6home.png";
import card6topics from "../../assets/images/projects/card6topics.png";
import card7logo from "../../assets/images/projects/card7logo.png";
import card7home from "../../assets/images/projects/card7home.png";
import card7topics from "../../assets/images/projects/card7topics.png";
import card8logo from "../../assets/images/projects/card8logo.svg";
import card8home from "../../assets/images/projects/card8home.png";
import card8topics from "../../assets/images/projects/card8topics.png";
import card9logo from "../../assets/images/projects/card9logo.png";
import card9home from "../../assets/images/projects/card9home.png";
import card9topics from "../../assets/images/projects/card9topics.png";
import card10logo from "../../assets/images/projects/card10logo.png";
import card10home from "../../assets/images/projects/card10home.png";
import card10topics from "../../assets/images/projects/card10topics.png";

import { Link } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Learnin GPT",
      logoTitle: "Learnin GPT",
      titleColor: "text-sky-500",
      containerBg: "bg-sky-500/30",
      innerBg: "bg-sky-700",
      logo: card1logo,
      image1: card1home,
      image2: card1topics,
    },
    {
      id: 2,
      title: "A1c Boost",
      logoTitle: "A1c Boost",
      titleColor: "text-yellow-400",
      containerBg: "bg-teal-600/60",
      innerBg: "bg-gradient-to-l from-sky-900 via-teal-600 to-cyan-950",
      logo: card2logo,
      image1: card2home,
      image2: card2topics,
    },
    {
      id: 3,
      title: "Stars",
      titleColor: "text-blue-600",
      containerBg: "bg-sky-900/60",
      innerBg: "bg-sky-800",
      logo: card3logo,
      image1: card3home,
      image2: card3topics,
    },
    {
      id: 4,
      title: "J-Mart",
      titleColor: "text-white",
      containerBg: "bg-gradient-to-l from-sky-950 to-sky-700",
      innerBg: "bg-blue-500",
      logo: card4logo,
      image1: card4home,
      image2: card4topics,
    },
    {
      id: 5,
      title: "Scan 2Home",
      titleColor: "text-red-500",
      containerBg: "bg-[#3D2542]",
      innerBg: "bg-[#7C3A54]",
      logo: card5logo,
      image1: card5home,
      image2: card5topics,
    },
    {
      id: 6,
      title: "A1c Boost Landing Page",
      logoTitle: "A1c Boost",
      titleColor: "text-yellow-400",
      containerBg: "bg-teal-600/60",
      innerBg: "bg-gradient-to-l from-sky-900 via-teal-600 to-cyan-950",
      logo: card6logo,
      image1: card6home,
      image2: card6topics,
    },
    {
      id: 7,
      title: "The Radical Commons",
      titleColor: "text-pink-900",
      containerBg: "bg-pink-500",
      innerBg: "bg-[#8E3F6F]",
      logo: card7logo,
      image1: card7home,
      image2: card7topics,
    },
    {
      id: 8,
      title: "Farda",
      logoTitle: "Farda",
      titleColor: "text-white",
      containerBg: "bg-emerald-700",
      innerBg: "bg-sky-600",
      logo: card8logo,
      image1: card8home,
      image2: card8topics,
    },
    {
      id: 9,
      title: "AI Real Estate Analysis",
      titleColor: "text-green-600",
      containerBg: "bg-gradient-to-r from-green-700 to-green-950",
      innerBg: "bg-green-800",
      logo: card9logo,
      image1: card9home,
      image2: card9topics,
    },
    {
      id: 10,
      title: "O-ber",
      titleColor: "text-white",
      containerBg: "bg-gradient-to-r from-sky-950 to-blue-500",
      innerBg: "bg-sky-700",
      logo: card10logo,
      image1: card10home,
      image2: card10topics,
    },
  ];

  return (
    <div className="pb-14">
      {/* Header */}
      <div className="mb-32 space-y-2">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded">
          Projects
        </p>
        <p className="text-center justify-start text-white text-2xl font-light font-unbounded">
          A showcase of creativity, precision, and passion.
        </p>
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Projects content will go here in the future */}
        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={project.id}
              className={`w-full self-stretch h-[28rem] px-6 py-6 ${project.containerBg} rounded-[50px] shadow-[0px_5px_40px_0px_rgba(0,0,0,0.25)] inline-flex flex-col justify-start items-start gap-2.5`}
            >
              <div className="w-full inline-flex justify-start items-center gap-20">
                {/* Left Section */}
                <div
                  className={`w-1/2 h-[404px] relative ${project.innerBg} rounded-[75px] overflow-hidden`}
                >
                  <img
                    className="w-[310px] h-[313px] left-[232px] top-[30px] absolute object-cover object-center z-0"
                    src={project.image2}
                    alt="Topics"
                  />
                  <img
                    className="w-[310px] h-[391px] left-[52px] top-[65px] absolute object-cover object-center z-10"
                    src={project.image1}
                    alt="Home"
                  />
                  <div className="left-[21px] top-[28px] absolute inline-flex justify-start items-center gap-2.5">
                    <img className="" src={project.logo} alt="logo" />
                    <p
                      className={`justify-start text-white text-xl font-bold font-unbounded ${project.titleColor}`}
                    >
                      {project.logoTitle}
                    </p>
                  </div>
                </div>

                {/* Right Section */}
                <div className="w-1/2 inline-flex flex-col justify-start items-start gap-7">
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
          ))}
        </div>

        <div className="flex justify-center py-20">
          <button
            type="button"
            className="w-[487px] h-20 bg-sky-500/30 rounded-[119px] outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-sm text-white text-2xl font-normal font-['Unbounded'] flex items-center justify-center hover:bg-sky-500/40 transition"
          >
            Explore All
          </button>
        </div>
      </div>
    </div>
  );
};
