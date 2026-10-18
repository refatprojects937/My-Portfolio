
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaEnvelope,
  FaFire,
} from "react-icons/fa6";
import {
  FaReact,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";

import BannerImg from "../assets/refatRepo.jpg";

const skills = [
  { name: "REACT.JS", Icon: FaReact, color: "#00d8ff" },
  { name: "NEXT.JS", Icon: SiNextdotjs, color: "#ffffff" },
  { name: "NODE.JS", Icon: FaNodeJs, color: "#83cd29" },
  { name: "MONGODB", Icon: SiMongodb, color: "#47a248" },
  { name: "C++", Icon: SiCplusplus, color: "#659ad2" },
];

const socialLinks = [
  { label: "GitHub", Icon: FaGithub, href: "https://github.com/refatprojects937" },
  { label: "LinkedIn", Icon: FaLinkedin, href: "https://linkedin.com/" },
  { label: "X", Icon: FaXTwitter, href: "https://x.com/" },
  { label: "Email", Icon: FaEnvelope, href: "mailto:your@email.com" },
];

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#42322d] px-5 py-10 text-white sm:px-8 lg:px-12 lg:py-8 container mx-auto rounded-2xl">
      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 lg:grid-cols-[345px_minmax(0,1fr)] lg:gap-16 xl:gap-20">

        {/* LEFT PROFILE CARD */}
        <aside className="relative mx-auto w-full max-w-[345px] overflow-hidden rounded-2xl bg-white px-6 py-7 text-center text-black sm:px-8">

          {/* Decorative dashed circle */}
          <div className="pointer-events-none absolute -left-12 -top-20 h-40 w-64 rounded-full border-[3px] border-dashed border-orange-500" />

          {/* Profile Image */}
          <div className="relative mx-auto h-[250px] w-full max-w-[240px] overflow-hidden rounded-xl bg-orange-700 sm:h-[285px] sm:max-w-[240px]">
            <Image
              src={BannerImg}
              alt="Mohammad Sabbir"
              fill
              priority
              sizes="(max-width: 640px) 240px, 240px"
              className="object-cover object-top"
            />
          </div>

          <h2 className="mt-6 text-2xl font-extrabold tracking-tight sm:text-[28px]">
            Mohammad Refat
          </h2>

          {/* Orange Badge */}
          <div className="relative z-10 mx-auto mt-5 flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
            <FaFire size={19} />
          </div>

          {/* Lower Decoration */}
          <div className="pointer-events-none absolute -left-10 top-[68%] h-28 w-56 rounded-full border-[3px] border-dashed border-orange-500" />

          <p className="mt-8 text-base leading-6 text-gray-500 sm:text-lg">
            A Full Stack Web Developer who loves to design and build websites.
          </p>

          {/* Social Links */}
          <div className="relative z-10 mt-8 flex items-center justify-center gap-5 text-orange-500 sm:gap-6">
            {socialLinks.map(({ label, Icon, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={label === "Email" ? undefined : "_blank"}
                rel={label === "Email" ? undefined : "noreferrer"}
                className="transition hover:-translate-y-1 hover:text-orange-700"
              >
                <Icon size={22} />
              </a>
            ))}
          </div>
        </aside>

        {/* RIGHT INTRODUCTION */}
        <section className="min-w-0 py-2 sm:py-4">
          <h1 className="text-5xl font-black uppercase leading-[0.98] tracking-tight sm:text-6xl md:text-7xl xl:text-[88px]">
            <span className="block">Hii, I Am</span>
            <span className="mt-2 block break-words text-[#9ec23b]">
              Mohammad Refat
            </span>
          </h1>

          <div className="mt-7 max-w-3xl space-y-6 text-base leading-7 text-[#b3acab] sm:text-lg sm:leading-8">
            <p>
              A Full Stack Web Developer from Bangladesh who loves to
              design and build Website. I use React.js or Next.js to
              build the web application interfaces and the functionalities.
            </p>

            <p>
              I started to learn about web development through many video
              tutorials, documentations and articles. The first programming
              language I learned was C++. I also played around with databases,
              and MongoDB is my favorite right now.
            </p>
          </div>

          {/* Skills */}
          <div className="mt-10 grid grid-cols-3 gap-x-4 gap-y-7 sm:grid-cols-5 sm:gap-x-6 lg:mt-12 lg:max-w-[650px]">
            {skills.map(({ name, Icon, color }) => (
              <div
                key={name}
                className="flex min-w-0 flex-col items-center gap-3"
              >
                <Icon
                  aria-hidden="true"
                  style={{ color }}
                  className="text-4xl transition-transform duration-300 hover:scale-110 sm:text-5xl"
                />
                <span className="text-center text-[11px] font-bold tracking-wide text-[#96908e] sm:text-xs">
                  {name}
                </span>
              </div>
            ))}
          </div>


     

     
     <div className="mt-12 grid grid-cols-3 gap-4 sm:gap-8">
  <div>
    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
      +02
    </h2>
    <p className="mt-3 text-xs leading-5 text-[#aaa3a1] sm:text-sm">
      YEARS OF
      <br />
      EXPERIENCE
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
      +04
    </h2>
    <p className="mt-3 text-xs leading-5 text-[#aaa3a1] sm:text-sm">
      PROJECTS
      <br />
      COMPLETED
    </p>
  </div>

  <div>
    <h2 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-7xl">
      +01
    </h2>
    <p className="mt-3 text-xs leading-5 text-[#aaa3a1] sm:text-sm">
      WORLDWIDE
      <br />
      CLIENTS
    </p>
  </div>
</div>
 








 
<section className="bg-[#151211] px-5 py-10 text-white sm:px-8 mt-10">
  <h2 className="text-5xl font-black leading-[1.05] sm:text-6xl">
    PREMIUM
    <span className="block text-[#343131]">TOOLS</span>
  </h2>

  <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">



    {/* Figma */}
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-2xl font-bold text-[#a259ff]">
        F
      </div>
      <div>
        <h3 className="text-xl font-bold">Figma</h3>
        <p className="text-sm text-[#aaa3a1]">Design Tool</p>
      </div>
    </div>

   

    {/* ChatGPT */}
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-xl font-bold text-black">
        AI
      </div>
      <div>
        <h3 className="text-xl font-bold">ChatGPT</h3>
        <p className="text-sm text-[#aaa3a1]">AI Assistant</p>
      </div>
    </div>

   

    {/* Next.js */}
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-sm font-bold text-black">
        NEXT.js
      </div>
      <div>
        <h3 className="text-xl font-bold">Next.js</h3>
        <p className="text-sm text-[#aaa3a1]">React Framework</p>
      </div>
    </div>

    {/* Claude */}
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-3xl font-bold text-[#d97757]">
        ✳
      </div>
      <div>
        <h3 className="text-xl font-bold">Claude</h3>
        <p className="text-sm text-[#aaa3a1]">AI Assistant</p>
      </div>
    </div>

    {/* Gemini */}
    <div className="flex items-center gap-4">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white text-3xl font-bold text-[#4285f4]">
        ✦
      </div>
      <div>
        <h3 className="text-xl font-bold">Gemini</h3>
        <p className="text-sm text-[#aaa3a1]">AI Assistant</p>
      </div>
    </div>

  </div>
</section>








         </section>

      </div>




      


    </main>
  );
}
