import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaCommentDots, FaTimes } from "react-icons/fa";
import Chat from "at-chatbot";

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div id="chatbot" className="fixed bottom-6 right-2 md:right-5 lg:right-6 flex flex-col items-end z-50 ">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="w-[330px] md:w-[350px] lg:w-[400px] bg-transparent shadow-lg rounded-lg mb-3 relative overflow-hidden"
        >
            {/* <button onClick={toggleChat} className="text-white absolute top-[5px] right-[10px]">
              <FaTimes size={20} />
            </button> */}

          <Chat height="200px" />

        </motion.div>
      )}

      <motion.button
        onClick={toggleChat}
        className="bg-black text-white p-4 rounded-full shadow-lg flex items-center justify-center border-4 border-gray-300 relative"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2 }}
      >
        {isOpen ? <FaTimes size={24} /> : <FaCommentDots size={24} />}
      </motion.button>


    </div>
  );
};

export default FloatingChat;
