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
import arif from "../../assets/images/arif2.png";

export const Welcome = () => {
  return (
    <div className="pt-28 pb-5">
      {/* Welcome Section */}
      <div className="container mx-auto flex items-center justify-center gap-2.5">
        <img src={hello} alt="" />
        <h1 className="text-white text-5xl font-semibold font-unbounded">
          Hello! I’m <span className="text-sky-500">Ariful Islam</span>
        </h1>
      </div>
      {/* Typewriter Section */}
      <div className="pt-5 pb-9 flex items-center justify-center gap-2.5">
        <p className="text-center text-white text-3xl font-light font-unbounded">
          A
        </p>
        <p className="text-center text-sky-500 text-3xl font-medium font-unbounded">
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
      <div className="flex items-center justify-center gap-4">
        <p className="text-white text-2xl font-light font-unbounded">with</p>
        <div className="px-3.5 py-1.5 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-white/60 inline-flex justify-center items-center gap-2.5">
          <p className="text-white text-2xl font-normal font-unbounded">
            1.2+ Years
          </p>
        </div>
        <p className="text-white text-2xl font-light font-unbounded">
          Experience
        </p>
      </div>
      {/* Button Section */}
      <div className="flex items-center justify-center gap-4 pt-10">
        <button className="w-52 h-14 bg-sky-500/30 hover:bg-sky-500 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-sm overflow-hidden inline-flex justify-center items-center gap-2">
          <img src={download} alt="" />
          <p className="text-white text-2xl font-normal font-unbounded">
            Resume
          </p>
        </button>
        <button className="w-52 h-14 bg-sky-500 hover:bg-sky-600 rounded-full overflow-hidden inline-flex justify-center items-center gap-2">
          <p className="text-white text-2xl font-normal font-unbounded">
            Hire Me
          </p>
        </button>
      </div>

      <div className="relative mt-4 h-[600px] flex justify-center items-center">
        {/* Background Glow */}
        <div className="absolute w-[600px] h-[600px] bg-sky-900/20 rounded-full blur-[100px] -z-10" />

        {/* Profile Image - Centered */}
        <div className="relative z-10 w-96 h-[520px] flex justify-center items-center">
          <div className="absolute w-96 h-96 top-[60px] bg-sky-500/30 rounded-full border-2 border-sky-500/60" />
          <img
            className="relative w-96 h-auto top-[-95px] rounded-full mask-image-gradient"
            src={arif}
            alt="Ariful Islam"
          />
        </div>

        {/* Badges - All Absolute */}

        {/* Figma - Top Left */}
        <div className="absolute top-[10%] left-[10%] xl:left-[28%] w-48 h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-3 shadow-lg">
          <img className="w-7 h-7" src={figma} alt="Figma" />
          <span className="text-white text-xl font-normal font-unbounded">
            Figma
          </span>
        </div>

        {/* Photoshop - Top Right */}
        <div className="absolute top-[10%] right-[10%] xl:right-[28%] w-48 h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-3 shadow-lg">
          <img className="w-7 h-7" src={photoshop} alt="Photoshop" />
          <span className="text-white text-xl font-normal font-unbounded">
            Photoshop
          </span>
        </div>

        {/* Miro - Mid Left */}
        <div className="absolute top-[45%] left-[2%] xl:left-[20%] w-48 h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-3 shadow-lg border border-amber-500/20">
          <img className="w-6 h-6" src={miro} alt="Miro" />
          <span className="text-white text-xl font-normal font-unbounded">
            Miro
          </span>
        </div>

        {/* Illustrator - Mid Right */}
        <div className="absolute top-[45%] right-[2%] xl:right-[20%] w-48 h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-3 shadow-lg border border-orange-500/20">
          <img className="w-6 h-6" src={illustrator} alt="Illustrator" />
          <span className="text-white text-xl font-normal font-unbounded">
            Illustrator
          </span>
        </div>

        {/* Balsamiq - Bottom Left */}
        <div className="absolute bottom-[15%] left-[10%] xl:left-[28%] w-48 h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-3 shadow-lg border border-white/10">
          <img className="w-6 h-6" src={balsamiq} alt="Balsamiq" />
          <span className="text-white text-xl font-normal font-unbounded">
            Balsamiq
          </span>
        </div>

        {/* Sketch - Bottom Right */}
        <div className="absolute bottom-[15%] right-[10%] xl:right-[28%] w-48 h-14 bg-sky-500/30 rounded-full outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-sm flex justify-center items-center gap-3 shadow-lg">
          <img className="w-7 h-7" src={sketch} alt="Sketch" />
          <span className="text-white text-xl font-normal font-unbounded">
            Sketch
          </span>
        </div>
      </div>
    </div>
  );
};
