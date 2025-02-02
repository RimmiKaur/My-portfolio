"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMail } from "react-icons/io5";


const ContactSection = () => {
  return (
    <div className="relative bg-gray-900 py-20 px-6  text-white overflow-hidden">
      <div className="absolute inset-0 opacity-90"></div>
      
      <motion.div 
        className="relative z-10 max-w-4xl mx-auto text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-5xl font-extrabold mb-6">📩 Let's Connect</h2>
        <p className="text-lg text-gray-300 mb-12">
          Want to collaborate or just say hello? Reach out through my socials below!
        </p>
      </motion.div>

      <motion.div 
        className="relative z-10 max-w-2xl mx-auto  bg-white p-8 shadow-2xl rounded-lg text-gray-800 flex flex-col items-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/rimmis_truth/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition">
            <FaInstagram size={40} />
          </a>
          <a href="https://www.linkedin.com/in/rimmi-kaur-178392193/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition">
            <FaLinkedin size={40} />
          </a>
          <a href="https://github.com/RimmiKaur" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-blue-500 transition">
            <FaGithub size={40} />
          </a>
          <a href="mailto:rimmikaur37@gmail.com" className="text-gray-900 hover:text-blue-500 transition">
                      <IoMail size={45} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactSection;
