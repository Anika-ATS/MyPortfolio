import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";
import {SiTailwindcss} from "react-icons/si";
import {IoLogoJavascript} from "react-icons/io";
import Skill from "../assets/animation_lnr4vvfz.json";
import {FaReact} from "react-icons/fa";
import {BsBootstrapFill} from "react-icons/bs";
import {SiExpress} from "react-icons/si";
import {IoLogoFirebase} from "react-icons/io5";
import {SiMongodb} from "react-icons/si";



const Services = () => {
  return (
    <div className="h-min   bg-purple-200" id="skill">
      <div className="mx-5 flex ">
        <div className="mx-5 w-12 mt-5 ">
          <Player src={Skill} className="player  " loop autoplay />
        </div>
        <h1 className=" text-4xl font-bold text-purple-950 mt-8">My Skills </h1>
      </div>
      <div className="mx-40 grid grid-cols-5  ">
        {/* 1 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-4xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">HTML</h1>
          <div className="card-body ">
            <div>

             
             
              <figure>
                <AiFillHtml5 className="w-20 h-10"></AiFillHtml5>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="90"
                    max="100"
                ></progress>
               

            </div>
          </div>
        </div>


        {/* 2 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">CSS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <FaCss3Alt className="w-20 h-10"></FaCss3Alt>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="90"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>

        {/* 3 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">Tailwind CSS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
               
                <SiTailwindcss className="w-20 h-10"></SiTailwindcss>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="80"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>

        {/* 4 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">Bootstrap</h1>
          <div className="card-body ">
            <div>
             
              <figure>
               
                <BsBootstrapFill className="w-20 h-10"></BsBootstrapFill>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="70"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>


        {/* 5 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">Java Script</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <IoLogoJavascript className="w-20 h-10"></IoLogoJavascript>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="90"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>


        {/* 6 */}
        <div className=" mb-10 w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">React JS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <FaReact className="w-20 h-10"></FaReact>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="90"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>
        



        {/* 7 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 mb-5 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">Express JS</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <SiExpress className="w-20 h-10"></SiExpress>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="80"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>


        {/* 8 */}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 mb-5">
          <h1 className="mx-2 font-bold text-lg text-purple-950">Firebase</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <IoLogoFirebase className="w-20 h-10"></IoLogoFirebase>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="95"
                    max="100"
                ></progress>
                {/* <p className="mx-10">HTML</p> */}

            </div>
          </div>
        </div>


        {/* 9*/}
        <div className=" w-4/5  h-40 rounded-lg  mt-10 shadow-2xl  border border-y-4 bg-purple-200 border-purple-950 group hover:animate-bounce bg-gradient-to-b hover:from-purple-400 hover:to-purple-300 transition-colors duration-100 ">
          <h1 className="mx-2 font-bold text-lg text-purple-950">Mongo DB</h1>
          <div className="card-body ">
            <div>
             
              <figure>
                <SiMongodb className="w-20 h-10"></SiMongodb>
              </figure>
            </div>

            <div className="card-actions justify-end">
                
                <progress
                    className="progress progress-secondary w-56 mt-1"
                    value="80"
                    max="100"
                ></progress>
        

            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Services;
