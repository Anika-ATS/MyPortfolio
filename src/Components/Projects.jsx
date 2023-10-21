import React from "react";
import { motion } from "framer-motion";

import { BsLink45Deg } from "react-icons/bs";
import { BsGithub } from "react-icons/bs"; 

import Nyamapic from "../assets/imges/animal1.jpg";
import pilates from "../assets/imges/P1.1.webp";
import chef from "../assets/imges/thali.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="w-full flex flex-col gap-20 bg-purple-200"
      >
        <div className="mt-10 mx-auto font-serif">
          <p className="mx-auto text-3xl font-semibold text-purple-950">
            My Projects
          </p>
        </div>
        {/* 1st section */}
        <div className="mx-10 ">
          <div className="mb-16  w-full flex flex-col-3 gap-10 ">
            {/* 1st project */}
            <motion.div  initial={{x:'-100%',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:2,delay:2}}
             className="card w-96   ... ring-2 ring-purple-950  shadow-4xl bg-gradient-to-r from-purple-900 via-purple-400 to-pink-400 hover:text-white   hover:z-50 ">
              <figure className="px-10 pt-10">
                <img src={pilates} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex flex-row gap-6">
                <h2 className="card-title bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 text-md  text-justify font-serif hover:text-white">
                    Pilates Butterfly 
                    {/* <span><TbYoga className="mt-6 w-8 h-6"></TbYoga></span> */}
                </h2>
                <div className="card-actions flex  flex-row gap-1">
                  <div className="flex  gap-3">
                    <a href="https://pilates-21c07.web.app/">
                      <button className="btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsLink45Deg className="text-white"></BsLink45Deg>
                      </button>
                    </a>
               
                  </div>

                  <div className="flex  gap-2">
                    <a href="https://github.com/Anika-ATS/Pilates-client">
                      <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsGithub className="text-white"></BsGithub>
                      </button>
                    </a>
                
                  </div>
                  <div className="flex  gap-2">
                    <a href="https://github.com/Anika-ATS/Pilates-server">
                      <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsGithub className="text-white"></BsGithub>
                      </button>
                    </a>
                
                  </div>
                </div>
                </div>
                <p className="p-1 mx-2  text-sm text-justify font-serif  ">
                  
                  {/* Yoga is the journey of the self, through the self, to the self. */}
            
                   Pilates Butterfly is a specialized yoga platform for children and young individuals, offering classes to nurture both body and mind. Through yoga, we learn to stay calm, stress-free, and enthusiastic, enhancing our daily lives. By fostering regular yoga practices, we create positive change not only in ourselves but also in society. Instilling these transformative practices in our youth is crucial as they represent the future.
                </p>
               
              </div>
            </motion.div>

            {/* 2nd project */}
            <motion.div  initial={{x:'-100%',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1.5,delay:1.5}}
                className="card w-96   ... ring-2 ring-purple-950  shadow-4xl bg-gradient-to-r from-purple-900 via-purple-400 to-pink-400 hover:text-white   hover:z-50 ">
              <figure className="px-10 pt-10">
                <img src={Nyamapic} alt="" className="rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex flex-row gap-8">
                <h2 className="card-title bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 text-md  text-justify font-serif hover:text-white">
                    Nyama Hoard!
                </h2>
                <div className="card-actions flex  flex-row gap-1">
                  <div className="flex  gap-2">
                    <a href="https://nyama-hoard.web.app/">
                      <button className="btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsLink45Deg className="text-white"></BsLink45Deg>
                      </button>
                    </a>
                    {/* <p> Live Website</p> */}
                  </div>

                  <div className="flex  gap-2">
                    <a href="https://github.com/Anika-ATS/NayamaHoard-client">
                      <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsGithub className="text-white"></BsGithub>
                      </button>
                    </a>
                    {/* <p> Client Side</p> */}
                  </div>
                  <div className="flex  gap-2">
                    <a href="https://github.com/Anika-ATS/NyamaHoard-server">
                      <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsGithub className="text-white"></BsGithub>
                      </button>
                    </a>
                    {/* <p> Server Side </p> */}
                  </div>
                </div>
                </div>
                <p className="p-1 mx-2  text-sm text-justify font-serif  ">
                  Nyama Hoard is website of soft animal toys shop for kids.We
                  have a vision that if childen play with animal soft toys they
                  will easilly fimiliar with different kinds of animal and that
                  will helps there growth and intelligence. They do not feel
                  bore to know them from book and they will also can know about
                  animals characteristics while playing with these items
                  easily.they can memorise them with fun.{" "}
                </p>
               
              </div>
            </motion.div>


            {/* 3rd project */}
            <motion.div  initial={{x:'-100%',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:1,delay:1}}
             className="card w-96   ... ring-2 ring-purple-950  shadow-4xl bg-gradient-to-r from-purple-900 via-purple-400 to-pink-400 hover:text-white   hover:z-50 ">
              <figure className="px-10 pt-8">
                <img src={chef} alt="" className="h-48 w-64 rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex flex-row gap-11">
                <h2 className="card-title bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-400 to-pink-200 text-sm  text-justify font-serif hover:text-white ">
                  ChefVerse Bangal
                </h2>
                <div className="card-actions flex  flex-row gap-1">
                  <div className="flex  gap-2">
                    <a href="https://bongochef-155d4.web.app/">
                      <button className="btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsLink45Deg className="text-white"></BsLink45Deg>
                      </button>
                    </a>
                    {/* <p> Live Website</p> */}
                  </div>

                  <div className="flex  gap-2">
                    <a href="https://github.com/Anika-ATS/BongoChef-client">
                      <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsGithub className="text-white"></BsGithub>
                      </button>
                    </a>
                    {/* <p> Client Side</p> */}
                  </div>
                  <div className="flex  gap-2">
                    <a href="https://github.com/Anika-ATS/BongoChef-server">
                      <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                        <BsGithub className="text-white"></BsGithub>
                      </button>
                    </a>
              
                  </div>
                </div>
                </div>
                <p className="p-1 mx-2  text-xs text-justify font-serif  ">
                  
                    ChefVerse Bangal is a dedicated platform for Bengali chefs, celebrating the culinary expertise of the Bangali community. ChefVerse Bangal is a culinary treasure trove, celebrating the rich and diverse culinary heritage of Bengal. From the aromatic masalas to the unique regional dishes, your website seems to be a delightful journey into the heart of Bengali cuisine. With skilled chefs well-versed in various preparation techniques and a menu boasting a variety of authentic dishes, including desserts and diverse thali options, ChefVerse Bangle appears to be a haven for food enthusiasts looking to savor the true flavors of Bengal.{" "}
                </p>
               
              </div>
            </motion.div>







          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
