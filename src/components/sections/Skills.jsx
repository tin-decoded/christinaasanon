import { techIcons } from "/src/data/aboutData";

const Skills = () => {
  return (
    <div className="flex flex-wrap gap-3 pb-5">
      {Object.entries(techIcons).map(([key, tech], index) => (
        <div
          key={index}
          className="flex items-center gap-2 px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-md shadow-sm hover:scale-105 transition-transform duration-200"
        >
          <img
            src={tech.url}
            alt={tech.name}
            className="w-5 h-5 lg:w-6 lg:h-6 object-contain"
          />
          <span className="text-xs lg:text-sm text-gray-300 font-medium">
            {tech.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Skills;
