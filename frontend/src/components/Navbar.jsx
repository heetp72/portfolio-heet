const sections = ["Home", "About", "Experience", "Education", "Projects", "Resume", "Expertise", "Certifications", "Skills", "Contact"];

const Navbar = () => (
  <nav className="fixed top-0 left-0 w-full bg-white shadow-lg z-50 flex justify-between items-center px-8 py-4">
    <h1 className="text-2xl font-bold text-blue-600 hover:text-blue-400 transition duration-300 cursor-pointer">
      Heet KaPatel
    </h1>
    <ul className="flex space-x-6 text-lg font-medium text-gray-700">
      {sections.map((item) => (
        <li key={item}>
          <a 
            href={`#${item.toLowerCase()}`} 
            className="hover:text-blue-500 transition duration-300"
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navbar;
