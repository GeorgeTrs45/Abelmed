import React from "react";
import Img1 from "../../assets/uses/1.jpg";
import Img2 from "../../assets/uses/2.jpg";
import Img3 from "../../assets/uses/3.png";
import { motion } from "framer-motion";
import { SlideLeft, SlideRight, SlideUp } from "../../utility/animation";

const Uses = () => {
  return (
    <section id="use" className="bg-gradient-to-r from-blue-100 via-white to-blue-100 py-28 relative ">
      <div className="container mx-auto px-6 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-extrabold text-darkBlue drop-shadow-md">
            How AbelMed Improves Lives
          </h2>
          <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
            Discover the core benefits of AbelMed, revolutionizing treatment for joint health.
          </p>
        </motion.div>

        {/* Uses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
          {/* Card 1 */}
          <motion.div
            variants={SlideUp(0.2)}
            whileInView="animate"
            initial="initial"
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-300 opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <img
              src={Img1}
              alt="Joint Pain Relief"
              className="w-full h-52  rounded-t-3xl group-hover:scale-110 transition duration-300 object-fill"
            />
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-darkBlue group-hover:text-primary transition duration-300">
                Joint Pain Relief
              </h3>
              <p className="text-gray-600 mt-4 group-hover:text-gray-800 transition duration-300">
                AbelMed provides targeted relief from joint pain, reducing inflammation effectively.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={SlideUp(0.4)}
            whileInView="animate"
            initial="initial"
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-300 opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <img
              src={Img2}
              alt="Cartilage Regeneration"
              className="w-full h-52  rounded-t-3xl group-hover:scale-110 transition duration-300 object-fill"
            />
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-darkBlue group-hover:text-primary transition duration-300">
                Cartilage Regeneration
              </h3>
              <p className="text-gray-600 mt-4 group-hover:text-gray-800 transition duration-300">
                Stimulates natural cartilage regeneration for long-term joint health.
              </p>
            </div>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={SlideUp(0.6)}
            whileInView="animate"
            initial="initial"
            className="relative bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-xl hover:scale-105 transform transition duration-300 group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-blue-300 opacity-20 group-hover:opacity-40 transition duration-300"></div>
            <img
              src={Img3}
              alt="Mobility Enhancement"
              className="w-full h-52  rounded-t-3xl group-hover:scale-110 transition duration-300 object-cover"
            />
            <div className="p-6 relative z-10">
              <h3 className="text-2xl font-bold text-darkBlue group-hover:text-primary transition duration-300">
                Mobility Enhancement
              </h3>
              <p className="text-gray-600 mt-4 group-hover:text-gray-800 transition duration-300">
                Enhances joint flexibility and mobility, improving overall quality of life.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Call-to-Action Section */}
        {/* <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-extrabold text-darkBlue mb-4">
            Ready to Transform Your Health?
          </h3>
          <button className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-darkBlue transition duration-300">
            Contact Us Today
          </button>
        </motion.div> */}
      </div>

    </section>
  );
};

export default Uses;
