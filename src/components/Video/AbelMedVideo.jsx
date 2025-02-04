import React from "react";
import { motion } from "framer-motion";
import AbelmedThumb from "../../assets/abelmed_thumbnail.png";
import AbelMedVideoDemo from "../../assets/abelmed_demo.mp4"

const AbelMedVideo = () => {
  return (
    <section id="abelmed-video" className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Parallax Background Animation */}
      <motion.div
        className="absolute inset-0 bg-cover opacity-10"
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-darkBlue drop-shadow-md">
            Discover <span className="text-primary">AbelMed</span> in Action
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
            Watch this video to see how AbelMed is transforming healthcare and improving lives.
          </p>
        </motion.div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative group w-full max-w-4xl">
            {/* Video Frame */}
            <div className="relative overflow-hidden rounded-3xl shadow-lg group-hover:shadow-2xl transition duration-300">
              <video
                className="w-full rounded-3xl"
                controls
                poster={AbelmedThumb}
              >
                <source src={AbelMedVideoDemo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AbelMedVideo;
