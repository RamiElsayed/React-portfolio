const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full sm:grid grid-cols-2 gap-8 px-4 space-y-6 sm:space-y-0">
          <div className="sm:text-right text-4xl font-bold ">
            <p>
              My name is Rami and yes it's short for Ramasis the Ancient
              Egyptian King
            </p>
          </div>
          <div className="space-y-2">
            <p>
              A full stack web developer always seeking to learn new ways and technologies to build new applications that will help make life easier.
            </p>
            <p>
              I've recently undertaken and obtained a certificate in full stack
              development from the University of Birmingham with strong
              foundations in many languages and frameworks.
            </p>
            <p>
              Originally pursued accountancy degree, I'm a motivated problem
              solver who enjoys logical and analytical thinking, with a strong
              focus in mobile first design and development.
            </p>
            <p>
              I'm very passionate about developing web applications to build and
              change people's lives and experiences for the better. Also open
              for new and exciting opportunities!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
