import React, { useState } from "react";
import Logo from "../../assets/logo.png";
import { FaHome, FaInfoCircle, FaRobot, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50"
    >
      <div className="container py-4 flex items-center justify-between">
        {/* Logo section */}
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <img src={Logo} alt="Abelmed Logo" className="w-32 lg:w-48" />
        </motion.div>

        {/* Hamburger Menu for Mobile */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-darkBlue focus:outline-none">
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>

        {/* Navlinks section */}
        <ul
          className={`${isOpen ? "block" : "hidden"} lg:flex lg:items-center lg:gap-10 text-lg font-semibold text-darkBlue absolute lg:static bg-white lg:bg-transparent w-full lg:w-auto left-0 lg:left-auto top-16 lg:top-auto p-6 lg:p-0 shadow-lg lg:shadow-none`}
        >
          {[
            { icon: <FaHome />, text: "Home", link: "#hero" },
            { icon: <FaInfoCircle />, text: "About", link: "#about" },
            { icon: <FaRobot />, text: "Chatbot", link: "#chatbot" },
            { icon: <FaEnvelope />, text: "Contact", link: "#footer" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.05 }}
              className="relative group my-4 lg:my-0"
            >
              <a
                href={item.link}
                className="flex items-center gap-2 hover:text-primary transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.icon}
                <span>{item.text}</span>
              </a>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></div>
            </motion.li>
          ))}
        </ul>

        {/* Button section */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="hidden lg:block"
        >
          <button className="bg-gradient-to-r from-primary to-blue-600 text-white px-6 py-2 rounded-lg shadow-md hover:shadow-lg transition duration-300 flex items-center gap-2">
            <FaEnvelope />
            Get in touch
          </button>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Navbar;