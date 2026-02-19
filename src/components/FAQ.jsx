import React, { useState } from "react";
import SectionWrapper from "./SectionWrapper";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What industries have you worked in as a web developer?",
    answer:
      "I have worked on projects including e-commerce platforms, parcel delivery systems, portfolio websites, and full-stack web applications."
  },
  {
    question: "Can I download your resume/CV for information?",
    answer:
      "Yes, you can download my resume directly from the Download Resume button available in the portfolio."
  },
  {
    question: "What technologies do you use for web development?",
    answer:
      "I primarily use React.js, Tailwind CSS, Node.js, Express.js, MongoDB, Firebase, and JWT authentication."
  },
  {
    question: "How do I explore your web development projects?",
    answer:
      "You can explore my projects in the Projects section. Each project includes live demo links and GitHub repositories."
  }
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <SectionWrapper className="font-display">
      <div className="px-6">

        <p className="text-sm font-semibold tracking-widest text-white uppercase mt-20 mb-10">
          Questions? <span className="text-orange-500">Look Here</span>
        </p>

        <div className="sm:space-y-6 space-y-2">

          {faqs.map((faq, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-xl border border-white/5 bg-[#0f0f12] backdrop-blur-xl transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 hover:opacity-100 transition duration-500 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,0,80,0.15), transparent 60%)"
                }}
              />

              {/* Question */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center px-4 sm:px-6 sm:py-5 py-2 text-left"
              >
                <h3 className="text-xs sm:text-lg md:text-xl font-medium text-white">
                  {faq.question}
                </h3>

                {activeIndex === index ? (
                  <Minus className="text-orange-500" />
                ) : (
                  <Plus className="text-orange-500" />
                )}
              </button>

              {/* Answer */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-4 sm:px-6 sm:pb-6 pb-3 text-gray-400 text-xs sm:text-lg md:text-xl"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}

        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQ;
