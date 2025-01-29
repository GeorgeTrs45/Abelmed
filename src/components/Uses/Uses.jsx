import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaBone, FaRunning, FaLeaf, FaHandsHelping, FaMedkit } from "react-icons/fa";

const Uses = () => {
  const usesData = [
    {
      icon: <FaHeartbeat className="text-6xl text-white" />,
      title: "Pain Relief",
      description: "Experience instant relief from chronic joint pain with AbelMed's advanced formula.",
      gradient: "from-pink-500 to-purple-600",
    },
    {
      icon: <FaBone className="text-6xl text-white" />,
      title: "Cartilage Repair",
      description: "Stimulate natural cartilage regeneration for long-lasting joint health.",
      gradient: "from-blue-500 to-cyan-600",
    },
    {
      icon: <FaRunning className="text-6xl text-white" />,
      title: "Enhanced Mobility",
      description: "Regain flexibility and move freely with improved joint function.",
      gradient: "from-green-500 to-teal-600",
    },
    {
      icon: <FaLeaf className="text-6xl text-white" />,
      title: "Natural Ingredients",
      description: "Powered by nature, backed by science. Safe and effective for all.",
      gradient: "from-yellow-500 to-orange-600",
    },
    {
      icon: <FaHandsHelping className="text-6xl text-white" />,
      title: "Personalized Care",
      description: "Tailored solutions to meet your unique joint health needs.",
      gradient: "from-indigo-500 to-blue-600",
    },
    {
      icon: <FaMedkit className="text-6xl text-white" />,
      title: "Proven Results",
      description: "Clinically tested and trusted by thousands worldwide.",
      gradient: "from-red-500 to-pink-600",
    },
  ];

  return (
    <section id="use" className="relative py-28 overflow-hidden bg-gradient-to-br from-blue-50 to-white">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 bg-[url('/path/to/background-pattern.svg')] bg-cover opacity-10"
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
            How AbelMed Transforms Lives
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
            AbelMed is designed to restore your joint health and give you the freedom to live life to the fullest.
          </p>
        </motion.div>

        {/* Uses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {usesData.map((use, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative rounded-3xl overflow-hidden group"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${use.gradient} opacity-90 group-hover:opacity-100 transition duration-300`}
              ></div>
              <div className="p-8 text-center relative z-10">
                <div className="mb-6 flex justify-center">{use.icon}</div>
                <h3 className="text-2xl font-bold text-white group-hover:text-gray-100 transition duration-300">
                  {use.title}
                </h3>
                <p className="text-gray-200 mt-4 group-hover:text-gray-100 transition duration-300">
                  {use.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Uses;