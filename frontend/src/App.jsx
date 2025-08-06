import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Expertise from "./components/Expertise";
import Certifications from "./components/Certifications";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./index.css"; // Tailwind + animations

function App() {
  return (
    <>
   

      {/* Main Page */}
      <Navbar />
      <main className="pt-24 px-6 max-w-6xl mx-auto space-y-32">
        <Home />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Resume />
        <Expertise />
        <Certifications />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
