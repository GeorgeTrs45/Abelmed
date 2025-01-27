import React from "react";
import Logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="bg-gradient-to-r from-blue-100 via-white to-blue-100"
    >
      <div className="container py-3 flex items-center justify-between ">
        {/* Logo section */}
        <div>
          <img src={Logo} alt="" className="w-48" />
        </div>
        {/* Navlinks section */}
        <ul className="hidden md:flex items-center gap-10  text-lg font-semibold text-darkBlue">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#use">Use</a>
          </li>
          <li>
            <a href="#chatbot">Chatbot</a>
          </li>
          <li>
            <a href="#footer">Contact us</a>
          </li>
        </ul>
        {/* Button section */}
        <div>
          <button className="border border-gray-400 px-4 py-2 rounded-lg hover:bg-darkBlue hover:text-white transform duration-300">
            {" "}
            Get in touch
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Navbar;
