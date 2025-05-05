import React from "react";
import { motion } from "framer-motion";

import { BsLink45Deg } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";

// import Nyamapic from "../assets/imges/animal1.jpg";
import c from "../assets/imges/bgggg2.png";
import pilates from "../assets/imges/P1.1.webp";
import portfolio from "../assets/imges/portfoliopic.jpg";

const Projects = () => {
  return (
    <div id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className="w-full  flex flex-col gap-20  bg-purple-200"
      >
        <div className="mt-10 mx-auto font-serif">
          <p className="mx-auto text-3xl font-semibold text-purple-950">
            Projects
          </p>
        </div>
        {/* 1st section */}
        <div className="mx-auto ">
          <div className=" mb-16 w-full grid grid-rows-1 gap-8 md:grid-rows-1 md:gap-5 md:mx-auto md:flex-row-1 lg:flex flex-col-3 lg:gap-7">
            {/* portfolio project */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="card w-72 mx-auto   ... ring-2 ring-purple-950  shadow-4xl  bg-gradient-to-r from-purple-900  to-pink-300 hover:text-white  hover:z-50
              lg:w-96 lg:mx-0  md:w-96 md:mx-0 "
            >
              <figure className="px-10 pt-8">
                <img src={portfolio} alt="" className="h-48 w-64 rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex flex-col gap-3">
                  <h2 className=" text-white  card-title text-justify font-serif  text-md">
                    Personal Portfolio
                  </h2>
                  <div className="card-actions flex  flex-row gap-1">
                    <div className="flex  gap-2">
                      <a href="https://66e717a7af8a912279cd254d--preeminent-chimera-6d9b4d.netlify.app/">
                        <button className="mx-3 btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsLink45Deg className="text-white"></BsLink45Deg>
                        </button>
                      </a>
                    </div>

                    <div className="flex  gap-1">
                      <a href="https://github.com/Anika-ATS/MyPortfolio">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                    <div className="flex  gap-2">
                      {/* <a href="https://github.com/Anika-ATS/BongoChef-server">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a> */}
                    </div>
                  </div>
                </div>
                <p className="p-1 mx-2 text-white   text-xs text-justify font-serif  ">
                  Hi,this is me,Anika, a passionate MERN stack developer with a
                  focus on front-end design. With a degree in Computer Science
                  and Engineering, I enjoy creating user-friendly websites that
                  simplify modern life. Proficient in HTML, CSS, JavaScript,
                  Reactjs, Tailwind CSS,DaisyUi I transform concepts into
                  visually engaging websites. Recently, I've been exploring
                  back-end technologies and pursuing TypeScript to enhance my
                  skills further. I'm dedicated to mastering both front-end and
                  back-end development, making innovation my driving force{" "}
                </p>
              </div>
            </motion.div>

            {/* pilatesct */}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 2, delay: 2 }}
              className="card w-72 mx-auto   ... ring-2 ring-purple-950  shadow-4xl  bg-gradient-to-r from-purple-900  to-pink-300 hover:text-white  hover:z-50
              lg:w-96 lg:mx-0 md:w-96 md:mx-0  "
            >
              <figure className="px-10 pt-5">
                <img src={pilates} alt="" className="rounded-xl" />
              </figure>

              {/* bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 */}
              <div className="card-body items-center text-center">
                <div className="flex flex-col gap-4">
                  <h2 className="card-title  text-md  text-justify font-serif text-white">
                    Pilates Butterfly
                    {/* <span><TbYoga className="mt-6 w-8 h-6"></TbYoga></span> */}
                  </h2>
                  <div className="card-actions flex  flex-row gap-1">
                    <div className="flex  gap-3">
                      <a href="https://pilates-21c07.web.app/">
                        <button className="mx-3 btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsLink45Deg className="text-white"></BsLink45Deg>
                        </button>
                      </a>
                    </div>

                    <div className="flex  gap-1">
                      <a href="https://github.com/Anika-ATS/Pilates-client">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                    <div className="flex  gap-2">
                      <a href="mx-3 https://github.com/Anika-ATS/Pilates-server">
                        <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <p className="p-1 mx-2 text-white  text-sm text-justify font-serif  ">
                  {/* Yoga is the journey of the self, through the self, to the self. */}
                  Pilates Butterfly is a specialized yoga platform for children
                  and young individuals, offering classes to nurture both body
                  and mind. Through yoga, we learn to stay calm, stress-free,
                  and enthusiastic, enhancing our daily lives. By fostering
                  regular yoga practices, we create positive change not only in
                  ourselves but also in society. Instilling these transformative
                  practices in our youth is crucial as they represent the
                  future.
                </p>
              </div>
            </motion.div>

            {/* project cake*/}
            <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="card w-72 mx-auto   ... ring-2 ring-purple-950  shadow-4xl  bg-gradient-to-r from-purple-900  to-pink-300 hover:text-white  hover:z-50
              lg:w-96 lg:mx-3 md:w-96 md:mx-0  "
            >
              <figure className="px-10 pt-10">
                <img src={c} alt="" className="rounded-xl" />
              </figure>

              {/* group-hover:bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-pink-400 to-pink-200 */}
              <div className="card-body items-center text-center">
                <div className="flex flex-col gap-3">
                  <h2 className="card-title text-white text-md  text-justify font-serif    hover:text-ink-200 ">
                    Falguni's Cake shop
                  </h2>
                  <div className="card-actions flex  flex-row gap-2">
                    <div className="flex  gap-3">
                      <a href="https://falguniscake.netlify.app/">
                        <button className="mx-3 btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsLink45Deg className="text-white"></BsLink45Deg>
                        </button>
                      </a>
                      {/* <p> Live Website</p> */}
                    </div>

                    <div className="flex  gap-1">
                      <a href="https://github.com/Anika-ATS/FalguniResturant">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                      {/* <p> Client Side</p> */}
                    </div>
                    {/* <div className="flex  gap-2">
                      <a href="https://github.com/Anika-ATS/NyamaHoard-server">
                        <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                   
                    </div> */}
                  </div>
                </div>
                <p className="p-1 mx-2 text-white   text-sm text-justify font-serif  ">
                  Falguni's Cake Bakery brings the warmth of homemade goodness
                  to your celebrations. Each cake is freshly baked at home with
                  care, love, and premium ingredients. From simple delights to
                  customized creations, we make every order feel special.
                  Perfect for birthdays, get-togethers, or just
                  because—experience the cozy charm of homemade sweetness.
                </p>
              </div>
            </motion.div>

            {/* Nayama hoyard */}
            {/* 2nd project */}
            {/* <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="card w-72 mx-auto   ... ring-2 ring-purple-950  shadow-4xl  bg-gradient-to-r from-purple-900  to-pink-300 hover:text-white  hover:z-50
              lg:w-96 lg:mx-3 md:w-96 md:mx-0  "
            >
              <figure className="px-10 pt-10">
                <img src={Nyamapic} alt="" className="rounded-xl" />
              </figure>

              <div className="card-body items-center text-center">
                <div className="flex flex-col gap-3">
                  <h2 className="card-title text-white text-md  text-justify font-serif    hover:text-ink-200 ">
                    Nyama Hoard!
                  </h2>
                  <div className="card-actions flex  flex-row gap-2">
                    <div className="flex  gap-3">
                      <a href="https://nyama-hoard.web.app/">
                        <button className="mx-3 btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsLink45Deg className="text-white"></BsLink45Deg>
                        </button>
                      </a>
                    </div>

                    <div className="flex  gap-1">
                      <a href="https://github.com/Anika-ATS/NayamaHoard-client">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                    <div className="flex  gap-2">
                      <a href="https://github.com/Anika-ATS/NyamaHoard-server">
                        <button className="btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <p className="p-1 mx-2 text-white   text-sm text-justify font-serif  ">
                  Nyama Hoard is website of soft animal toys shop for kids.We
                  have a vision that if childen play with animal soft toys they
                  will easilly fimiliar with different kinds of animal and that
                  will helps there growth and intelligence. They do not feel
                  bore to know them from book and they will also can know about
                  animals characteristics while playing with these items
                  easily.they can memorise them with fun.{" "}
                </p>
              </div>
            </motion.div> */}

            {/* 3rd project */}
            {/* <motion.div
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="card w-72 mx-auto   ... ring-2 ring-purple-950  shadow-4xl  bg-gradient-to-r from-purple-900  to-pink-300 hover:text-white  hover:z-50
              lg:w-96 lg:mx-0  md:w-96 md:mx-0 "
            >
              <figure className="px-10 pt-8">
                <img src={chef} alt="" className="h-48 w-64 rounded-xl" />
              </figure>
              <div className="card-body items-center text-center">
                <div className="flex flex-col gap-3">
                  <h2 className=" text-white  card-title text-justify font-serif  text-md">
                    ChefVerse Bangal
                  </h2>
                  <div className="card-actions flex  flex-row gap-1">
                    <div className="flex  gap-2">
                      <a href="https://bongochef-155d4.web.app/">
                        <button className="mx-3 btn btn-xs bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsLink45Deg className="text-white"></BsLink45Deg>
                        </button>
                      </a>
                    </div>

                    <div className="flex  gap-1">
                      <a href="https://github.com/Anika-ATS/BongoChef-client">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                    <div className="flex  gap-2">
                      <a href="https://github.com/Anika-ATS/BongoChef-server">
                        <button className="mx-3 btn btn-xs  bg-purple-950 hover-group:btn-outline btn-secondary transition-all duration-500 ">
                          <BsGithub className="text-white"></BsGithub>
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
                <p className="p-1 mx-2 text-white   text-xs text-justify font-serif  ">
                  ChefVerse Bangal is a dedicated platform for Bengali chefs,
                  celebrating the culinary expertise of the Bangali community.
                  ChefVerse Bangal is a culinary treasure trove, celebrating the
                  rich and diverse culinary heritage of Bengal. From the
                  aromatic masalas to the unique regional dishes, your website
                  seems to be a delightful journey into the heart of Bengali
                  cuisine. With skilled chefs well-versed in various preparation
                  techniques and a menu boasting a variety of authentic dishes,
                  including desserts and diverse thali options, ChefVerse Bangle
                  appears to be a haven for food enthusiasts looking to savor
                  the true flavors of Bengal.{" "}
                </p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
