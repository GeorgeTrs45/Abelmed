import React from "react";
import AboutImage from "../../assets/about.png";
import { motion } from "framer-motion";
import { FaStethoscope, FaHeartbeat, FaClinicMedical, FaLeaf, FaHandsHelping, FaMedkit } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/path/to/background-pattern.svg')] bg-cover opacity-10"
        initial={{ y: 0 }}
        whileInView={{ y: -50 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      ></motion.div>

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h2 className="text-5xl font-extrabold text-darkBlue drop-shadow-md leading-tight">
            Transforming Healthcare with <span className="text-primary">AbelMed</span>
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            AbelMed is at the forefront of innovation, addressing the root causes
            of <span className="font-semibold">Chronic Joint Degeneration Syndrome (CJDS)</span>. By
            regenerating cartilage and enhancing mobility, we’re redefining lives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {[
              { icon: <FaStethoscope className="text-4xl text-primary" />, title: "Innovative Care", description: "State-of-the-art treatment solutions." },
              { icon: <FaHeartbeat className="text-4xl text-primary" />, title: "Better Outcomes", description: "Healthier, more active futures." },
              { icon: <FaClinicMedical className="text-4xl text-primary" />, title: "Compassionate Support", description: "Guidance every step of the way." },
              { icon: <FaLeaf className="text-4xl text-primary" />, title: "Natural Ingredients", description: "Safe, effective, and science-backed." },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center space-x-4 p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300"
              >
                <div>{item.icon}</div>
                <div>
                  <h4 className="font-bold text-lg text-darkBlue">{item.title}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <img
            src={AboutImage}
            alt="AbelMed Illustration"
            className="rounded-3xl hover:scale-105 transition-transform duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default About;