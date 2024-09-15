import React from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import phero from "../assets/phero.json";

const Achievement = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        id="education"
        initial={{ y: "-100%", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="flex flex-col gap-8 mb-16 items-center mt-28 w-full max-w-4xl"
      >
        {/* phero */}
        <div className="w-full md:w-2/3 p-4 card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px] border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-105 duration-300 hover:text-white hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400">
          <figure className="mb-2 flex justify-center items-center">
            <div className="card-body lg:rounded-full lg:bg-slate-400 lg:w-60">
              <Player src={phero} className="player w-full" loop autoplay />
            </div>
          </figure>
          <div className="card-body flex flex-col justify-center items-center md:items-start">
            <h2 className="card-title text-md font-serif text-purple-950 hover:text-white text-center md:text-left">
              Complete Web Development Course With Jhankar Mahbub
            </h2>
            <h2 className="card-title text-md font-serif text-purple-950 hover:text-white text-center md:text-left">
              Batch:-7
            </h2>
          </div>
        </div>

        {/* second  */}
        <div className="w-full md:w-2/3 p-4 card card-side bg-purple-100 shadow-4xl shadow-black border-l-[6px] border-b-[4px] border-purple-950 border-r-[1px] border-t-[1px] border-r-purple-300 border-t-purple-300 transition ease-in-out delay-150 hover:-translate-y-4 hover:scale-105 duration-300 hover:text-white hover:bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400">
          <figure className="mb-2 flex justify-center items-center">
            <div className="card-body lg:rounded-full lg:bg-slate-400 lg:w-40">
              <Player src={phero} className="player w-full" loop autoplay />
            </div>
          </figure>
          <div className="card-body flex flex-col justify-center items-center md:items-start">
            <h2 className="card-title text-md font-serif text-purple-950 hover:text-white text-center md:text-left ">
              Programming hero Next Level
            </h2>
            <h2 className="card-title text-md font-serif text-purple-950 hover:text-white text-center md:text-left">
              Batch:-2
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievement;
