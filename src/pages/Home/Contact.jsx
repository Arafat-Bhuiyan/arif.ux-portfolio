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
    },
    {
      title: "Facebook",
      logo: facebook,
    },
    {
      title: "Instagram",
      logo: instagram,
    },
    {
      title: "LinkedIn",
      logo: linkedin,
    },
    {
      title: "Behance",
      logo: behance,
    },
  ];

  return (
    <div className="pb-14">
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
          <div
            key={index}
            className="w-52 h-14 relative bg-sky-500/30 rounded-[120px] shadow-[0px_5px_40px_0px_rgba(0,0,0,0.25)] outline outline-2 outline-offset-[-2px] outline-sky-500 backdrop-blur-[6px] overflow-hidden"
          >
            <div className="w-full h-full flex justify-center items-center gap-2.5">
              <img src={item.logo} alt={item.title} />
              <div className="text-center justify-start text-white text-xl font-normal font-['Unbounded']">
                {item.title}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col items-center relative">
        <p className="self-stretch text-center justify-start text-sky-500 text-5xl font-semibold font-unbounded py-9">
          Or
        </p>
        <div
          className="absolute left-0 top-0 w-[941px] h-[894px] z-0"
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
              className="w-1/2 px-6 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white bg-transparent text-white text-base font-medium font-['Unbounded'] capitalize leading-6 tracking-wide placeholder:text-white"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-1/2 px-6 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white bg-transparent text-white text-base font-medium font-['Unbounded'] capitalize leading-6 tracking-wide placeholder:text-white"
            />
          </div>
          <div className="self-stretch flex justify-start items-start gap-7">
            <textarea
              placeholder="Project Details..."
              className="w-full h-40 px-6 py-3.5 rounded-lg outline outline-1 outline-offset-[-1px] outline-white bg-transparent text-white text-base font-medium font-['Unbounded'] capitalize leading-6 tracking-wide placeholder:text-white resize-none"
            />
          </div>
          <div className="self-stretch flex flex-col justify-center items-end gap-2.5">
            <button className="w-56 px-7 py-3.5 bg-sky-500 rounded-[80px] shadow-[inset_0px_-7px_8px_0px_rgba(0,0,0,0.10)] inline-flex justify-center items-center gap-2 text-center text-white text-base font-bold font-['Unbounded']">
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
