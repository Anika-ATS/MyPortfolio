import React from 'react';
import { Player } from "@lottiefiles/react-lottie-player";
import L2 from "../assets/animation_lnqjdx8d.json";
import {AiOutlineDownload} from 'react-icons/ai';





const About = () => {
    return (
        <div className='h-96   bg-purple-100' id='about'>
            <div className='flex '>
                <div className="mx-5 w-12 mt-8">
                      <Player
                        src={L2}
                        className="player  "
                        loop
                        autoplay
                      />
                </div>
                <h1 className="text-4xl font-bold text-purple-950 mt-10">About Me</h1>
                    
            </div>
            

            <p className='py-4 mx-20 mt-10  text-justify font-serif '>I'm Anika Tabassum, a passionate MERN stack developer with a focus on front-end design. With a degree in Computer Science and Engineering, I enjoy creating user-friendly websites that simplify modern life.Proficient in HTML, CSS, JavaScript, and React.js, I transform concepts into visually engaging websites..Recently, I've been exploring back-end technologies like Firebase and Express.js, enhancing my skills further. I'm dedicated to mastering both front-end and back-end development, making innovation my driving force.I appreciate your time visiting my portfolio. I am excited about the opportunities in the digital world and am eager to contribute my creativity and expertise.</p>

            <a className="mx-20 mt-5 font-bold btn btn-outline text-purple-900 hover:btn-outline btn-purple-950">My CV <AiOutlineDownload className='w-8 h-10'></AiOutlineDownload></a>
        </div>
    );
};

export default About;
// npm install react-scroll
