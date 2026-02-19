import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";

const ProjectModal = ({ open, setOpen, project }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Background Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0, y: 60 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.85, opacity: 0, y: 60 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="relative bg-gradient-to-br from-[#121216] to-[#0f0f13] border border-white/10 rounded-3xl max-w-4xl w-full shadow-[0_30px_80px_rgba(0,0,0,0.8)] max-h-[90vh] overflow-y-auto sm:p-8 p-2">

              {/* Glow Accent */}
              <div className="absolute -top-20 -left-20 w-72 h-72 bg-orange-600/20 blur-3xl rounded-full"></div>
              <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-pink-600/20 blur-3xl rounded-full"></div>

              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
              >
                <X size={26} />
              </button>

              {/* Image */}
              <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 group">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-64 md:h-80 object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              {/* Title */}
              <h2 className="sm:text-3xl text:sm md:text-4xl font-bold text-white mb-4">
                {project.name}
              </h2>

              {/* Description */}
              <p className="text-gray-400 text-xs leading-relaxed mb-8">
                {project.shortDescription}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="sm:text-xl text-sm font-semibold mb-4 text-white">
                  🛠 Tech Stack
                </h3>

                <div className="flex flex-wrap gap-3">
                  {project.techStack.map((tech, index) => (
                    <motion.span
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="px-4 py-2 sm:text-sm text-xs rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-orange-500/10 hover:border-orange-500/40 hover:text-white transition duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Challenges */}
              <div className="mb-8">
                <h3 className="sm:text-xl text-sm font-semibold mb-4 text-white">
                  🚧 Challenges
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.challenges.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl sm:text-sm text-xs bg-white/5 border border-white/10 hover:border-orange-500/40 hover:bg-orange-500/5 transition duration-300 text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Plans */}
              <div className="mb-8">
                <h3 className="sm:text-xl text-sm font-semibold mb-4 text-white">
                  🚀 Future Plans
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {project.futurePlans.map((item, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-xl sm:text-sm text-xs bg-white/5 border border-white/10 hover:border-pink-500/40 hover:bg-pink-500/5 transition duration-300 text-gray-300"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-wrap gap-4 mt-6">
                {project.liveLink && (
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-xl text-white sm:text-sm text-xs transition duration-300 shadow-lg hover:shadow-orange-600/40"
                  >
                    Live Demo
                    <ExternalLink size={18} />
                  </a>
                )}

                {project.githubClient && (
                  <a
                    href={project.githubClient}
                    target="_blank"
                    rel="noreferrer"
                    className="flex sm:text-sm text-xs items-center gap-2 border border-white/20 hover:bg-white/10 px-6 py-3 rounded-xl text-white transition duration-300"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
