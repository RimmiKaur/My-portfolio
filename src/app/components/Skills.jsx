import React, { useEffect, useState, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const skills = [
  {
    category: "Programming Languages",
    items: ["Python", "Java", "C", "C++", "Kotlin", "JSON", "SQL", "JS", "Jquery", "React Js", "CSS3", "HTML", "Tailwind CSS", "Bootstrap", "Next js", "Firebase", "Redux"],
  },
  {
    category: "Software Proficiency",
    items: ["Android Studio", "Eclipse IDE", "Microsoft Office Suite", "Figma", "Visual Studio"],
  },
  {
    category: "Other Skills",
    items: ["Project Management", "Content Creation", "Video Editing"],
  },
];

const Skills = ({ darkMode }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} className={`w-full py-12 ${darkMode ? "bg-gray-800 text-white" : "bg-white text-gray-900"}`}>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Technical Skills</h2>
        {skills.map((skill, index) => (
          <div key={index} className="mb-8">
            <h3 className={`text-2xl font-semibold ${darkMode ? " text-white" : " text-gray-900"} mb-4`}>{skill.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {skill.items.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial="hidden"
                  animate={controls}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`${darkMode ? "bg-white text-gray-900" : "bg-gray-800 text-white"} p-4 shadow-md rounded-lg text-center text-lg font-medium`}
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
