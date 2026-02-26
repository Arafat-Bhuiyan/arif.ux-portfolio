import figma from "../../assets/images/skills/figma.png";
import ap from "../../assets/images/skills/ap.png";
import xd from "../../assets/images/skills/xd.png";
import ps from "../../assets/images/skills/ps.png";
import ai from "../../assets/images/skills/ai.png";
import skillsBg from "../../assets/images/skills/skills.png";

export const Skills = () => {
  return (
    <div className="pt-10 md:pt-20 pb-10 md:pb-14 px-4">
      {/* Header Section */}
      <div className="mb-8 md:mb-20 space-y-2">
        <p className="text-center text-sky-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded">
          Skills
        </p>
        <p className="text-center text-white text-base sm:text-xl md:text-2xl font-light font-unbounded">
          Mastery is earned, never given.{" "}
        </p>
      </div>

      {/* Skills Icons Section - Responsive Flex Wrap */}
      <div className="flex flex-wrap items-center justify-center gap-8 md:gap-10 lg:justify-between max-w-7xl mx-auto px-4 md:px-10">
        <div className="group relative">
          <img
            src={figma}
            alt="Figma"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl object-contain"
          />
        </div>
        <div className="group relative">
          <img
            src={ap}
            alt="Adobe Photoshop"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl object-contain"
          />
        </div>
        <div className="group relative">
          <img
            src={xd}
            alt="Adobe XD"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl object-contain"
          />
        </div>
        <div className="group relative">
          <img
            src={ps}
            alt="Adobe Photoshop"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl object-contain"
          />
        </div>
        <div className="group relative">
          <img
            src={ai}
            alt="Adobe Illustrator"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-auto md:h-auto transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer drop-shadow-md hover:drop-shadow-xl object-contain"
          />
        </div>
      </div>

      {/* Skills Background Graphic - Responsive Width */}
      <div className="mt-10 md:mt-16 flex items-center justify-center">
        <img
          src={skillsBg}
          alt="Skills Background"
          className="w-full max-w-[1181px] h-auto object-contain"
        />
      </div>
    </div>
  );
};
