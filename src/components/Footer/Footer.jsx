import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="bg-gradient-to-r from-blue-100 via-white to-blue-100">
      <div id="footer" className="container py-20 flex flex-col md:flex-row md:items-center justify-between gap-10">
        <div className="space-y-4">
          <img src={Logo} alt="" className="w-40 hover:scale-110 duration-200" />
          <p className="text-gray-400 xl:max-w-[400px]">
            AbelMed - A revolutionary medicine developed to combat CJDS
          </p>
        </div>
        <div className="flex space-x-6 text-3xl">
          <FaFacebook className="text-primary hover:text-green-700 hover:scale-105 duration-200" />
          <FaInstagram className="text-primary hover:text-green-700 hover:scale-105 duration-200" />
          <FaLinkedin className="text-primary hover:text-green-700 hover:scale-105 duration-200" />
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
