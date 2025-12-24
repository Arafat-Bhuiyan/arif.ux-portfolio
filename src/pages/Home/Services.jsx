import React from "react";
import service1 from "../../assets/images/services/service1.png";
import service2 from "../../assets/images/services/service2.png";
import service3 from "../../assets/images/services/service3.png";
import service4 from "../../assets/images/services/service4.png";
import service5 from "../../assets/images/services/service5.png";
import service6 from "../../assets/images/services/service6.png";

export const Services = () => {
  return (
    <div id="services" className="pb-14">
      <div className="mb-20 space-y-2">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded">
          Services
        </p>
        <p className="text-center justify-start text-white text-2xl font-light font-unbounded">
          Designs that connect users and brands effortlessly.
        </p>
      </div>
      <div className="relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#002152] rounded-full blur-[150px] z-0" />
        {/* Services cards */}
        <div className="max-w-7xl mx-auto grid grid-cols-3 gap-5 z-10 relative">
          <img src={service1} alt="Service 1" />
          <img src={service2} alt="Service 2" />
          <img src={service3} alt="Service 3" />
          <img src={service4} alt="Service 4" />
          <img src={service5} alt="Service 5" />
          <img src={service6} alt="Service 6" />
        </div>
      </div>
    </div>
  );
};
