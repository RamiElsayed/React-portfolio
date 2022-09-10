const SkillCard = ({ image, name, alt }) => {
  return (
    <div className="shadow-md shadow-[#040c16] hover:scale-110 hover:bg-gray-300 hover:text-gray-700 duration-500 bg-blue-900">
      <img
        className="w-20 h-20 mx-auto object-contain p-2"
        src={image}
        alt={alt}
      />
      <p className="my-4">{name}</p>
    </div>
  );
};

export default SkillCard;
