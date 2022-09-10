import ProjectCard from '../components/ProjectCard';
import projects from '../data/projects';

const Work = () => {
  return (
    <div
      name="work"
      className="w-full md:min-h-screen text-gray-300 bg-[#0a192f]"
    >
      <div className="max-w-7xl mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
