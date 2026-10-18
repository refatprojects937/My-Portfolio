
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiMysql,
} from "react-icons/si";

const skills = [
  ["React.js", FaReact, "#61DAFB"],
  ["Next.js", SiNextdotjs, "#fff"],
  ["Node.js", FaNodeJs, "#83CD29"],
  ["MongoDB", SiMongodb, "#47A248"],
  ["C++", SiCplusplus, "#659AD2"],
  ["HTML", FaHtml5, "#E34F26"],
  ["CSS", FaCss3Alt, "#1572B6"],
  ["JavaScript", SiJavascript, "#F7DF1E"],
  ["TypeScript", SiTypescript, "#3178C6"],
  ["Tailwind", SiTailwindcss, "#06B6D4"],
  ["MySQL", SiMysql, "#4479A1"],
];

const tools = [
  { name: "Figma", desc: "Design Tool", icon: "F", color: "#A259FF" },
  { name: "ChatGPT", desc: "AI Assistant", icon: "AI", color: "#111111" },
  { name: "Next.js", desc: "React Framework", icon: "NEXT.js", color: "#111111" },
  { name: "Claude", desc: "AI Assistant", icon: "✳", color: "#D97757" },
  { name: "Gemini", desc: "AI Assistant", icon: "✦", color: "#4285F4" },
];

export default function Docs() {
  return (
    <main className="min-h-screen space-y-12 bg-[#151211] px-5 py-10 text-white sm:px-8  container mx-auto rounded-2xl">

      {/* Technical Skills */}
      <section className="mx-auto max-w-5xl">
        <h2 className="mb-8 text-4xl font-black sm:text-5xl">
          TECHNICAL <span className="text-[#343131]">SKILLS</span>
        </h2>

        <div className="grid grid-cols-3 gap-x-4 gap-y-8 sm:grid-cols-4 md:grid-cols-6">
          {skills.map(([name, Icon, color]) => (
            <div key={name} className="flex flex-col items-center gap-3">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#42312c]">
                <Icon style={{ color }} className="text-3xl" />
              </div>
              <p className="text-center text-xs text-gray-400">{name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Premium Tools */}
      <section className="mx-auto w-full max-w-5xl rounded-2xl border border-[#42312c] bg-[#151211] p-6 sm:p-10">
        <h2 className="text-4xl font-black leading-none sm:text-6xl">
          PREMIUM
          <span className="mt-2 block text-[#343131]">TOOLS</span>
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
          {tools.map((tool) => (
            <div key={tool.name} className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white">
                <span style={{ color: tool.color }} className="font-bold">
                  {tool.icon}
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold sm:text-xl">{tool.name}</h3>
                <p className="text-sm text-[#aaa3a1]">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
