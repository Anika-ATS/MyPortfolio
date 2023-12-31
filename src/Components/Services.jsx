import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import {SiTailwindcss} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import Skill from "../assets/html.json";
import {FaReact} from "react-icons/fa";
import {BsBootstrapFill} from "react-icons/bs";
// import {BiLogoNetlify} from "react-icons/bi";
import {SiExpress} from "react-icons/si";
import {IoLogoFirebase} from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import {SiMongodb} from "react-icons/si";

import { motion } from "framer-motion";



const Services = () => {
  return (
    <div      
        className="h-min   bg-purple-200" id="skill">
      <div className="mx-5 flex ">
        <div className="mx-5 w-12 mt-5 ">
          <Player src={Skill} className="player  " loop autoplay />
        </div>
        <h1 className=" text-4xl font-bold text-purple-950 mt-8">My Skills </h1>
      </div>
      
      
      
      <div className="mx-40 grid grid-cols-5">
        {/* 1 */}
        <motion.div  initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:2.8,delay:2.8}}
        className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">HTML</h1>
          <div className="card-body ">
            <div>

              <figure >
                <AiFillHtml5 className="w-16 h-10"></AiFillHtml5>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
               
               

            </div>
          </div>
        </motion.div>




        {/* 2 */}
        <motion.div   initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:2.6,delay:2.6}}    
        className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">CSS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <FaCss3Alt className="w-16 h-10"></FaCss3Alt>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
             

            </div>
          </div>
        </ motion.div>

        {/* 3 */}
        <motion.div initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:2.3,delay:2.3}}
        
         className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-sm text-purple-200">Tailwind CSS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
               
                <SiTailwindcss className="w-16 h-10 "></SiTailwindcss>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
   

            </div>
          </div>
        </motion.div>

        {/* 4 */}
        <motion.div  initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:0.5,delay:0.5}}
                       className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">Bootstrap</h1>
          <div className="card-body ">
            <div>
             
              <figure>
               
                <BsBootstrapFill className="w-16 h-10"></BsBootstrapFill>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                
              

            </div>
          </div>
        </motion.div>


        {/* 5 */}
        <motion.div initial={{x:'+100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:0.9,delay:0.9}}
                       className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">
            Java Script</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <IoLogoJavascript className="w-16 h-10 "></IoLogoJavascript>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
           

            </div>
          </div>
        </motion.div>


        {/* 6 */}
        <motion.div  initial={{x:'+100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:1.2,delay:1.2}}
                      className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">React JS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <FaReact className="w-16 h-10"></FaReact>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                

            </div>
          </div>
        </motion.div>
        



        {/* 7 */}
        <motion.div initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:1.3,delay:1.3}}
                       className=" w-4/5 mb-10 h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">Express JS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <SiExpress className="w-16 h-10"></SiExpress>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                

            </div>
          </div>
        </motion.div>


        {/* 8 */}
        <motion.div  initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:1,delay:1}}
                       className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">Firebase</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <IoLogoFirebase className="w-16 h-10"></IoLogoFirebase>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                

            </div>
          </div>
        </motion.div>


        {/* 9*/}
        <motion.div   initial={{x:'-100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:0.8,delay:0.8}} 
                      className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">Mongo DB</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <SiMongodb className="w-16 h-10"></SiMongodb>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
             
        

            </div>
          </div>
        </motion.div>

        {/* 10 */}

        <motion.div  initial={{x:'+100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:0.2,delay:0.2}}
                       className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">MySQL</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <DiMysql className="w-16 h-10"></DiMysql >
                
              </figure>
            </div>

            <div className="card-actions justify-end">
                
            
        

            </div>
          </div>
        </motion.div>

        {/* 11 */}
        {/* <motion.div initial={{x:'+100%',opacity:0}}
                      animate={{x:0,opacity:1}}
                      transition={{duration:.5,delay:.5}}
                       className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4  bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 border-purple-950 hover:animate-bounce    transition-colors duration-100 ">
          <h1 className="mt-2 mx-2 font-serif font-semibold text-md text-purple-200">Netlify</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <BiLogoNetlify className="w-16 h-10"></BiLogoNetlify>
              </figure>
            </div>

            <div className="card-actions justify-end">
       
        

            </div>
          </div>
        </motion.div> */}

      </div>
    </div>
  );
};

export default Services;
