import React from 'react';
import { motion } from 'framer-motion';

const Projects = () => {
  return (
    <section
      id="project"
      className="bg-background-light dark:bg-background-dark font-display"
    >
      <div className="min-h-screen">
        <main className="p-6 sm:p-8">
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            My Projects
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center">
            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                alt="Screenshot of the ARTIFY project, showing an abstract art gallery website."
                className="w-full h-48 object-cover"
                src="https://i.ibb.co.com/Jw4VvqLn/68747470733a2f2f692e6962622e636f2f6862445736516d2f53637265656e73686f742d323032352d31312d31392d313033.png"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  MovieMaster Pro
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  It is a comprehensive movie management web application that
                  empowers users to browse, add, edit, delete, and manage their
                  personal movie collections and watchlists
                </p>
                <div className="flex gap-5">
                  <a
                    className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    href="https://quiet-raindrop-9f5788.netlify.app"
                  >
                    Live Link
                  </a>
                  <a
                    className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    href="https://github.com/sanzida-urmi/MovieMaster.git"
                  >
                    github Link
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                alt="Screenshot of the ARTIFY project, showing an abstract art gallery website."
                className="w-full h-48 object-cover"
                src="https://camo.githubusercontent.com/fc6141edd0afb61a5cfb65d0c63bf9b1b078517192da77d33de9d87eb3c5dfa0/68747470733a2f2f692e6962622e636f2f484c4d564a7350762f53637265656e73686f742d323032352d31312d31392d3130343532362e706e67"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  AppStore Clone
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  A fully functional React-based App Store Clone that allows users
                  to browse applications, view detailed information including
                  downloads, ratings, and reviews.
                </p>
                <div className="flex gap-5">
                  <a
                    className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    href=" https://wondrous-gingersnap-0db79d.netlify.app"
                  >
                    Live Link
                  </a>
                  <a
                    className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    href="https://github.com/sanzida-urmi/HeroApp.git"
                  >
                    github Link
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -10 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden"
            >
              <img
                alt="Screenshot of the ARTIFY project, showing an abstract art gallery website."
                className="w-full h-48 object-cover"
                src="https://camo.githubusercontent.com/c325ae662868939532bd8a0d33f6cd6743293d705887aa3447c446c97edb61e2/68747470733a2f2f692e6962622e636f2e636f6d2f30525a486733624d2f53637265656e73686f742d323032352d31312d31392d3131323930392e706e67"
              />
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Green Earth
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-6 leading-relaxed">
                  Green Earth is an environmental conservation web application that
                  allows users to browse different tree species, and virtually
                  "plant" trees by adding them to their cart.
                </p>
                <div className="flex gap-5">
                  <a
                    className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    href=" https://grand-melomakarona-f3d836.netlify.app"
                  >
                    Live Link
                  </a>
                  <a
                    className="inline-block w-full text-center bg-primary text-white font-semibold py-3 px-6 rounded-lg hover:bg-opacity-90 transition-colors"
                    href="https://github.com/sanzida-urmi/Green-earth.git"
                  >
                    github Link
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </main>
      </div>
    </section>
  );
};

export default Projects;
