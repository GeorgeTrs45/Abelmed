import React from "react";
import Logo from "../../assets/logo.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      className="relative bg-gradient-to-br from-blue-50 to-white text-darkBlue overflow-hidden"
    >

      <div id="footer" className="container py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <img
              src={Logo}
              alt="AbelMed Logo"
              className="w-40 hover:scale-105 transition-transform duration-200"
            />
            <p className="text-gray-500">
              AbelMed - A revolutionary medicine developed to combat Chronic Joint Degeneration Syndrome (CJDS).
            </p>
            <div className="flex space-x-6 text-2xl">
              {[
                { icon: <FaFacebook />, link: "#" },
                { icon: <FaInstagram />, link: "#" },
                { icon: <FaLinkedin />, link: "#" },
                { icon: <FaTwitter />, link: "#" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="text-gray-500 hover:text-primary hover:scale-110 transition duration-200"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-darkBlue">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { text: "About AbelMed", link: "#about" },
                { text: "How It Works", link: "#use" },
                { text: "Chatbot", link: "#chatbot-div" },
                { text: "Contact Us", link: "#footer" },
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href={item.link}
                    className="text-gray-500 hover:text-primary hover:underline transition duration-200"
                  >
                    {item.text}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter Subscription */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-darkBlue">Stay Updated</h3>
            <p className="text-gray-500">
              Subscribe to our newsletter for the latest updates and offers.
            </p>
            <form className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-darkBlue placeholder-gray-400 border-[1px] focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700 transition duration-200"
              >
                <FaEnvelope />
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-darkBlue">Contact Us</h3>
            <ul className="space-y-4 text-gray-500">
              <li>123 Health Lane, Suite 456</li>
              <li>New York, NY 10001</li>
              <li>Email: info@abelmed.com</li>
              <li>Phone: +1 (123) 456-7890</li>
            </ul>
          </motion.div>
        </div>

        {/* Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 pt-8 border-t border-white/10 text-center text-gray-500"
        >
          <p>© 2025 AbelMed. All rights reserved.</p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;