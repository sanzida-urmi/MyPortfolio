import React from "react";
import SectionWrapper from "./SectionWrapper";

const Education = () => {
  return (
    <SectionWrapper className="font-display">
      <div className="flex flex-col">
        <main className="flex-grow px-6">

          <p className="text-sm mt-10  font-semibold tracking-widest text-white uppercase">
            Education
          </p>

          <div className="mt-10 relative pl-12">

            {/* Vertical orange Line */}
            <div className="absolute left-4 top-0 bottom-0 w-[2px] bg-orange-500/80"></div>

            {/* orange Circle Dot */}
            <div className="absolute left-1 top-8 w-6 h-6 bg-orange-500 rounded-full border-4 border-[#0f0f12] shadow-[0_0_15px_rgba(255,0,80,0.6)]"></div>

            {/* Card */}
            <div
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = ((e.clientX - rect.left) / rect.width) * 100;
                const y = ((e.clientY - rect.top) / rect.height) * 100;
                e.currentTarget.style.setProperty("--x", `${x}%`);
                e.currentTarget.style.setProperty("--y", `${y}%`);
              }}
              className="
                relative overflow-hidden
                rounded-xl sm:p-8 p-4
                bg-[#0f0f12]
                border border-white/5
                backdrop-blur-xl
                shadow-[0_20px_50px_rgba(0,0,0,0.6)]
                transition-all duration-300
                hover:-translate-y-1
               
              "
              style={{
                backgroundImage:
                  "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 45%)",
              }}
            >
              <div className="relative z-10">

                {/* Date */}
                <p className="sm:text-xs text-sm sm:font-semibold tracking-widest text-orange-400 uppercase sm:mb-3 mb-2">
                  November 2022 – June 2027
                </p>

                {/* Degree */}
                <h2 className="sm:text-2xl text-xl font-bold sm:mb-3 mb-2 text-white">
                  BSc in CSE
                </h2>

                {/* Institution */}
                <p className="text-gray-400 text-xs sm:text-lg">
                  Faridpur Engineering College
                </p>

              </div>
            </div>

          </div>

        </main>
      </div>
    </SectionWrapper>
  );
};

export default Education;
