import React from "react";

import { Player } from "@lottiefiles/react-lottie-player";
import contact2 from "../assets/contact2.json";
import { motion } from "framer-motion";

const Contacts = () => {
  return (
    <div id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className=" min-h-screen  flex  bg-purple-100 "
      >
        {/* 1st section */}
        <div className="w-1/2 mx-10">
          <div className="py-9 font-serif mx-10">
            <p className="text-3xl font-semibold text-purple-950">
               Contact me!!
            </p>

            <div className=" mx-20 mt-16 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-pink-300 via-purple-400 to-pink-200 ">
                <form className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" className="input input-bordered" required />
                    </div>




                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Message</span>
                    </label>
                    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
                    
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn bg-gradient-to-r from-pink-300 via-purple-400 to-pink-200 text-purple-950">Contact</button>
                    </div>
                </form>
            </div>
          


          </div>
        </div>

        {/* 2nd section*/}
        <div className="w-1/2 ">
          <div className="-ms-8  font-serif ">
          <div className="card-body  rounded-md  shadow-gray-600 ">
                      <Player
                        src={contact2}
                        className="player   "
                        loop
                        autoplay
                      />
            </div>
            
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
