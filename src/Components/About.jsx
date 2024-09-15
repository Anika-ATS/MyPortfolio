import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import L2 from "../assets/animation_lnqjdx8d.json";
import { AiOutlineDownload } from "react-icons/ai";

import fileDownload from "js-file-download";

import CVPdfFile from "../assets/pdf/Anika tabassum25.pdf";
import CVPdfFile2 from "../assets/pdf/AnikaResume.pdf";

const About = () => {
  const handleDownload = () => {
    fileDownload(CVPdfFile, "Anika tabassum25.pdf");
  };
  const handleDownload2 = () => {
    fileDownload(CVPdfFile2, "AnikaResume.pdf");
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
      <p className=" p-5  text-sm text-wrap text-justify font-serif  lg:py-4 lg:mx-4 lg:mt-8 lg:text-lg md:text-2xl md:p-16 md:text-wrap">
        I'm Anika Tabassum,a passionate MERN stack developer with a focus on
        front-end design. With a degree in Computer Science and Engineering, I
        enjoy creating user-friendly websites that simplify modern life.
        Proficient in HTML, CSS, JavaScript, Reactjs, Tailwind CSS,DaisyUi. I
        try to do transform concepts into visually engaging websites. Recently,
        I've been exploring back-end technologies and pursuing TypeScript to
        enhance my skills further. I'm dedicated to mastering both front-end and
        back-end development, making innovation my driving force
      </p>
      <h1 className=" p-5  mb-5 text-sm text-wrap text-justify font-serif  lg:py-4 lg:mx-4 lg:mt-8 lg:text-lg md:text-2xl md:p-16 md:text-wrap">
        {" "}
        I appreciate your time visiting my portfolio. I am excited about the
        opportunities in the digital world and am eager to contribute my
        creativity and expertise. Let's build something amazing together!
      </h1>

      {/* sm:mx-1  */}
      <div className="mx-9 flex flex-col  lg:flex-row lg:mx-2 lg:mt-3 ">
        <a
          className="mb-5 w-full font-bold btn btn-outline text-purple-900 md:mx-16   hover:btn-outline btn-purple-950 md:w-1/2 lg:w-1/4  "
          onClick={handleDownload}
        >
          My CV <AiOutlineDownload className="w-8 h-10 "></AiOutlineDownload>
        </a>
        <a
          className="mb-8 w-full font-bold btn btn-outline text-purple-900 md:mx-16  hover:btn-outline btn-purple-950 md:w-1/2  lg:w-1/4 "
          onClick={handleDownload2}
        >
          My Resume{" "}
          <AiOutlineDownload className="w-8 h-10 "></AiOutlineDownload>
        </a>
      </div>
    </div>
  );
};

export default About;
// npm install react-scroll
