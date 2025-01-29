
import React from "react";
import HeroImage from "../../assets/hero.png";
import { motion } from "framer-motion";
import { FaArrowRight, FaPlayCircle } from "react-icons/fa";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-0">
      {/* Dynamic Gradient Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-400 opacity-90"
        animate={{
          background: [
            "linear-gradient(45deg, #3b82f6, #10b981)",
            "linear-gradient(135deg, #10b981, #3b82f6)",
            "linear-gradient(225deg, #3b82f6, #10b981)",
            "linear-gradient(315deg, #10b981, #3b82f6)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "mirror",
        }}
      ></motion.div>

      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-6 relative z-10">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-100"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Revolutionize Your Joint Health with <span className="text-primary">AbelMed</span>
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Discover the breakthrough solution for Chronic Joint Degeneration Syndrome. Restore mobility, reduce pain, and reclaim your life.
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <button className="px-6 py-3 bg-white text-blue-600 rounded-lg shadow-md hover:shadow-lg transition flex items-center justify-center gap-2">
              <FaArrowRight />
              Learn More
            </button>
            <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg shadow-md hover:bg-white hover:text-blue-600 transition flex items-center justify-center gap-2">
              <FaPlayCircle />
              Watch Video
            </button>
          </motion.div>
        </div>

        {/* Hero Image with Floating Animation */}
        <motion.div
          className="lg:w-1/2 mt-12 lg:mt-0"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <motion.img
            src={HeroImage}
            alt="Hero Image"
            className="w-full"
            animate={{ y: [0, -20, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;