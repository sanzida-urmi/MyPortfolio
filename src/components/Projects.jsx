import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import { Link } from "react-router-dom";
import ProjectModal from "../components/ProjectModal";
import projectsData from "../components/data/projectsData";



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);


  const handleGlow = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--x", `${x}%`);
    e.currentTarget.style.setProperty("--y", `${y}%`);
  };

  return (
    <section id="project" className="font-display">
      <div className="min-h-screen p-6 sm:p-8">
        <p className="text-sm font-semibold tracking-widest text-white uppercase mt-10 mb-10">
          My Projects
        </p>
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {projectsData.map((project) => (
    <motion.div
      key={project.id}
      whileHover={{ y: -10 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseMove={handleGlow}
      className="group relative overflow-hidden rounded-2xl bg-[#0f0f12] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.7)] transition-all duration-500"
      style={{
        backgroundImage:
          "radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(255,165,0,0.25), transparent 55%)",
      }}
    >
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-52 object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition duration-700"></div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <h2 className="sm:text-xl text-sm font-bold text-white">
          {project.name}
        </h2>

        <p className="text-gray-400 text-xs">
          {project.shortDescription}
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setSelectedProject(project)}
            className="w-full border border-white/20 text-white py-[5px] sm:py-3 rounded-lg hover:border-orange-500/40 hover:bg-orange-500/10 transition sm:text-xl text-sm"
          >
            Details
          </button>

          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="w-full flex items-center py-[5px] sm:py-3 justify-center gap-2 bg-orange-600 text-white   rounded-lg hover:bg-orange-700 transition sm:text-xl text-sm"
          >
            Live Demo
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </motion.div>
  ))}
</div>


<ProjectModal
  project={selectedProject}
  open={selectedProject !== null}
  setOpen={() => setSelectedProject(null)}
/>


      </div>
    </section>
  );
};

export default Projects;
