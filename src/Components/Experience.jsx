import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import web from "../assets/computer.json";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-purple-100">
        <div className=" hero-content flex-col lg:flex-row ">
            <div className="card-body ms-28   rounded-md border-r-[1px] border-l-[2px] border-b-[2px] border-black shadow-gray-600 bg-purple-950">
                      <Player
                        src={web}
                        className="player  "
                        loop
                        autoplay
                      />
            </div>
          
            <motion.div 
                    initial={{x:'-100%',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
            
            
                 className="-ms-4">
            <div className="mt-3 rounded-md  border-b-[6px] border-r-[4px] border-t-[6px] border-purple-950 w-2/3 bg-gradient-to-r from-purple-200 via-purple-400 to-purple-2000" >
            <h1 className="p-2 text-4xl font-bold text-justify font-serif text-md text-purple-950 ">Hello !!</h1>
            <p className=" p-5 text-justify  font-serif text-purple-950 rounded-lg  shadow-4xl    border-purple-950 hover:animate-bounce    transition-colors duration-100  ">
            Having recently completed my web development training, I am enthusiastic about applying my knowledge in real-world projects. With a strong foundation in front-end technologies and a keen eye for design, I am eager to collaborate with experienced professionals, contribute to innovative web solutions, and expand my expertise in web development.
            </p>
            
          </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
