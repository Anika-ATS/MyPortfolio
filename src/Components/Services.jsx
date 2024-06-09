import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoFirebase } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { Player } from "@lottiefiles/react-lottie-player";
import { motion } from "framer-motion";
import Skill from "../assets/html.json";

const skills = [
  {
    name: "HTML",
    icon: <AiFillHtml5 className="w-16 h-10" />,
    duration: 2.8,
    delay: 2.8,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt className="w-16 h-10" />,
    duration: 2.6,
    delay: 2.6,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="w-16 h-10" />,
    duration: 2.3,
    delay: 2.3,
  },
  {
    name: "Bootstrap",
    icon: <FaReact className="w-16 h-10" />,
    duration: 0.5,
    delay: 0.5,
  },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript className="w-16 h-10" />,
    duration: 0.9,
    delay: 0.9,
  },
  {
    name: "React JS",
    icon: <FaReact className="w-16 h-10" />,
    duration: 1.2,
    delay: 1.2,
  },
  {
    name: "Express JS",
    icon: <SiExpress className="w-16 h-10" />,
    duration: 1.3,
    delay: 1.3,
  },
  {
    name: "Firebase",
    icon: <IoLogoFirebase className="w-16 h-10" />,
    duration: 1,
    delay: 1,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb className="w-16 h-10" />,
    duration: 0.8,
    delay: 0.8,
  },
  {
    name: "MySQL",
    icon: <DiMysql className="w-16 h-10" />,
    duration: 0.2,
    delay: 0.2,
  },
];

const Services = () => {
  return (
    <div className="h-min bg-purple-200" id="skill">
      <div className="mx-5 flex">
        <div className="mx-5 w-12 mt-16">
          <Player src={Skill} className="player" loop autoplay />
        </div>
        <h1 className="text-4xl font-bold text-purple-950 mt-16 mb-5">
          My Skills
        </h1>
      </div>
      <div className="mx-40 p-10  grid grid-rows-1 gap-5 md:grid-rows-1 md:gap-5 md:py-9  lg:grid-cols-5 lg:gap-8  lg:py-4 ">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{
              x:
                skill.name.includes("Java") || skill.name.includes("MySQL")
                  ? "+100%"
                  : "-100%",
              opacity: 0,
            }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: skill.duration, delay: skill.delay }}
            className="w-4/5 h-40 rounded-lg shadow-4xl border border-y-4 bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce transition-colors duration-100"
          >
            <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">
              {skill.name}
            </h1>
            <div className="card-body flex justify-center items-center">
              {skill.icon}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Services;
