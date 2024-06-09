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
        <nav className="grid grid-flow-col gap-4 lg:gap-8 lg:my-3">
          <li className="font-bold font-serif cursor-pointer flex items-center text-lg gap-2">
            <Link
              className="text-purple-950 text-2xl cursor-pointer "
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
              className="text-purple-950 text-2xl cursor-pointer "
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
              className="text-purple-950 text-2xl cursor-pointer "
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
        <nav>
          <div className="grid grid-flow-col gap-4  lg:gap-8 lg:p-5">
            <span>
              {" "}
              <a href="https://github.com/Anika-ATS?tab=repositories">
                <BsGithub className="mt-4 w-9 h-8 "></BsGithub>
              </a>
            </span>
            <span>
              {" "}
              <a href="https://www.facebook.com/Anika.ATS?mibextid=ZbWKwL">
                <BiLogoFacebookCircle className="mt-3 w-10 h-10 "></BiLogoFacebookCircle>
              </a>
            </span>

            <span>
              <a href="https://instagram.com/tabassum___anika?igshid=OGQ5ZDc2ODk2ZA==">
                <BiLogoInstagramAlt className="mt-3 w-10 h-10"></BiLogoInstagramAlt>
              </a>
            </span>
            <span>
              <a href="https://www.linkedin.com/in/anika-tabassum-052b7a291/">
                <BiLogoLinkedinSquare className="mt-3 w-10 h-10"></BiLogoLinkedinSquare>
              </a>
            </span>
            <span className="font-bold cursor-pointer flex items-center text-lg gap-1 mb-5 ">
              <BsFillTelephoneOutboundFill
                onClick={handleCall}
                className="mt-4 w-8 h-8"
              ></BsFillTelephoneOutboundFill>
            </span>
          </div>

          <div className="p-8 grid grid-flow-col gap-8 lg:gap-12">
            <aside>
              <p className="font-bold cursor-pointer flex items-center text-lg gap-1 mb-5 ">
                <MdOutlineMarkEmailUnread className=" w-5 h-5 "></MdOutlineMarkEmailUnread>{" "}
                :
                <span>
                  <a
                    className=" text-md "
                    href="https://mail.google.com/mail/u/0"
                  >
                    {" "}
                    tabassumanika210@gmail.com
                  </a>
                </span>
              </p>
            </aside>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
