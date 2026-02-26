import bgImg from "../../assets/images/blue-bg.png";
import dribble from "../../assets/images/dribble.svg";
import facebook from "../../assets/images/facebook.svg";
import instagram from "../../assets/images/instagram.svg";
import linkedin from "../../assets/images/linkedin.svg";
import behance from "../../assets/images/behance.svg";

export const Contact = () => {
  const socialLinks = [
    {
      title: "Dribble",
      logo: dribble,
      link: "https://dribbble.com/arifulislam_1995",
    },
    {
      title: "Facebook",
      logo: facebook,
      link: "https://www.facebook.com/Sh0pnilll",
    },
    {
      title: "Instagram",
      logo: instagram,
      link: "https://www.instagram.com/sh0pnill_hasanigsh=MXg3eGxvamdtcWprMA==",
    },
    {
      title: "LinkedIn",
      logo: linkedin,
      link: "https://www.linkedin.com/in/ariful-islam95/",
    },
    {
      title: "Behance",
      logo: behance,
      link: "https://www.behance.net/arifulislam1995",
    },
  ];

  return (
    <div id="contact" className="pt-10 md:pt-20 pb-14 px-4 overflow-x-hidden">
      {/* Header Section */}
      <div className="mb-12 md:mb-20 space-y-2">
        <p className="text-center text-sky-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded uppercase tracking-tight">
          Contact Me
        </p>
        <p className="text-center text-white text-base sm:text-xl md:text-2xl font-light font-unbounded px-4 max-w-2xl mx-auto">
          Reach Out and Connect with Me
        </p>
      </div>

      {/* Social Media Links - Responsive Flex Wrap */}
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 lg:justify-between max-w-7xl mx-auto mb-16">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-52 h-14 relative bg-sky-500/10 sm:bg-sky-500/30 rounded-[120px] shadow-[0px_5px_40px_0px_rgba(0,0,0,0.15)] outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-[6px] transition-all duration-300 hover:scale-105 hover:bg-sky-500/50 cursor-pointer group"
          >
            <div className="w-full h-full flex justify-center items-center gap-2.5">
              <img
                src={item.logo}
                alt={item.title}
                className="w-5 h-5 sm:w-auto transition-transform duration-300 group-hover:rotate-12"
              />
              <div className="text-center text-white text-base sm:text-lg lg:text-xl font-normal font-unbounded">
                {item.title}
              </div>
            </div>
          </a>
        ))}
      </div>

      <div className="flex flex-col items-center relative">
        <p className="text-center text-sky-500 text-3xl sm:text-4xl md:text-5xl font-semibold font-unbounded py-6 md:py-9 z-10">
          Or
        </p>

        {/* Background Decorative Image - Responsive fit */}
        <div
          className="absolute inset-0 w-full h-full z-0 opacity-20 md:opacity-40 pointer-events-none"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left center",
          }}
        />

        {/* Contact Form - Responsive container */}
        <form className="w-full md:w-10/12 lg:w-8/12 xl:w-7/12 flex flex-col gap-8 md:gap-12 lg:gap-16 z-10 px-2 sm:px-4">
          <div className="flex flex-col md:flex-row gap-6 md:gap-7">
            <input
              type="text"
              placeholder="Name"
              className="w-full md:w-1/2 px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm md:text-base font-medium font-unbounded focus:outline-none focus:border-sky-500 transition-all placeholder:text-white/60"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full md:w-1/2 px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm md:text-base font-medium font-unbounded focus:outline-none focus:border-sky-500 transition-all placeholder:text-white/60"
            />
          </div>
          <div className="w-full">
            <textarea
              placeholder="Project Details..."
              className="w-full h-40 px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-sm md:text-base font-medium font-unbounded focus:outline-none focus:border-sky-500 transition-all placeholder:text-white/60 resize-none"
            />
          </div>
          <div className="flex justify-center md:justify-end">
            <button className="w-full sm:w-56 px-7 py-4 bg-sky-500 hover:bg-sky-400 rounded-[80px] shadow-lg hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-300 text-white text-base font-bold font-unbounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
