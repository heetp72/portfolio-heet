import React from 'react';

const Home = () => (
  <section
    id="home"
    className="h-screen flex flex-col justify-center items-center text-center px-6 fade-in bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]"
  >
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
      Hi, I'm Heet KaPatel
    </h1>
    <p className="text-lg sm:text-xl text-gray-300 max-w-2xl">
      Full Stack Developer | React & Node.js Enthusiast
    </p>
    <a
      href="#projects"
      className="mt-8 inline-block bg-green-500 hover:bg-green-400 text-black font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg"
    >
      View My Work
    </a>
  </section>
);

export default Home;
