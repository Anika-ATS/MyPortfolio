import React from "react";
import { Link } from "react-scroll";
import { Player } from "@lottiefiles/react-lottie-player";
import L1 from "../assets/animation_lnqk4y37.json";
// import hello from "../assets/hello2.json";
import { AiOutlineDownload } from "react-icons/ai";
import { Typewriter } from "react-simple-typewriter";
import fileDownload from "js-file-download";

import CVPdfFile from "../assets/pdf/Anika tabassum_2.pdf";
import { BsGithub } from "react-icons/bs";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare } from "react-icons/bi";

// import L2 from "../assets/animation_lnqjdx8d.json";
const Home = () => {
  const handleDownload = () => {
    fileDownload(CVPdfFile, "Anika tabassum_2.pdf");
  };

  return (
    <div id="home" className="w-full ">
      <div className=" bg-purple-200">
        <div className="hero-content flex-col lg:flex-row sm:flex-col ">
          <div className="card-body mt-5 ">
            <Player src={L1} className="player  " loop autoplay />
          </div>
          <div>
            <h1 className="mt-24 text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-purple-950 to-pink-400">
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
            <p className="text-purple-950 text-4xl font-bold ">
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

            <p className="py-6 ">
              As a budding MERN stack developer, I find joy in coding and
              creating captivating websites. Eager to explore, I'm on a journey
              to turn imagination into interactive digital reality. Let's build
              something amazing together!
            </p>
            {/*  sm:  flex-col -ms-6 */}
            <div
              className=" mt-4 rounded w-96 bg-purple-300 gap-4 lg: flex 
                           "
            >
              <button className="shadow-xl font-bold btn glass text-purple-900 hover-group:btn-outline btn-secondary transition-all duration-500   hover:text-white  ">
                {/* sm:w-1/3 */}
                <Link
                  className="text-purple-900 cursor-pointer "
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

              <button className="font-bold btn glass text-purple-900 hover:btn-outline btn-secondary ">
                <Link
                  className="text-purple-900 cursor-pointer "
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

              {/* modal */}
              <label
                htmlFor="my_modal_7"
                className="font-bold btn glass text-purple-900 
               hover-group:btn-outline btn-secondary "
              >
                Resume{" "}
                <AiOutlineDownload className="w-8 h-10"></AiOutlineDownload>
              </label>

              {/* Put this part before </body> tag */}
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
            {/* find */}
            <div className="flex  gap-4  ">
              <h2 className="mt-5 font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950">
                {" "}
                Find me in:
              </h2>

              <span>
                <a href="https://www.facebook.com/Anika.ATS?mibextid=ZbWKwL">
                  <BiLogoFacebookCircle className="mt-6 w-8 h-6 "></BiLogoFacebookCircle>
                </a>
              </span>

              <span>
                {" "}
                <a href="https://github.com/Anika-ATS">
                  <BsGithub className="mt-6 w-5 h-6 "></BsGithub>
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
