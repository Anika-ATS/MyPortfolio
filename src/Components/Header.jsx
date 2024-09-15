import { Link } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const NavItems = (
    <>
      <motion.div
        className="flex"
        initial={{ y: -250, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        duration={{ delay: 1 }}
      >
        <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
          <Link
            className="text-purple-900 cursor-pointer "
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Home
          </Link>
        </li>

        <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
          <Link
            className="text-purple-900 cursor-pointer "
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
            className="text-purple-900 cursor-pointer "
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Skill
          </Link>
        </li>

        <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
          <Link
            className="text-purple-900 cursor-pointer "
            activeClass="active"
            to="resume"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Resume
          </Link>
        </li>

        <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
          <Link
            className="text-purple-900 cursor-pointer "
            activeClass="active"
            to="projects"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Project
          </Link>
        </li>

        <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
          <Link
            className="text-purple-900 cursor-pointer "
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
      </motion.div>
    </>
  );

  return (
    <div>
      <div className="navbar fixed w-full  bg-gradient-to-r from-purple-950  to-pink-300 border-b-[1px] border-b-gray-200 ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
                <Link
                  className="text-white cursor-pointer "
                  activeClass="active"
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Home
                </Link>
              </li>

              <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
                <Link
                  className="text-purple-900 cursor-pointer "
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
                  className="text-purple-900 cursor-pointer "
                  activeClass="active"
                  to="skill"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Skill
                </Link>
              </li>

              <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
                <Link
                  className="text-purple-900 cursor-pointer "
                  activeClass="active"
                  to="resume"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Resume
                </Link>
              </li>

              <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
                <Link
                  className="text-purple-900 cursor-pointer "
                  activeClass="active"
                  to="projects"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  Project
                </Link>
              </li>

              <li className="font-bold cursor-pointer flex items-center text-lg gap-1">
                <Link
                  className="text-purple-900 cursor-pointer "
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

              {/* <li>{NavItems}</li> */}

              <a className="btn glass text-purple-900 hover:btn-outline btn-secondary">
                Resume
              </a>
            </ul>
          </div>
          <label tabIndex={0} className="mx-5 btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://plus.unsplash.com/premium_photo-1661376789077-ab7b1c3be610?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            </div>
          </label>

          <motion.a
            className="font-bold cursor-pointer lg:flex items-center text-2xl gap-1"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            duration={{ delay: 0.3 }}
          >
            <span className=" text-4xl font-serif bg-clip-text text-transparent bg-gradient-to-r from-purple-950 via-purple-400 to-pink-400 hover:text-purple-300 sm:text-white">
              Anika{" "}
            </span>
          </motion.a>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="menu menu-horizontal px-1">{NavItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
