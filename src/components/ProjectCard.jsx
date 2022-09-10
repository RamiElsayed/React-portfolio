import { IoIosRocket } from 'react-icons/io';
import { FaCode } from 'react-icons/fa';
const ProjectCard = ({
  image,
  alt,
  title,
  description,
  repositoryLink,
  deployedLink,
}) => {
  return (
    <div className="card group max-w-sm bg-base-100 shadow-xl rounded-none mx-auto cursor-pointer">
      <figure className="h-52 overflow-hidden">
        <img
          className="w-full h-full object-cover object-top p-4 bg-blue-900 group-hover:bg-gray-300 group-hover:text-gray-700 duration-500"
          src={image}
          alt={alt}
        />
      </figure>
      <div className="card-body bg-blue-900 space-y-2 group-hover:bg-gray-300 group-hover:text-gray-700 duration-500">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-sm">{description}</p>
        <div className="mx-auto space-x-6">
          {deployedLink ? (
            <a href={deployedLink} target="_blank" rel="noreferrer">
              <button className="btn bg-[#e31a6d] mx-auto">
                <IoIosRocket />
              </button>
            </a>
          ) : (
            ''
          )}
          <a href={repositoryLink} target="_blank" rel="noreferrer">
            <button className="btn bg-[#e31a6d] mx-auto">
              <FaCode />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
