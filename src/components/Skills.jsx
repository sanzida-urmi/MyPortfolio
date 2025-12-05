import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
    },
  },
};

const Skills = () => {
  return (
    <section className="bg-background-light dark:bg-background-dark font-display antialiased">
      <div className="p-4 sm:p-6">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          My Skills
        </p>

        <motion.main
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <i className="fab fa-html5 text-5xl text-orange-500"></i>
            <h2 className="font-semibold text-slate-800 dark:text-white">HTML</h2>
            <div className="w-full">
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-full">
                <div
                  className="bg-orange-500 h-1.5 rounded-full"
                  style={{ width: '90%' }}
                ></div>
              </div>
              <p className="text-xs text-center mt-1 text-slate-500 dark:text-slate-400">
                90%
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <i className="fab fa-css3-alt text-5xl text-blue-500"></i>
            <h2 className="font-semibold text-slate-800 dark:text-white">CSS</h2>
            <div className="w-full">
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-full">
                <div
                  className="bg-blue-500 h-1.5 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
              <p className="text-xs text-center mt-1 text-slate-500 dark:text-slate-400">
                85%
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <i className="fab fa-js-square text-5xl text-yellow-400"></i>
            <h2 className="font-semibold text-slate-800 dark:text-white">
              JavaScript
            </h2>
            <div className="w-full">
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-full">
                <div
                  className="bg-yellow-400 h-1.5 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
              <p className="text-xs text-center mt-1 text-slate-500 dark:text-slate-400">
                80%
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <i className="fab fa-react text-5xl text-sky-400"></i>
            <h2 className="font-semibold text-slate-800 dark:text-white">
              React
            </h2>
            <div className="w-full">
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-full">
                <div
                  className="bg-sky-400 h-1.5 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
              <p className="text-xs text-center mt-1 text-slate-500 dark:text-slate-400">
                80%
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <i className="fab fa-node-js text-5xl text-green-500"></i>
            <h2 className="font-semibold text-slate-800 dark:text-white">
              Node.js
            </h2>
            <div className="w-full">
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-full">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
              <p className="text-xs text-center mt-1 text-slate-500 dark:text-slate-400">
                70%
              </p>
            </div>
          </motion.div>
          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white dark:bg-slate-800 p-4 rounded-xl flex flex-col items-center justify-center space-y-3"
          >
            <svg
              className="w-12 h-12 text-green-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM5 10a1 1 0 011-1h1.414a1 1 0 01.707.293l.293.293a1 1 0 001.414 0l.293-.293a1 1 0 01.707-.293H14a1 1 0 110 2h-1.172a1 1 0 00-.707.293l-1.414 1.414a1 1 0 01-1.414 0L7.879 11.293A1 1 0 007.172 11H6a1 1 0 01-1-1z"></path>
            </svg>
            <h2 className="font-semibold text-slate-800 dark:text-white">
              MongoDB
            </h2>
            <div className="w-full">
              <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-1.5 w-full">
                <div
                  className="bg-green-500 h-1.5 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
              <p className="text-xs text-center mt-1 text-slate-500 dark:text-slate-400">
                75%
              </p>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </section>
  );
};

export default Skills;
