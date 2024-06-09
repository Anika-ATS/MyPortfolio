import React from "react";
import { Link } from "react-scroll";
import {
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
  BiLogoLinkedinSquare,
} from "react-icons/bi";
import { BsGithub, BsFillTelephoneOutboundFill } from "react-icons/bs";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

const Footer = () => {
  const phoneNumber = import.meta.env.VITE_CONTACT_NUMBER;

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div>
      <footer className="footer footer-center p-5 bg-gradient-to-r from-purple-900 to-pink-300 text-base-content rounded">
        <nav className="flex flex-col lg:flex-row justify-center gap-4 lg:gap-8 my-3">
          <li className="font-bold font-serif cursor-pointer flex items-center text-lg gap-2">
            <Link
              className="text-purple-950 text-2xl cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>

          <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
            <Link
              className="text-purple-950 text-2xl cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact
            </Link>
          </li>

          <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
            <Link
              className="text-purple-950 text-2xl cursor-pointer"
              activeClass="active"
              to="projects"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
        </nav>

        <nav className="flex flex-col md:flex-col lg:flex-col justify-center gap-4 lg:gap-8 p-5">
          <div className="flex justify-center gap-4 lg:gap-8">
            <a href="https://github.com/Anika-ATS">
              <BsGithub className="w-9 h-8"></BsGithub>
            </a>
            <a href="https://www.facebook.com/Anika.ATS?mibextid=ZbWKwL">
              <BiLogoFacebookCircle className="w-10 h-10"></BiLogoFacebookCircle>
            </a>
            <a href="https://instagram.com/tabassum___anika?igshid=OGQ5ZDc2ODk2ZA==">
              <BiLogoInstagramAlt className="w-10 h-10"></BiLogoInstagramAlt>
            </a>
            <a href="https://www.linkedin.com/in/anika-tabassum-052b7a291/">
              <BiLogoLinkedinSquare className="w-10 h-10"></BiLogoLinkedinSquare>
            </a>
            <BsFillTelephoneOutboundFill
              onClick={handleCall}
              className="w-8 h-8 cursor-pointer"
            ></BsFillTelephoneOutboundFill>
          </div>

          <div className="flex justify-center gap-4 lg:gap-8 p-5">
            <div className="flex items-center gap-1">
              <MdOutlineMarkEmailUnread className="w-5 h-5"></MdOutlineMarkEmailUnread>
              <a className="text-md" href="mailto:tabassumanika210@gmail.com">
                tabassumanika210@gmail.com
              </a>
            </div>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
