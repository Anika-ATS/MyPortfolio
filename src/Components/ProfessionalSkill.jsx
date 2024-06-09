import { motion } from "framer-motion";

const ProfessionalSkill = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 1 } }}
      className="w-full  flex flex-col md:flex md:flex-col lg:flex lg:flex-row gap-20"
    >
      {/* 1st section */}
      <div className="w-1/2 ms-20 md:ms-24 lg:mx-10 ">
        <div className="py-8 font-serif mx-20">
          <p className="-ms-10 text-3xl font-semibold text-purple-950 md:ms-10 lg:ms-0 ">
            {" "}
            Tools
          </p>
        </div>
        <div className="mt-5 w-full flex flex-col  gap-5">
          {/* 1 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">Figma</p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 2 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Visual Studio Code
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 3 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Firebase Hosting
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 4 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Vercel
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 5 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Netlify
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 6 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">GIT</p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 7 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Sublime Text
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[70%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>

      {/* 2nd section*/}
      <div className="w-1/2 ms-16 md:ms-24 lg:mx-10">
        <div className="py-8 font-serif mx-10 md:mx-20 lg:mx-20">
          <p className="-ms-10 text-3xl font-semibold text-purple-950 md:ms-10 lg:ms-0">
            Development
          </p>
        </div>
        <div className="mt-5 w-full flex flex-col gap-5">
          {/* 1 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">HTML </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ y: "-100%", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[95%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 2 */}
          {/* <div>
                <p className="text-md font-semibold font-serif uppercase ">CSS</p>
                <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
                <motion.span 
                    initial={{x:'-100%',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                     className="w-[80%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"

                >

                    
                </motion.span>



                </span>
                
            </div> */}

          {/* 3 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Tailwind css & Daisy UI
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[90%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 4 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              {" "}
              CSS & Bootstrap
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 5 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Java Script
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 6 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              React JS
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 7 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              Express JS
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[60%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 8 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">MySQL</p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 09 */}
          <div>
            <p className="text-md font-semibold font-serif uppercase ">
              MongoDb
            </p>
            <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[85%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"
              ></motion.span>
            </span>
          </div>

          {/* 10 */}
          {/* <div>
                <p className="text-md font-semibold font-serif uppercase ">Vercel</p>
                <span className="w-2/3 h-2 mt-2 bg-purple-900 inline-flex rounded-md">
                <motion.span 
                    initial={{x:'-100%',opacity:0}}
                    animate={{x:0,opacity:1}}
                    transition={{duration:0.5,delay:0.5}}
                     className="w-[80%] h-full bg-gradient-to-r from-purple-300          via-purple-400 to-pink-600 rounded-md relative"

                >

                  
                </motion.span>



                </span>
                
            </div> */}
        </div>
      </div>
    </motion.div>
  );
};

export default ProfessionalSkill;
