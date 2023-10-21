import React from "react";
 
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import phero from "../assets/phero.json";
// import {phero} from '../assets/imges/phhh.jpg'
const Achievement = () => {
  return (
    <div>
      <motion.div
        id="education "
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col items-center mt-28 "
      >
        {/* phero */}
        <div
          className=" w-2/3 p-2  card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px]  border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150  hover:-translate-y-16 hover:scale-110 duration-300 ...hover:text-white
       hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 "
        >
          <figure className="mb-2">
          <div className="card-body w-60 rounded-full bg-slate-400 ">
                      <Player
                        src={phero}
                        className="player  "
                        loop
                        autoplay
                      />
            </div>
            {/* <img className=" w-36 h-36 rounded-md" src={phero} alt="" /> */}
          </figure>
          <div className="card-body">
            <div className="mt-8 justify-between">
              <h2 className="card-title text-md font-serif text-purple-950 hover:text-white">
                 Complete Web Development Course With Jhankar Mahbub
              </h2>
            
            </div>
            <h2 className="card-title text-md font-serif text-purple-950 hover:text-white">
              Batch:-7
            </h2>
            
        
          </div>
        </div>


        
      </motion.div>
    </div>
  );
};

export default Achievement;
