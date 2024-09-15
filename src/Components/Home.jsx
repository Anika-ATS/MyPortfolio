import React from "react";
import { Link } from "react-scroll";
import { Player } from "@lottiefiles/react-lottie-player";
import L1 from "../assets/animation_lnqk4y37.json";
import { AiOutlineDownload } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import fileDownload from "js-file-download";

import CVPdfFile from "../assets/pdf/Anika tabassum_2.pdf";
import { BsGithub } from "react-icons/bs";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare } from "react-icons/bi";

const Home = () => {
  const handleDownload = () => {
    fileDownload(CVPdfFile, "Anika tabassum_2.pdf");
  };

  return (
    <div id="home" className="w-full">
      <div className="bg-purple-200">
        <div className="hero-content flex flex-col  lg:flex-row  md:flex-col">
          <div className="card-body mt-5">
            <Player src={L1} className="player" loop autoplay />
          </div>

          <div className="flex flex-col justify-center items-center md:gap-4  lg:items-start lg:w-2/3 px-4">
            <h1 className="mt-24 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-950 to-pink-400  md:mt-10 lg:mt-24">
              <Typewriter
                words={["Hello !!"]}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                delaySpeed={8}
                deleteSpeed={10}
                loop
              ></Typewriter>
            </h1>
            <p className="text-purple-950 text-xl font-bold lg:text-3xl md:text-2xl">
              I'm Anika Tabassum,
            </p>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950">
              <Typewriter
                words={["a Full Stack Developer"]}
                cursor
                cursorStyle="_"
                typeSpeed={100}
                delaySpeed={8}
                deleteSpeed={5}
                loop
              ></Typewriter>
            </span>
            <p className="text-wrap py-6 font-serif font-semibold animate-pulse  md:text-wrap  md:py-4 md:text-xl    lg:text-left">
              As a budding MERN stack developer, I find joy in coding and
              creating captivating websites. I'm also a frontend developer,
              eager to explore and turn imagination into interactive digital
              reality. Let's build something amazing together!
            </p>
            <div className="flex flex-col md:flex-col md:items-center lg:flex-row items-center gap-4">
              <button className="shadow-xl font-bold btn glass text-purple-900 hover-group:btn-outline btn-secondary">
                <Link
                  className="text-purple-900 cursor-pointer"
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Collaborate
                </Link>
              </button>
              <button className="font-bold btn glass text-purple-900 hover:btn-outline btn-secondary">
                <Link
                  className="text-purple-900 cursor-pointer"
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  My Projects
                </Link>
              </button>
              <label
                htmlFor="my_modal_7"
                className="font-bold btn glass text-purple-900 hover-group:btn-outline btn-secondary"
              >
                Resume{" "}
                <AiOutlineDownload className="w-8 h-10"></AiOutlineDownload>
              </label>
              <input type="checkbox" id="my_modal_7" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box">
                  <h3 className="text-lg font-bold font-serif text-purple-950">
                    Hello!
                  </h3>
                  <p className="py-4 text-purple-950">
                    Here you can download my CV!
                  </p>
                  <button
                    onClick={handleDownload}
                    className="btn btn-md  btn-circle bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950 text-white"
                  >
                    CV
                  </button>
                </div>
                <label className="modal-backdrop" htmlFor="my_modal_7">
                  Close
                </label>
              </div>
            </div>
            <div className="flex gap-4 justify-center lg:justify-start sm:justify-start">
              <h2 className="mt-5 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950">
                {" "}
                Find me in:
              </h2>
              <span>
                <a href="https://www.facebook.com/Anika.ATS?mibextid=ZbWKwL">
                  <BiLogoFacebookCircle className="mt-6 w-8 h-6"></BiLogoFacebookCircle>
                </a>
              </span>
              <span>
                {" "}
                <a href="https://github.com/Anika-ATS?tab=repositories">
                  <BsGithub className="mt-6 w-5 h-6"></BsGithub>
                </a>
              </span>
              <span>
                <a href="https://www.linkedin.com/in/anika-tabassum-052b7a291/">
                  <BiLogoLinkedinSquare className="mt-6 w-8 h-6"></BiLogoLinkedinSquare>
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
