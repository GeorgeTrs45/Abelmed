import React from "react";
import { motion } from "framer-motion";
import { FaComments, FaRobot, FaArrowRight } from "react-icons/fa";
import ChatbotImage from "../../assets/chatbot.png";
import Chat from 'at-chatbot';

const Chatbot = () => {
  return (
    <section id="chatbot-div" className="relative py-28 overflow-hidden">
      {/* Gradient Background Animation */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-600 to-green-400 opacity-90"
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

      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-white drop-shadow-md">
            Meet Our Virtual Assistant
          </h2>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            Get instant assistance with AbelMed through our integrated chatbot. Ask questions, receive guidance, and learn more about our solutions with ease.
          </p>
        </motion.div>

        {/* Chatbot Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side: Chatbot Features */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Feature 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary rounded-full">
                  <FaComments className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">24/7 Support</h3>
                  <p className="text-gray-200">
                    Our chatbot is available round the clock to assist you with any queries.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary rounded-full">
                  <FaRobot className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">AI-Powered</h3>
                  <p className="text-gray-200">
                    Powered by advanced AI to provide accurate and instant responses.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white/10 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-primary rounded-full">
                  <FaArrowRight className="text-2xl text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Easy to Use</h3>
                  <p className="text-gray-200">
                    Simple and intuitive interface for seamless interaction.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Chatbot Widget */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="w-full rounded-3xl shadow-2xl overflow-hidden">
              {/* <Chat height="400px" /> */}
               <img
                  src={ChatbotImage}
                  alt="Chatbot Illustration"
                  className="hover:scale-105 transition-transform duration-300"
                />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Chatbot;