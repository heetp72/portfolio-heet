import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Expertise from "./components/Expertise";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-[#0B0F19] text-slate-100 flex flex-col justify-between">
      {/* Sticky Frosted Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="px-4 sm:px-6 max-w-7xl mx-auto space-y-16 sm:space-y-24 w-full">
        <Home />
        <About />
        <Experience />
        <Projects />
        <Expertise />
        <Certifications />
        <Education />
        <Skills />
        <Resume />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
