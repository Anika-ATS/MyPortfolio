import { Player } from "@lottiefiles/react-lottie-player";
import contact2 from "../assets/contact2.json";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import toast from "react-hot-toast";
// import { LuPhoneCall } from "react-icons/lu";

import React, { useRef } from "react";
import { Typewriter } from "react-simple-typewriter";

import { BsGithub } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { FaHandshake } from "react-icons/fa";
import { BiLogoFacebookCircle, BiLogoLinkedinSquare } from "react-icons/bi";

const Contacts = () => {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const whatsappNumber = import.meta.env.VITE_WHATSAPP_PHONE_NUMBER;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Product added successful");
          form.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="w-full  bg-cover bg-center "
      // style={{ backgroundImage: `url(${P1})` }}
    >
      <p
        className="text-3xl mt-5  text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-800 to-purple-950 md:mt-9 md:p-4"
        // className="text-3xl text-center  font-semibold text-purple-950"
      >
        {" "}
        <Typewriter
          words={["Let's Make Something Awesome Together !!"]}
          cursor
          cursorStyle="_"
          typeSpeed={100}
          delaySpeed={8}
          deleteSpeed={5}
          loop
        ></Typewriter>
      </p>
      <h1
        className="text-xl mx-10  my-4  gap-6 font-semibold text-purple-950 flex 
      md:text-4xl md:mx-48 md:p-4 lg:mx-96 lg:text-4xl"
      >
        {" "}
        Connect With Me
        <span>
          <FaHandshake className="mt-2 w-10 h-5 md:h-10 lg:10"></FaHandshake>
        </span>
      </h1>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className=" min-h-screen flex flex-col md:flex-col lg:flex-row "
      >
        {/* 1st section */}

        <div className="w-full  items-center justify-evenly  flex flex-col  lg:flex-row ">
          <div className="p-8 mt-8 px-16 mb-12 font-serif mx-8 md:py-5   ">
            {/* form */}
            <div className="card  mx-8 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-900  to-pink-300 lg:mx-0 ">
              <form ref={form} onSubmit={sendEmail} className="card-body w-96 ">
                <div className="form-control">
                  <label>
                    <span className=" text-md text-white ">Name</span>
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    placeholder="Name"
                    className="mt-1 input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className=" text-md text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    placeholder="Email"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className=" text-md text-white">Message</span>
                  </label>
                  {/* className="input input-bordered input-lg w-full max-w-xs" */}
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Type here"
                    name="message"
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    type="submit"
                    value="Send"
                    className="  btn  text-purple-900 text-md"
                  >
                    Connect
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* middle */}

          <div className="flex flex-row  gap-6 mx-16 md:flex-row md:gap-5  md:mt-10 lg:flex-col  lg:mr-24 lg:gap-2 lg:-mt-9  ">
            {/* <h2 className="mt-5   font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-purple-950">
              {" "}
            </h2> */}
            <span>
              <a href="https://www.facebook.com/Anika.ATS?mibextid=ZbWKwL">
                <BiLogoFacebookCircle className=" mt-0 w-14 h-24 text-purple-950 "></BiLogoFacebookCircle>
              </a>
            </span>

            <span>
              {" "}
              <a href="https://github.com/Anika-ATS?tab=repositories">
                <BsGithub className=" mt-0 w-12 h-24 text-purple-950 "></BsGithub>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/anika-tabassum-052b7a291/">
                <BiLogoLinkedinSquare className=" mt-0 w-12 h-24 text-purple-950 "></BiLogoLinkedinSquare>
              </a>
            </span>
            <span>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                  "Hello! I visited your portfolio and would love to discuss potential collaborations.."
                )}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="  w-12 h-24 text-purple-950 "></FaWhatsapp>
              </a>
            </span>
          </div>
        </div>

        {/* 2nd section*/}
        <div className="w-full p-8 mr-24  mb-10 md:mx-40 md:mb-10 lg:mx-7 lg:mr-64 lg:p-2">
          <div className="">
            <div className="card  w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-900  to-pink-300  mt-12 p-20 ">
              {/* <div className="card  mt-10 font-serif "> */}
              <div className="card-body -ms-3  rounded-md  shadow-gray-600 lg:mr-32 ">
                <Player
                  src={contact2}
                  className="player w-48  lg:h-52 lg:w-48  "
                  loop
                  autoplay
                />
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Contacts;
