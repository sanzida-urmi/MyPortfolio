// import React from 'react';
// import Navbar from './components/Navbar';
// import Hero from './components/Hero';
// import About from './components/About';
// import Services from './components/Services';
// import Skills from './components/Skills';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Footer from './components/Footer';
// import Skill from './components/skill';
// import Project from './components/Project';
// import EducationCard from './components/EducationCard';
// import FAQ from './components/FAQ';
// import CustomCursor from './components/CustomCursor';


// function App() {
//   return (
//     <div className="font-sans min-h-screen">
//       <CustomCursor />
//       <Navbar />
//       <Hero />
//       <About />
//       <Services />
//       <Skill/>
//       <Projects />
//       <EducationCard/>
//       <FAQ/>
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import React, { useState } from 'react';
import Loader from './components/Loader';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skill from './components/skill';
import EducationCard from './components/EducationCard';
import FAQ from './components/FAQ';
import CustomCursor from './components/CustomCursor';

function App() {
   const [loading, setLoading] = useState(true);

  if (loading) {
    return <Loader onFinish={() => setLoading(false)} />;
  }
  return (
    <div className="font-sans min-h-screen">
      <CustomCursor />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Skill />
      <Projects />
      <EducationCard />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
