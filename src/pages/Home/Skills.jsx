import figma from "../../assets/images/skills/figma.png";
import ap from "../../assets/images/skills/ap.png";
import xd from "../../assets/images/skills/xd.png";
import ps from "../../assets/images/skills/ps.png";
import ai from "../../assets/images/skills/ai.png";
import skillsBg from "../../assets/images/skills/skills.png";

export const Skills = () => {
  return (
    <div className="pt-20 pb-14">
      <div className="mb-20 space-y-2">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded">
          Skills
        </p>
        <p className="text-center justify-start text-white text-2xl font-light font-unbounded">
          Mastery is earned, never given.{" "}
        </p>
      </div>
      <div className="flex items-center justify-between max-w-7xl mx-auto px-10">
        <div className="group relative">
          <img
            src={figma}
            alt="Figma"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl"
          />
        </div>
        <div className="group relative">
          <img
            src={ap}
            alt="Adobe Photoshop"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl"
          />
        </div>
        <div className="group relative">
          <img
            src={xd}
            alt="Adobe XD"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl"
          />
        </div>
        <div className="group relative">
          <img
            src={ps}
            alt="Adobe Photoshop"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl"
          />
        </div>
        <div className="group relative">
          <img
            src={ai}
            alt="Adobe Illustrator"
            className="transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl"
          />
        </div>
      </div>

      <div className="flex items-center justify-center">
        <img
          src={skillsBg}
          alt="Skills Background"
          className="w-[1181px] h-[439px]"
        />
      </div>
    </div>
  );
};
