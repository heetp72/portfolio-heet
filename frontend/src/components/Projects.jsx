const projects = [
  { title: "Railway Ticket Reservation System", tech: "PHP, MySQL, JS", link: "https://github.com/heetp72/Railway-Ticket-Reservation-System" },
  { title: "Quick Serve", tech: "PHP, HTML, CSS, JS", link: "https://github.com/heetp72/QuickServe" },
  { title: "Open Quiz Master", tech: "React, Vite, Open Trivia API", link: "https://github.com/heetp72/React-Open-Quiz-Master-" },
  { title: "Interactive Portfolio Website", tech: "React + Tailwind CSS", link: "https://github.com/your-github-repo-for-portfolio" }
];

const Projects = () => (
  <section id="projects" className="py-20 bg-gray-900 bg-opacity-80 text-center slide-up">
    <h2 className="text-3xl font-bold mb-10 text-green-400">Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-6 md:px-20">
      {projects.map((p, i) => (
        <a key={i} href={p.link} target="_blank" rel="noopener noreferrer"
           className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:scale-105 hover:shadow-green-400/50 transition duration-300 cursor-pointer">
          <h3 className="text-xl font-semibold text-yellow-300 mb-2">{p.title}</h3>
          <p className="text-gray-300 text-sm">{p.tech}</p>
        </a>
      ))}
    </div>
  </section>
);

export default Projects;
