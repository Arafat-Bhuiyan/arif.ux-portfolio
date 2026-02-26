import React from "react";
import hello from "../../assets/images/hello.svg";
import download from "../../assets/images/download.svg";
import { Typewriter } from "react-simple-typewriter";
import figma from "../../assets/images/figma.svg";
import illustrator from "../../assets/images/illustrator.svg";
import miro from "../../assets/images/miro.svg";
import photoshop from "../../assets/images/photoshop.svg";
import sketch from "../../assets/images/sketch.png";
import balsamiq from "../../assets/images/balsamiq.png";
import arif from "../../assets/images/arif.png";
import bgImg from "../../assets/images/blue-bg.png";

export const Welcome = () => {
  return (
    <div className="pb-5 relative px-4 sm:px-0">
      <div
        className="container mx-auto rounded-3xl p-6 sm:p-8 lg:p-12"
        style={{
          backgroundImage: `url(${bgImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Welcome Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 text-center">
          <img src={hello} alt="" className="w-8 h-8 sm:w-auto sm:h-auto" />
          <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold font-unbounded">
            Hello! I’m <span className="text-sky-500">Ariful Islam</span>
          </h1>
        </div>

        {/* Typewriter Section */}
        <div className="pt-3 sm:pt-5 pb-6 sm:pb-9 flex items-center justify-center gap-2 text-center">
          <p className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-light font-unbounded">
            A
          </p>
          <p className="text-sky-500 text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium font-unbounded">
            <Typewriter
              words={[
                "UI/UX Designer...",
                "Creating Ideas...",
                "Experimenting...",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </p>
        </div>

        {/* Experience Section */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4">
          <p className="text-white text-base sm:text-xl md:text-2xl font-light font-unbounded">
            with
          </p>
          <div className="px-3 sm:px-4 py-1 sm:py-2 bg-sky-500/30 rounded-full outline outline-1 sm:outline-2 outline-offset-[-1px] sm:outline-offset-[-2px] outline-white/60 inline-flex justify-center items-center gap-2">
            <p className="text-white text-base sm:text-xl md:text-2xl font-normal font-unbounded whitespace-nowrap">
              1.2+ Years
            </p>
          </div>
          <p className="text-white text-base sm:text-xl md:text-2xl font-light font-unbounded">
            Experience
          </p>
        </div>

        {/* Button Section */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 sm:pt-10">
          <button className="group w-full max-w-[200px] h-12 sm:h-14 bg-sky-500/30 hover:bg-sky-500/40 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-sm overflow-hidden inline-flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95">
            <img
              src={download}
              alt=""
              className="w-5 h-5 sm:w-auto sm:h-auto transition-transform group-hover:-translate-y-1"
            />
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-unbounded">
              Resume
            </p>
          </button>
          <button className="w-full max-w-[200px] h-12 sm:h-14 bg-sky-500 hover:bg-sky-600 rounded-full overflow-hidden inline-flex justify-center items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95 hover:shadow-[0_0_20px_rgba(14,165,233,0.4)]">
            <p className="text-white text-lg sm:text-xl lg:text-2xl font-normal font-unbounded">
              Hire Me
            </p>
          </button>
        </div>

        {/* Profile & Badges Section */}
        <div className="relative mt-8 sm:mt-12 h-[500px] sm:h-[600px] flex flex-col items-center justify-center overflow-hidden sm:overflow-visible">
          {/* Background Glow */}
          <div className="absolute w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-sky-900/20 rounded-full blur-[60px] sm:blur-[100px] -z-10 animate-pulse" />

          {/* Profile Image Group */}
          <div className="relative z-10 w-64 sm:w-80 md:w-96 h-auto flex justify-center items-center group mt-10">
            <div className="absolute w-64 sm:w-80 md:w-96 h-64 sm:h-80 md:h-96 top-[-10px] sm:top-[-20px] md:top-[-40px] bg-sky-500/30 rounded-full border-2 border-sky-500/60 transition-all duration-500 group-hover:scale-110 group-hover:bg-sky-500/40" />
            <img
              className="relative w-full h-auto mt-[-50px] sm:mt-[-70px] md:mt-[-95px] rounded-full mask-image-gradient transition-all duration-500 group-hover:scale-[1.02] filter drop-shadow-2xl"
              src={arif}
              alt="Ariful Islam"
            />
          </div>

          {/* Absolute Floating Badges - Shown on Tablet/Desktop, Grid on Mobile */}
          <div className="hidden md:block">
            {/* Figma */}
            <div className="animate-float absolute top-[5%] left-[5%] lg:left-[10%] xl:left-[22%] w-40 lg:w-48 h-12 lg:h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-2 sm:gap-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-sky-500/50 cursor-default">
              <img className="w-5 h-5 lg:w-7 lg:h-7" src={figma} alt="Figma" />
              <span className="text-white text-base lg:text-xl font-normal font-unbounded">
                Figma
              </span>
            </div>

            {/* Photoshop */}
            <div className="animate-float-delayed absolute top-[5%] right-[5%] lg:right-[10%] xl:right-[22%] w-40 lg:w-48 h-12 lg:h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-2 sm:gap-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-sky-500/50 cursor-default">
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src={photoshop}
                alt="Photoshop"
              />
              <span className="text-white text-base lg:text-xl font-normal font-unbounded">
                Photoshop
              </span>
            </div>

            {/* Miro */}
            <div className="animate-float-delayed absolute top-[40%] left-[0%] lg:left-[5%] xl:left-[15%] w-36 lg:w-48 h-12 lg:h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-2 sm:gap-3 shadow-lg border border-amber-500/20 transition-all duration-300 hover:scale-110 hover:bg-sky-500/50 cursor-default">
              <img className="w-5 h-5 lg:w-6 lg:h-6" src={miro} alt="Miro" />
              <span className="text-white text-base lg:text-xl font-normal font-unbounded">
                Miro
              </span>
            </div>

            {/* Illustrator */}
            <div className="animate-float absolute top-[40%] right-[0%] lg:right-[5%] xl:right-[15%] w-36 lg:w-48 h-12 lg:h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-2 sm:gap-3 shadow-lg border border-orange-500/20 transition-all duration-300 hover:scale-110 hover:bg-sky-500/50 cursor-default">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src={illustrator}
                alt="Illustrator"
              />
              <span className="text-white text-base lg:text-xl font-normal font-unbounded">
                Illustrator
              </span>
            </div>

            {/* Balsamiq */}
            <div className="animate-float absolute bottom-[10%] left-[5%] lg:left-[10%] xl:left-[22%] w-40 lg:w-48 h-12 lg:h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-2 sm:gap-3 shadow-lg border border-white/10 transition-all duration-300 hover:scale-110 hover:bg-sky-500/50 cursor-default">
              <img
                className="w-5 h-5 lg:w-6 lg:h-6"
                src={balsamiq}
                alt="Balsamiq"
              />
              <span className="text-white text-base lg:text-xl font-normal font-unbounded">
                Balsamiq
              </span>
            </div>

            {/* Sketch */}
            <div className="animate-float-delayed absolute bottom-[10%] right-[5%] lg:right-[10%] xl:right-[22%] w-40 lg:w-48 h-12 lg:h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-2 sm:gap-3 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-sky-500/50 cursor-default">
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src={sketch}
                alt="Sketch"
              />
              <span className="text-white text-base lg:text-xl font-normal font-unbounded">
                Sketch
              </span>
            </div>
          </div>

          {/* Mobile Badge View (Handled differently to ensure no overlap) */}
          <div className="md:hidden mt-12 grid grid-cols-2 gap-3 w-full max-w-[320px] px-4">
            {[
              { img: figma, name: "Figma" },
              { img: photoshop, name: "Photoshop" },
              { img: miro, name: "Miro" },
              { img: illustrator, name: "Illustrator" },
            ].map((item, id) => (
              <div
                key={id}
                className="flex-1 bg-sky-500/20 rounded-xl p-3 flex items-center justify-center gap-2 outline outline-1 outline-sky-500/30 backdrop-blur-sm"
              >
                <img src={item.img} alt={item.name} className="w-5 h-5" />
                <span className="text-white text-xs font-unbounded">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
