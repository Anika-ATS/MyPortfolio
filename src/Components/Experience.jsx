import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import web from "../assets/computer.json";
import { motion } from "framer-motion";
import phero from "../assets/phero.json";

const Experience = () => {
  return (
    <div>
      <div className="hero min-h-screen mt-10 bg-purple-100 flex flex-col gap-6">
        <div className=" hero-content flex flex-col md:flex-col lg:flex-row ">
          <div className="card-body ms-10 mb-16 mt-10 rounded-md border-r-[1px] border-l-[2px] border-b-[2px] border-black shadow-gray-600 bg-purple-950  md:ms-20 lg:ms-28">
            <Player src={web} className="player  " loop autoplay />
          </div>

          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="-ms-4  flex flex-col"
          >
            <div className="ms-20 -mt-4 rounded-md  border-b-[6px] border-r-[4px] border-t-[6px] border-purple-950 w-2/3 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-2000 lg:ms-0 md:ms-32">
              <h1 className="p-2 text-4xl font-bold text-justify font-serif text-md text-purple-950 ">
                Hello !!
              </h1>
              <p className=" p-5 text-justify  font-serif text-purple-950 rounded-lg  shadow-4xl    border-purple-950 hover:animate-bounce    transition-colors duration-100  ">
                Having recently completed my web development training, I am
                enthusiastic about applying my knowledge in real-world projects.
                With a strong foundation in both front-end and back-end
                technologies and a keen eye for design, I am eager to
                collaborate with experienced professionals, contribute to
                innovative web solutions, and expand my expertise in full stack
                development. Passionate about creating seamless, responsive, and
                engaging user interfaces as well as robust and efficient backend
                systems, I am also currently pursuing TypeScript to enhance my
                coding skills and deliver more scalable and maintainable code.
                Let's build something amazing together!
              </p>
            </div>
          </motion.div>
        </div>

        {/* second  */}

        <div
          className="w-full md:w-2/3 p-4 card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px] border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-105 duration-300 hover:text-white hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400
         lg:hover:text-white md:hover:text-white"
        >
          <div className="card-body flex flex-col justify-center items-center md:items-start">
            <h1 className="card-title text-md font-serif text-purple-950 hover:text-white text-center md:text-left  lg:text-left  lg:text-xl ">
              Graduate Research Assistant | InteX Research Lab, Leading
              University, Sylhet, Bangladesh.
            </h1>

            <h1 className=" text-md font-serif text-purple-950 hover:text-white text-center md:text-left  md:text-lg">
              {" "}
              Contributed to research projects related to diabetes, which were
              published at the IEEE 3rd CONIT 2023 conference.
            </h1>

            <h1 className=" text-md font-serif text-purple-950 hover:text-white text-center md:text-left">
              Collaborated with faculty in data analysis and experimentation,
              demonstrating strong analytical and teamwork skills.
            </h1>
            <h1 className=" text-md font-serif text-purple-950 hover:text-white text-center md:text-left">
              Gained experience in managing research projects, from data
              collection to publication.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
