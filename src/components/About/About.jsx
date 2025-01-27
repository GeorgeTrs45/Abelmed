import React from "react";
import AboutImage from "../../assets/about.png";
import { motion } from "framer-motion";
import { SlideUp, SlideLeft, SlideRight } from "../../utility/animation";
import { FaStethoscope, FaHeartbeat, FaClinicMedical } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-20 overflow-hidden">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          variants={SlideLeft(0.2)}
          whileInView="animate"
          initial="initial"
          className="space-y-8 col-span-1 md:col-span-2"
        >
          <h2 className="text-5xl font-extrabold text-darkBlue drop-shadow-md leading-tight">
            Transforming Healthcare with AbelMed
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AbelMed is at the forefront of innovation, addressing the root causes
            of <span className="font-semibold">Chronic Joint Degeneration Syndrome (CJDS)</span>. By
            regenerating cartilage and enhancing mobility, we’re redefining lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
            <div className="flex items-center space-x-4">
              <FaStethoscope className="text-primary text-4xl min-w-[32px]" />
              <div>
                <h4 className="font-bold text-lg text-darkBlue">Innovative Care</h4>
                <p className="text-sm text-gray-600">State-of-the-art treatment solutions.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaHeartbeat className="text-primary text-4xl min-w-[32px]" />
              <div>
                <h4 className="font-bold text-lg text-darkBlue">Better Outcomes</h4>
                <p className="text-sm text-gray-600">Healthier, more active futures.</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <FaClinicMedical className="text-primary text-4xl min-w-[32px]" />
              <div>
                <h4 className="font-bold text-lg text-darkBlue">Compassionate&nbsp;Support</h4>
                <p className="text-sm text-gray-600">Provides guidance every step of the way.</p>
              </div>
            </div>
          </div> 
        </motion.div>

        {/* Image Section */}
        <motion.div
          variants={SlideRight(0.4)}
          whileInView="animate"
          initial="initial"
          className="relative col-span-1"
        >
          <img
            src={AboutImage}
            alt="AbelMed Illustration"
            className="rounded-3xl hover:scale-105 transition-transform duration-300 "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
