import { Player } from "@lottiefiles/react-lottie-player";
import contact2 from "../assets/contact2.json";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import React, { useRef } from "react";

// import P1 from "../assets/imges/contact.jpg";
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
        className=" min-h-screen  flex "
      >
        {/* <div> */}
        {/* 1st section */}
        <div className="w-1/2 mx-20 items-center ">
          <div className=" mt-20  font-serif mx-40">
            <p className="text-3xl   font-semibold text-purple-950">
              Let's Connect !!
            </p>

            <div className="  my-10 card flex-shrink-0 w-full max-w-sm shadow-2xl bg-gradient-to-r from-purple-900  to-pink-300 ">
              <form ref={form} onSubmit={sendEmail} className="card-body">
                <label>Name</label>
                <input type="text" name="user_name" />
                <div className="form-control">
                  <label className="label">
                    <span className=" text-md text-white">Email</span>
                  </label>
                  <input
                    type="email"
                    name="user_email"
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
                    className="  btn btn-wide items-center text-purple-900 text-md"
                  >
                    Contact
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* 2nd section*/}
        <div className="w-1/2 ">
          <div className="-ms-16 my-10 font-serif ">
            <div className="card-body  rounded-md  shadow-gray-600 ">
              <Player src={contact2} className="player   " loop autoplay />
            </div>
          </div>
        </div>
        {/* </div> */}
      </motion.div>
    </div>
  );
};

export default Contacts;
