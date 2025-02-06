"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay } from "swiper/modules";

const projects = [
    

    {
        category: "Web Clones",
        name: "Myntra Clone",
        tech: ["HTML", "CSS"],
        description: "A detailed replication of five pages of the Myntra website.",
        github: "https://github.com/RimmiKaur/Myntra-clone",
        images: ["/images/myntra-1.png", "/images/myntra-2.png", "/images/myntra-3.png"],
    },
    {
        category: "Web Clones",
        name: "Meta News Page Clone",
        tech: ["HTML", "CSS", "Bootstrap"],
        description: "A detailed replication of Meta news page.",
        github: "https://github.com/RimmiKaur/Meta-news-page ",
        images: ["/images/meta-1.png", "/images/meta-2.png", "/images/meta-3.png"],
    },

    {
        category: "Web Clones",
        name: "Big Basket",
        tech: ["HTML", "CSS", "Tailwind CSS"],
        description: "A detailed replication of Big Basket homepage.",
        github: "https://github.com/RimmiKaur/Big-Basket-HomePage-Clone",
        images: ["/images/bigbasket-1.png", "/images/bigbasket-2.png", "/images/bigbasket-3.png",],
    },

     {
        category: "Web Clones",
        name: "Red Bus",
        tech: ["HTML", "CSS", "Tailwind CSS"],
        description: "A detailed replication of Red Bus homepage.",
        github: "https://github.com/RimmiKaur/Red-Bus-Homepage-Clone",
        images: ["/images/redbus-1.png", "/images/redbus-2.png"],
    },

    {
        category: "Full-Stack Projects",
        name: "E-commerce Website",
        tech: ["Next Js", "Tailwind CSS", "Redux"],
        description: "A full-featured e-commerce site with React Routing & Context API.",
        github: "https://github.com/RimmiKaur/Project-4--Web-development",
        images: ["/images/eccom-1.png", "/images/eccom-2.png", "/images/eccom-3.png"],
    },
    {
        category: "Productivity Tools",
        name: "ToDo-List App",
        tech: ["React", "Next.js", "Tailwind CSS"],
        description: "A task management app to create, update, delete, and organize tasks efficiently.",
        github: "https://github.com/RimmiKaur/ToDo-List",
        images: ["/images/to-do-1.png", "/images/to-do-2.png", "/images/to-do-3.png","/images/to-do-3.png", "/images/to-do-4.png"],
    },
    {
        category: "Full-Stack Projects",
        name: "Restaurant Booking System",
        tech: ["Next.js", "Tailwind CSS", "Express.js", "MongoDB", "Axios"],
        description: "A fully functional restaurant booking system allowing users to check table availability, book reservations, and manage bookings efficiently.",
        github: "https://github.com/RimmiKaur/restaurant-booking",
        images: ["/images/restaurant-1.png", "/images/restaurant-2.png", "/images/restaurant-3.png"],
    },
    {
        category: "Android Apps",
        name: "SAT2ERP",
        tech: ["Java", "Android Studio", "Firebase"],
        description: "Developed an inventory management app for digital records & staff coordination.",
        github: "https://github.com/RimmiKaur/NOTICEBoard",
        images: ["/images/sat-1.jpg", "/images/sat-2.jpg", "/images/sat-3.jpg", "/images/sat-4.jpg",],
    },
    {
        category: "Android Apps",
        name: "SAT4RISK CCE",
        tech: ["Java", "Android Studio", "XML"],
        description: "A data collection app for agricultural analysis & cloud-based data retrieval.",
        github: "https://github.com/RimmiKaur/Smart_Pants",
        images: ["/images/sat-5.jpg", "/images/sat-6.jpg", "/images/sat-7.jpg", "/images/sat-8.jpg",],
    },
    




];

const categories = ["All", "Android Apps", "Web Clones", "Full-Stack Projects"];

const ProjectsSection = ({ darkMode }) => {
    const [selectedCategory, setSelectedCategory] = useState("All");

    const filteredProjects =
        selectedCategory === "All"
            ? projects
            : projects.filter((project) => project.category === selectedCategory);

    return (
        <div className={`w-full mx-auto p-10 md:pt-10  md:p-44 md:pb-10 pb-10 ${darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
            <h2 className={`text-4xl font-bold text-center ${darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}0 mb-10`}>🚀 My Projects</h2>

            <div className="flex justify-center space-x-4 mb-8">
                {categories.map((category) => (
                    <motion.button
                        key={category}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className={`px-5 py-2 rounded-lg text-lg font-semibold my-3 ${selectedCategory === category
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 text-gray-800 hover:bg-blue-500 hover:text-white"
                            }`}
                        onClick={() => setSelectedCategory(category)}
                    >
                        {category}
                    </motion.button>
                ))}
            </div>

            <motion.div
               className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6"

                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={index}
                        className={`${!darkMode ? "border-white " : "border-gray-900"} border-[5px] relative bg-white shadow-lg rounded-lg overflow-hidden transform transition hover:-translate-y-2`}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Swiper
                            pagination={{ clickable: true }}
                            autoplay={{ delay: 3000, disableOnInteraction: false }}
                            modules={[Pagination, Autoplay]}
                            className="w-full  h-56"
                        >
                            {project.images.map((img, idx) => (
                                <SwiperSlide key={idx} className="relative w-full h-56">
                                    <Image
                                        src={img}
                                        alt={project.name}
                                        layout="fill"
                                        className="object-cover"
                                    />
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        <div className="p-6 border-t-4 border-gray-900">
                            <h3 className="text-2xl font-semibold  text-gray-800">{project.name}</h3>
                            <p className="text-gray-600 mt-2">{project.description}</p>
                            <div className="flex flex-wrap mt-4 space-x-2">
                                {project.tech.map((tech, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-blue-200 text-blue-800 px-2 py-1 m-1 text-xs rounded-lg"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 flex justify-between">
                                <Link
                                    href={project.github}
                                    target="_blank"
                                    className="px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
                                >
                                    GitHub Code
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    );
};

export default ProjectsSection;
