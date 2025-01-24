import React from "react";
import HeroImage from "../../assets/hero.png";
import { SlideUp } from "../../utility/animation";
import { motion } from "framer-motion";

const Hero = () => {
  return (
     <section className="relative bg-gradient-to-br from-blue-600 to-green-400 text-white py-20">
        <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-3 lg:mb-0">
            <motion.h1
              className="text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              Revolutionizing Joint Health
            </motion.h1>
            <motion.p
              className="text-lg mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Discover AbelMed – the breakthrough solution for Chronic Joint
              Degeneration Syndrome.
            </motion.p>
            <motion.div
              className="flex space-x-4 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition">
                Learn More
              </button>
              <button className="px-6 py-3 bg-blue-700 text-white rounded-lg shadow-md hover:shadow-lg transition">
                Contact Us
              </button>
            </motion.div>
          </div>

          {/* Hero Image Placeholder */}
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="">
              <img src={HeroImage} alt="" />
            </div>
          </motion.div>
        </div>
      </section> 
  );
};

export default Hero;
