import React, { useState } from "react";
//  import { Link } from "react-scroll";
import Education from "./Education";
import ProfessionalSkill from "./ProfessionalSkill";
import Experience from "./Experience";
import Achievement from "./Achievement";

const Resume = () => {
  const [EducationData, setEducationData] = useState(true);
  const [SkillData, setSkillData] = useState(false);
  const [ExperienceData, setExperienceData] = useState(false);
  const [AchivementData, setAchievementData] = useState(false);

  return (
    <div className=" min-h-screen  bg-purple-100 " id="resume">
      <div className="p-8 ">
        <h1 className=" text-4xl font-bold text-purple-950  text-center mt-10 mb-10">
          Resume
        </h1>
        <div className="p-4 bg-opacity-30 border-b-[1px] border-l-[4px] border-purple-950 bg-purple-200 ">
          <ul className="w-full grid grid-cols-2 sm:grid-cols-4 text-center text-purple-950 font-bold text-base md:text-lg cursor-pointer">
            <li
              className="text-md hover:scale-150 duration-300 ..."
              onClick={() =>
                setEducationData(true) &
                setSkillData(false) &
                setExperienceData(false) &
                setAchievementData(false)
              }
            >
              Education
            </li>

            <li
              className="text-md  hover:scale-150 duration-300 ..."
              onClick={() =>
                setSkillData(true) &
                setEducationData(false) &
                setExperienceData(false) &
                setAchievementData(false)
              }
            >
              Professional Skill
            </li>

            <li
              className="text-md hover:scale-150 duration-300 ..."
              onClick={() =>
                setExperienceData(true) &
                setSkillData(false) &
                setEducationData(false) &
                setAchievementData(false)
              }
            >
              Experience
            </li>

            <li
              className="text-md hover:scale-150 duration-300 ..."
              onClick={() =>
                setAchievementData(true) &
                setEducationData(false) &
                setSkillData(false) &
                setExperienceData(false)
              }
            >
              Training
            </li>
          </ul>
        </div>
        {/* resume */}

        {EducationData && <Education></Education>}
        {SkillData && <ProfessionalSkill></ProfessionalSkill>}
        {ExperienceData && <Experience></Experience>}
        {AchivementData && <Achievement></Achievement>}
      </div>
    </div>
  );
};

export default Resume;
