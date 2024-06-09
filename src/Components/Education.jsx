import lu from "../assets/imges/luLogo.jpg";
import clg from "../assets/imges/clglogo.jpg";
import scl from "../assets/imges/sclLogo.jpg";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <motion.div
      id="education"
      initial={{ y: "-100%", opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, delay: 2 }}
      className="flex flex-col items-center mt-28 px-4 md:px-0"
    >
      {/* University */}
      <div className="w-full md:w-2/3 p-2 mb-5 card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px] border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-110 duration-300 hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 hover:text-white hover:z-20">
        <figure className="mb-36">
          <img
            className="p-6 w-24 h-24  md:w-36 md:h-36 rounded-md"
            src={lu}
            alt="LU Logo"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-sm md:text-base font-serif text-purple-950 hover:text-white">
              B.Sc in Computer Science and Engineering
            </h2>
            <button className="btn btn-md btn-circle bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950 text-white">
              3.61/4
            </button>
          </div>
          <h2 className="card-title text-sm md:text-base font-serif text-purple-950 hover:text-white">
            Leading University, Sylhet.
          </h2>
          <p className="text-sm md:text-base text-purple-950 hover:text-white">
            I have graduated with a Bachelor of Science degree in Computer
            Science & Engineering.
          </p>
          <p className="text-sm md:text-base text-purple-950 hover:text-white">
            Year: 2019-2023
          </p>
        </div>
      </div>

      {/* College */}
      <div className="w-full md:w-2/3 p-2 mb-5 card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px] border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-110 duration-300 hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 hover:text-white">
        <figure className="mb-36">
          <img
            className=" p-6 w-24 h-24  md:w-36 md:h-36 rounded-md"
            src={clg}
            alt="College Logo"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-sm md:text-base font-serif text-purple-950 hover:text-white">
              HSC
            </h2>
            <button className="btn btn-md btn-circle bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950 text-white">
              4.83/5
            </button>
          </div>
          <h2 className="card-title text-sm md:text-base font-serif text-purple-950 hover:text-white">
            Sylhet Govt. Women's College, Sylhet.
          </h2>
          <p className="text-sm md:text-base text-purple-950 hover:text-white">
            I finished my Higher Secondary studies here.
          </p>
          <p className="text-sm md:text-base text-purple-950 hover:text-white">
            Year: 2015-2017
          </p>
        </div>
      </div>

      {/* School */}
      <div className="w-full md:w-2/3 p-2 card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px] border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150 hover:-translate-y-16 hover:scale-110 duration-300 hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 hover:text-white">
        <figure className="mb-36">
          <img
            className=" p-6 w-24 h-24  md:w-36 md:h-36 rounded-md"
            src={scl}
            alt="School Logo"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-between">
            <h2 className="card-title text-sm md:text-base font-serif text-purple-950 hover:text-white">
              SSC
            </h2>
            <button className="btn btn-md btn-circle bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950 text-white">
              5
            </button>
          </div>
          <h2 className="card-title text-sm md:text-base font-serif text-purple-950 hover:text-white">
            Government Agragami Girls High School and College Sylhet
          </h2>
          <p className="text-sm md:text-base text-purple-950 hover:text-white">
            I finished my Secondary studies here.
          </p>
          <p className="text-sm md:text-base text-purple-950 hover:text-white">
            Year: 2013-2015
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
