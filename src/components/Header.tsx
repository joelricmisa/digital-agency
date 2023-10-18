import ActionButton from "./ActionButton";
import { navLinks } from "../lib/constants";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { motion } from "framer-motion";
const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.header
      initial={{ y: -25, opacity: 1 }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      className="overflow-hidden bg-secondary"
    >
      <div
        className={`${
          toggle
            ? "h-screen flex-col items-start justify-start  lg:h-auto lg:flex-row"
            : ""
        } mx-auto flex  max-w-[1440px]  p-5 text-light `}
      >
        {/* Brand Name  */}
        <h1 className="flex basis-auto items-center gap-2 !font-inter  text-2xl font-semibold lg:basis-4/12 ">
          <img src="src/assets/logo.png" alt="brand logo" />
          <span>Canvas Lancer</span>
        </h1>

        {/* Navbar  */}

        <div
          className={`${
            toggle
              ? "flex h-full w-full flex-col justify-between lg:h-auto lg:w-auto lg:flex-row  "
              : "hidden "
          } mt-10 items-center justify-between lg:mt-0 lg:flex lg:basis-9/12 `}
        >
          <nav className={`${toggle ? "w-full lg:w-auto" : ""}`}>
            <ul
              className={` ${
                toggle ? "flex-col lg:flex-row" : ""
              } flex items-center justify-center`}
            >
              {navLinks.map((link, index) => (
                <li key={index} className="w-full lg:w-auto">
                  <a
                    href={link.href}
                    className={`block w-full px-5 py-2.5 hover:bg-gray-50/10 ${
                      toggle ? "py-5 text-xl lg:py-2.5 lg:text-base" : ""
                    } `}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ActionButton
            bgColor="bg-primary"
            txtColor="text-light"
            linkId="#contact"
          >
            Contact Us
          </ActionButton>
        </div>

        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className={`absolute right-6 top-6 lg:hidden`}
        >
          <span className="block rounded-sm border border-white/50 p-2 text-3xl hover:scale-105 active:scale-100">
            <FaBars />
          </span>
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
