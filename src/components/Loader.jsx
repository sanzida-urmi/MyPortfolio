import React, { useEffect, useState } from "react";

const PremiumLoader = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setFadeOut(true), 400);
          setTimeout(() => onFinish(), 1200);
          return 100;
        }
        return prev + 1;
      });
    }, 22);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div
      className={`fixed inset-0 bg-black flex flex-col items-center justify-center transition-opacity duration-1000 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Soft Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black"></div>

      {/* Center Container */}
      <div className="relative flex flex-col items-center">

        {/* Logo with Neon Glow */}
        <div className="mb-10 relative">
          
          {/* Glow Ring */}
          <div className="absolute inset-0 rounded-2xl border border-red-600 blur-xl opacity-40"></div>
        </div>

        {/* Circular Progress */}
        <div className="relative mb-1 sm:mb-8">
          <svg className="w-24 h-24 -rotate-90">
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#1f1f1f"
              strokeWidth="5"
              fill="none"
            />
            <circle
              cx="48"
              cy="48"
              r="40"
              stroke="#dc2626"
              strokeWidth="5"
              fill="none"
              strokeDasharray={251}
              strokeDashoffset={251 - (251 * progress) / 100}
              strokeLinecap="round"
              className="transition-all duration-300"
            />
          </svg>

          <div className="absolute inset-0 flex items-center justify-center text-gray-400 text-sm">
            {progress}%
          </div>
        </div>

        {/* Welcome Text */}
        <h1 className="text-5xl font-bold text-white tracking-tight">
          Welcome
        </h1>

        <p className="text-gray-500 mt-1 sm:mt-3 text-sm sm:text-lg">
          Sanzida Portfolio
        </p>

        {/* Elegant Line */}
        <div className="w-32 h-[2px] bg-red-600 mt-3 sm:mt-6 rounded-full"></div>

        <p className="text-gray-600 mt-2 sm:mt-4 text-sm tracking-widest">
          Crafting Digital Experiences
        </p>
      </div>
    </div>
  );
};

export default PremiumLoader;
