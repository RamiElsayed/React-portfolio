import { HiArrowNarrowRight, HiArrowNarrowDown } from "react-icons/hi";
import { Link } from "react-scroll";

function Home() {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="container flex flex-col lg:flex-row items-center justify-center h-full mx-auto space-y-20 lg:space-x-20">
        <div className="max-w-[1000px] px-8 flex flex-col justify-center lg:h-full">
          <p className="text-pink-600">Hi, My name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
            Rami Elsayed
          </h1>
          <h2 className="text-4xl sm:text:text-7xl font-bold text-[#8892b0]">
            I'm a full stack web developer
          </h2>
          <p className="text-[#8892b0] py-4 max-w-[500px]">
            I strive to contribute to producing high quality, maintainable applications and systems and always try to add real value where possible.
            I keep up to date with the latest technologies and always look for opportunities in which they can improve the productivity of myself and the team.
            Additionally, I have a keen interest in the design and architecture of applications and systems as well as learning about clients’ requirements, motivations and businesses.
          </p>
          <div>
            <Link to="work" smooth={true} duration={500} offset={-80}>
              <button className=" text-white group border-2 px-6 py-3 my-2 flex items-center mx-auto lg:mx-0 hover:bg-pink-600 hover:border-pink-600 hover:animate-radiate">
                View Work
                <span className="block group-hover:hidden">
                  <HiArrowNarrowRight className="ml-3" />
                </span>
                <span className="hidden group-hover:block">
                  <HiArrowNarrowDown className="ml-3" />
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div>
          <div>
            <img
              className="w-64 h-64"
              src="https://avatars.githubusercontent.com/u/81489678?s=400&u=b52413821edc99357a15930578893bc42d18eaf3&v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
