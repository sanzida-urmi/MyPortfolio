import SectionWrapper from "./SectionWrapper";

const handleGlow = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  e.currentTarget.style.setProperty("--x", `${x}%`);
  e.currentTarget.style.setProperty("--y", `${y}%`);
};

const SkillCard = ({ title, skills }) => (
  <div
    onMouseMove={handleGlow}
    className="
      group relative overflow-hidden
      rounded-2xl sm:p-8 p-4
      bg-gradient-to-br from-[#0b0b0f] to-[#111118]
      border border-white/10
      shadow-[0_20px_60px_rgba(0,0,0,0.7)]
      transition-all duration-500
      hover:-translate-y-2
    "
    style={{
      backgroundImage: `
        radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 55%),
        linear-gradient(135deg, #0b0b0f, #111118)
      `,
    }}
  >
    {/* animated border glow */}
    <div
      className="
        absolute inset-0 rounded-2xl
        opacity-0 group-hover:opacity-100
        transition duration-500
        bg-gradient-to-r from-orange-500/20 via-transparent to-orange-500/20
      "
    />

    {/* shine sweep */}
    <div
      className="
        absolute inset-0
        -translate-x-full
        group-hover:translate-x-full
        transition-transform duration-1000
        bg-gradient-to-r from-transparent via-white/10 to-transparent
        skew-x-12
      "
    />

    <div className="relative z-10">
      {/* title */}
      <div className="flex items-center gap-3 mb-6">
        <div className="w-1.5 h-8 bg-orange-500 rounded-full shadow-lg shadow-orange-500/40"></div>
        <h3 className="text-white font-semibold tracking-wide text-sm sm:text-lg">
          {title}
        </h3>
      </div>

      {/* skill pills */}
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="
              px-4 py-2 rounded-lg
              bg-white/5 border border-white/10
              text-gray-300 sm:text-sm text-xs
              transition-all duration-300
              hover:bg-orange-500/15
              hover:border-orange-500/40
              hover:text-white
              hover:-translate-y-1
              hover:shadow-lg hover:shadow-orange-500/20
              cursor-default
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default function skill() {
  return (
    <SectionWrapper id="skills" >
     <p className="text-sm mt-10 p-4 font-semibold tracking-widest text-white uppercase">
          My Skills
        </p>
    <section className="p-6 pb-0 grid md:grid-cols-2 gap-6 ">
      <SkillCard
        title="FRONTEND DEVELOPMENT"
        skills={[
          "React.js",
          "Next.js",
          "TypeScript",
          "HTML5",
          "CSS3",
        ]}
      />

      <SkillCard
        title="STYLING & UI"
        skills={[
          "Tailwind CSS",
          "Bootstrap",
          "Framer Motion",
          "Responsive Design"        
        ]}
      />

      <SkillCard
        title="BACKEND & DATABASE"
        skills={[
          "Node.js",
          "Express.js",
          "MongoDB",
          "Firebase Auth",
          "JWT",
          "REST APIs",
        ]}
      />

      <SkillCard
        title="WORKFLOW & TOOLS"
        skills={[
          "Git & GitHub",
          "Vercel",
          "Figma",
          "Performance Optimization",
          "Cross-Browser Compatibility",
        ]}
      />
    </section>
    </SectionWrapper>
  );
}
