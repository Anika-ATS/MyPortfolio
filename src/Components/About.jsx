import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import L2 from "../assets/animation_lnqjdx8d.json";
import { AiOutlineDownload } from "react-icons/ai";

import fileDownload from "js-file-download";

import CVPdfFile from "../assets/pdf/Anika tabassum_2.pdf";

const About = () => {
  const handleDownload = () => {
    fileDownload(CVPdfFile, "Anika tabassum_2.pdf");
  };

  return (
    <div className="h-min  bg-purple-100" id="about">
      <div className="items-center flex flex-row lg:flex-row md:items-center lg:items-start lg:space-x-5 ">
        <div className="mx-5 w-12 mt-8  ">
          <Player src={L2} className="player  " loop autoplay />
        </div>
        {/* sm:mt-1 sm:text-md */}
        <h1 className="text-4xl font-bold text-purple-950 mt-10 ">About Me</h1>
      </div>

      {/* sm:py-3 mx-1 text-xs mt-2  */}
      <p className=" py-5 mx-10 mb-5 text-sm text-wrap text-justify font-serif  lg:py-4 lg:mx-20 lg:mt-8 lg:text-lg ">
        I'm Anika Tabassum, a passionate MERN stack developer with a focus on
        front-end design. With a degree in Computer Science and Engineering, I
        enjoy creating user-friendly websites that simplify modern
        life.Proficient in HTML, CSS, JavaScript, and React js, I transform
        concepts into visually engaging websites..Recently, I've been exploring
        back-end technologies like Firebase and Express.js, enhancing my skills
        further. I'm dedicated to mastering both front-end and back-end
        development, making innovation my driving force.I appreciate your time
        visiting my portfolio. I am excited about the opportunities in the
        digital world and am eager to contribute my creativity and expertise.
      </p>
      {/* sm:mx-1  */}
      <a
        className="mb-5 mx-10 font-bold btn btn-outline text-purple-900 md:mx-16  lg:mx-20  hover:btn-outline btn-purple-950 "
        onClick={handleDownload}
      >
        My CV <AiOutlineDownload className="w-8 h-10 "></AiOutlineDownload>
      </a>
    </div>
  );
};

export default About;
// npm install react-scroll
