import React from "react";
import { motion } from "framer-motion";
import { SlideUp } from "../../utility/animation";
import Chat from 'at-chatbot';

const Chatbot = () => {
  return (
    <section id="chatbot" className="relative bg-gradient-to-br from-blue-600 to-green-400 text-white py-20 ">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-extrabold text-darkBlue">
            Meet Our Virtual Assistant
          </h2>
          <p className="text-lg mt-4 max-w-2xl mx-auto">
            Get instant assistance with AbelMed through our integrated chatbot. Ask questions, receive guidance, and learn more about our solutions with ease.
          </p>
        </motion.div>

        <motion.div
          variants={SlideUp(0.2)}
          whileInView="animate"
          initial="initial"
          className="flex justify-center items-center">
            <Chat height="300px"/>
        </motion.div>
      </div>
    </section>
  );
};

export default Chatbot;
