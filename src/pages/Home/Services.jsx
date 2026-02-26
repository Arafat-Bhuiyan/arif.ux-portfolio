import React from "react";
import service1 from "../../assets/images/services/service1.png";
import service2 from "../../assets/images/services/service2.png";
import service3 from "../../assets/images/services/service3.png";
import service4 from "../../assets/images/services/service4.png";
import service5 from "../../assets/images/services/service5.png";
import service6 from "../../assets/images/services/service6.png";

export const Services = () => {
  return (
    <div id="services" className="pt-10 md:pt-20 pb-10 md:pb-14 px-4">
      {/* Header Section */}
      <div className="mb-10 md:mb-20 space-y-2">
        <p className="text-center text-sky-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded">
          Services
        </p>
        <p className="text-center text-white text-base sm:text-xl md:text-2xl font-light font-unbounded max-w-3xl mx-auto px-4">
          Designs that connect users and brands effortlessly.
        </p>
      </div>

      <div className="relative">
        {/* Background Glow Effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-[#002152] rounded-full blur-[80px] md:blur-[150px] z-0" />

        {/* Services Cards Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 z-10 relative px-2 md:px-10">
          <img
            src={service1}
            alt="Service 1"
            className="w-full h-auto transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
          <img
            src={service2}
            alt="Service 2"
            className="w-full h-auto transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
          <img
            src={service3}
            alt="Service 3"
            className="w-full h-auto transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
          <img
            src={service4}
            alt="Service 4"
            className="w-full h-auto transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
          <img
            src={service5}
            alt="Service 5"
            className="w-full h-auto transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
          <img
            src={service6}
            alt="Service 6"
            className="w-full h-auto transition-all duration-500 hover:scale-[1.03] hover:-translate-y-2 cursor-pointer drop-shadow-lg hover:drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};
