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
    <div id="contact" className="pb-14">
      <div className="mb-20 space-y-2">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded">
          Contact Me
        </p>
        <p className="text-center justify-start text-white text-2xl font-light font-unbounded">
          Reach Out and Connect with Me
        </p>
      </div>

      {/* Social Media Links */}
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {socialLinks.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="w-52 h-14 relative bg-sky-500/30 rounded-[120px] shadow-[0px_5px_40px_0px_rgba(0,0,0,0.15)] outline outline-2 outline-offset-[-2px] outline-sky-500/60 backdrop-blur-[6px] transition-all duration-300 hover:scale-105 hover:bg-sky-500/50 hover:shadow-[0px_10px_50px_0px_rgba(0,0,0,0.3)] cursor-pointer group"
          >
            <div className="w-full h-full flex justify-center items-center gap-2.5">
              <img
                src={item.logo}
                alt={item.title}
                className="transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110"
              />
              <div className="text-center justify-start text-white text-xl font-normal font-unbounded transition-colors duration-300 group-hover:text-white">
                {item.title}
              </div>
            </div>
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center relative">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded py-9">
          Or
        </p>
        <div
          className="absolute left-0 top-0 w-[941px] h-[894px] z-0 opacity-40"
          style={{
            backgroundImage: `url(${bgImg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "left center",
          }}
        />
        {/* Contact Form */}
        <form className="w-7/12 flex flex-col justify-start items-start gap-16 z-10">
          <div className="self-stretch flex justify-start items-center gap-7">
            <input
              type="text"
              placeholder="Name"
              className="w-1/2 px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-base font-medium font-unbounded focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all duration-300 placeholder:text-white/60"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-base font-medium font-unbounded focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all duration-300 placeholder:text-white/60"
            />
          </div>
          <div className="self-stretch flex justify-start items-start gap-7">
            <textarea
              placeholder="Project Details..."
              className="w-full h-40 px-6 py-4 rounded-xl border border-white/20 bg-white/5 backdrop-blur-sm text-white text-base font-medium font-unbounded focus:outline-none focus:border-sky-500 focus:bg-white/10 transition-all duration-300 placeholder:text-white/60 resize-none"
            />
          </div>
          <div className="self-stretch flex flex-col justify-center items-end gap-2.5">
            <button className="w-56 px-7 py-4 bg-sky-500 hover:bg-sky-400 rounded-[80px] shadow-lg hover:shadow-sky-500/40 hover:scale-105 active:scale-95 transition-all duration-300 text-center text-white text-base font-bold font-unbounded">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
