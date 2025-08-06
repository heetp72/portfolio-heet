const skills = [
  { skill: "Communication", level: "90%" },
  { skill: "Teamwork", level: "85%" },
  { skill: "Presentation Skills", level: "80%" },
  { skill: "Adaptability", level: "95%" },
];

const Skills = () => (
  <section id="skills" className="py-20 bg-gray-800 bg-opacity-70 text-center slide-up">
    <h2 className="text-3xl font-bold mb-10 text-pink-400">Soft Skills</h2>
    <div className="max-w-lg mx-auto space-y-6 text-left">
      {skills.map((s, i) => (
        <div key={i}>
          <p className="mb-1">{s.skill}</p>
          <div className="w-full bg-gray-700 rounded-full h-3">
            <div className="bg-green-400 h-3 rounded-full transition-all duration-1000" style={{ width: s.level }}></div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
