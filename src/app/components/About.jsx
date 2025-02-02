import React, { useEffect, useState } from "react";
import Image from "next/image";

const experiences = [
  {
    company: "Satyukt Analytics Private Limited",
    role: "Android Intern",
    duration: "OCT 2021 - JAN 2022",
    description:
      "My role as an Android intern was to take over the SAT4RISK CCE and SAT2ERP apps. Learned to work with APIs, SQLite, Firebase, 3rd party integrations.",
    logo: "images/satyukt.jpg",
  },
  {
    company: "Wonder Kidz The Concept School",
    role: "Counselor",
    duration: "NOV 2023 - APRIL 2024",
    description:
      "In social media management, I effectively utilized online platforms to drive admissions for the school. My role involved swift and efficient management of school affairs.",
    logo: "https://wonderkidz.in/wp-content/uploads/2020/02/Logo-01.png",
  },
  {
    company: "Ufaber - Real School",
    role: "Coding Teacher",
    duration: "MAR 2021 - SEP 2021",
    description:
      "Taught students coding using Python as well as Scratch, writing projects for students ranging from 3rd to 12th grade. Had full responsibility for the course.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lSxML-xxr4I8Ptarikfx6Tq5xPpiupBtFA&s",
  },
];

const education = [
  {
    institution: "Atomic Energy Central School",
    degree: "Secondary, Higher Secondary",
    location: "Kakrapar, Gujarat",
    duration: "April 2014 - Mar 2017",
    details: "Secondary - 80% | Higher Secondary - 55%",
    logo: "https://www.aecs-kudankulam.ac.in/userfiles/file/Atomic-Energy-Central-School-1-ECIL-Hyderabad.png",
  },
  {
    institution: "Narsee Monjee Institute of Management Studies (NMIMS)",
    degree: "BTech Electronic and Telecommunication",
    location: "Shirpur",
    duration: "July 2017 - May 2021",
    details: "CGPA - 2.93/4.0",
    logo: "https://upload.wikimedia.org/wikipedia/en/e/ec/Narsee_Monjee_Institute_of_Management_Studies_Logo.png",
  },
];

const ExperienceEducation = ({ darkMode }) => {
    const [scrollY, setScrollY] = useState(0);
    const maxScroll = 1600;
  
    useEffect(() => {
      const handleScroll = () => {
        setScrollY(Math.min(window.scrollY-100 , maxScroll));
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, [maxScroll]);

  return (
    <div className={`w-full py-12 bg-gray-100 relative ${darkMode ? "bg-white text-gray-900" : "bg-gray-900 text-white"}`}>
      <div className="max-w-5xl mx-auto px-6 relative">
        {/* Aeroplane Icon moving with Scroll for Experience */}
        <div
          className="absolute left-5 md:left-1/2 transform -translate-x-1/2"
          style={{ top: `${scrollY *0.85}px` }}
        >
          <img src="/images/fly.png" width={50} height={50} alt="Aeroplane" />
        </div>

        {/* Experience Section */}
        <h2 className="text-3xl font-bold text-blue-600 mb-6 text-center">Experience</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2 top-0 w-1 h-full border-l-2 border-dashed border-blue-500 transform  -translate-x-1/2"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`bg-white p-6 shadow-md rounded-lg flex items-center gap-6 relative  w-[85%] md:w-[45%] ${index % 2 === 0 ? "md:ml-auto ml-10" : "md:mr-auto md:m-0 ml-10 m-10"}`}>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
                <p className="text-gray-600">{exp.company}</p>
                <p className="text-gray-500 text-sm">{exp.duration}</p>
                <p className="text-gray-700 mt-2">{exp.description}</p>
              </div>
              <img src={exp.logo} alt={exp.company} width={60} height={60} className="rounded-full border border-gray-300" />
              <div className=  {`absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white ${index % 2 === 0 ? " left-[-40px] md:left-[-40px] ": " right-0 md:right-[-53px]" }`} >
              </div>
            </div>
            
          ))}
        </div>

        {/* Aeroplane Icon moving with Scroll for Education */}
       

        {/* Education Section */}
        <h2 className="text-3xl font-bold text-blue-600 mt-12 mb-6 text-center">Education</h2>
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="absolute left-0 md:left-1/2  top-0 w-1 h-full border-l-2 border-dashed border-blue-500 transform -translate-x-1/2"></div>
          {education.map((edu, index) => (
            <div key={index} className={`bg-white p-6 shadow-md rounded-lg flex items-center gap-6 relative w-[85%] md:w-[45%] ${index % 2 === 0 ?  "md:mr-auto md:m-0 ml-10 m-10" : "md:ml-auto ml-10"}`}>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.institution}</h3>
                <p className="text-gray-600">{edu.degree}</p>
                <p className="text-gray-500 text-sm">{edu.location}</p>
                <p className="text-gray-500 text-sm">{edu.duration}</p>
                <p className="text-gray-700 mt-2">{edu.details}</p>
              </div>
              <img src={edu.logo} alt={edu.institution} width={60} height={60} className="rounded-full border border-gray-300" />
              <div className=  {`absolute top-1/2  transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-500 rounded-full border-2 border-white ${index % 2 === 0 ? " right-0 md:right-[-53px]": "left-[-40px] md:left-[-40px] " }`} >
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExperienceEducation;
