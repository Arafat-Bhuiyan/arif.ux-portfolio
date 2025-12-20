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

      {/* Hero Graphics Section */}
      <div className="relative mt-20 flex justify-center items-center">
        <div className="w-96 h-[520px] relative">
          <div className="w-96 h-96 left-0 top-[86px] absolute bg-sky-500/30 rounded-full border-2 border-sky-500/60" />
          <img
            className="w-96 h-auto left-[38px] top-0 absolute rounded-full"
            src={arif}
          />
        </div>

        {/* Badges - Positioned absolutely relative to the center */}

        {/* Figma - Top Left */}
        <div className="absolute top-10 left-[20%] xl:left-[30%] flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          <img src={figma} alt="Figma" className="w-6 h-6" />
          <span className="text-white font-unbounded text-sm">Figma</span>
        </div>

        {/* Photoshop - Top Right */}
        <div className="absolute top-10 right-[20%] xl:right-[30%] flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          <img src={photoshop} alt="Photoshop" className="w-6 h-6" />
          <span className="text-white font-unbounded text-sm">Photoshop</span>
        </div>

        {/* Miro - Middle Left */}
        <div className="absolute top-40 left-[10%] xl:left-[22%] flex items-center gap-3 px-5 py-3 bg-amber-500/10 backdrop-blur-md rounded-full border border-amber-500/20 shadow-lg">
          <img src={miro} alt="Miro" className="w-6 h-6" />
          <span className="text-white font-unbounded text-sm">Miro</span>
        </div>

        {/* Illustrator - Middle Right */}
        <div className="absolute top-40 right-[10%] xl:right-[22%] flex items-center gap-3 px-5 py-3 bg-orange-500/10 backdrop-blur-md rounded-full border border-orange-500/20 shadow-lg">
          <img src={illustrator} alt="Illustrator" className="w-6 h-6" />
          <span className="text-white font-unbounded text-sm">Illustrator</span>
        </div>

        {/* Balsamiq - Bottom Left */}
        <div className="absolute bottom-20 left-[15%] xl:left-[25%] flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg">
          <img src={balsamiq} alt="Balsamiq" className="w-6 h-6" />
          <span className="text-white font-unbounded text-sm">Balsamiq</span>
        </div>

        {/* Sketch - Bottom Right */}
        <div className="absolute bottom-20 right-[15%] xl:right-[25%] flex items-center gap-3 px-5 py-3 bg-orange-400/10 backdrop-blur-md rounded-full border border-orange-400/20 shadow-lg">
          <img src={sketch} alt="Sketch" className="w-6 h-6" />
          <span className="text-white font-unbounded text-sm">Sketch</span>
        </div>
      </div>
    </div>
  );
};
