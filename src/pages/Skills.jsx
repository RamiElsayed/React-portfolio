import skills from '../data/skills';
import SkillCard from '../components/SkillCard';

const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full min-h-screen bg-[#0a192f] text-gray-300 cursor-pointer"
    >
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline border-b-4 border-pink-600">
            Experience
          </p>
          <p className="py-4">These are the technologies I've worked with:</p>
        </div>
        {/* TODO: sort out attributions to images later */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {skills.map((item, i) => (
            <SkillCard {...item} key={item.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
