"use client"
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function HomePage({ darkMode }) {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const iconsRef = useRef(null);
  const [title, setTitle] = useState("");
  const titles = ["Rimmi Kaur", "MERN Stack Developer"];
  let titleIndex = 0;

  useEffect(() => {
    const typeTitle = () => {
      let currentTitle = titles[titleIndex];
      let charIndex = 0;
      setTitle("");

      const typeInterval = setInterval(() => {
        if (charIndex <= currentTitle.length) {
          setTitle(currentTitle.substring(0, charIndex) + "<span class='text-white'>|</span>"); // Append cursor dynamically
          charIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => eraseTitle(), 1000);
        }
      }, 150);
    };

    const eraseTitle = () => {
      let charIndex = titles[titleIndex].length;

      const eraseInterval = setInterval(() => {
        if (charIndex >= 0) {
          if (darkMode) {
            setTitle(titles[titleIndex].substring(0, charIndex) + "<span class='text-black '>|</span>");

          } else {
            setTitle(titles[titleIndex].substring(0, charIndex) + "<span class='text-white '>|</span>");

          }
          charIndex--;
        } else {
          clearInterval(eraseInterval);
          titleIndex = (titleIndex + 1) % titles.length; // Move to the next title
          setTimeout(() => typeTitle(), 500);
        }
      }, 100);
    };

    typeTitle();

    gsap.fromTo(
      iconsRef.current.children,
      { y: 10 },
      {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "power1.inOut",
        stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className={` flex flex-col justify-center items-center transition-colors duration-300 ${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}`}>
      <img src="/images/rimmikaur.jpg" alt="Rimmi Kaur" className="w-52 h-52 object-cover rounded-full border-[5px]" />

      <section ref={heroRef} className="text-center relative overflow-hidden">
        <h1 className="text-6xl font-bold relative p-3">
          Hello, I'm {" "}
          <span className="m-0 p-0 inline-block overflow-hidden">
            <span ref={textRef} className="text-blue-500 inline-block m-0 p-0" dangerouslySetInnerHTML={{ __html: title }}></span>
          </span>
        </h1>
        <p className="text-lg text-gray-400 mt-3 px-36">
          MERN Stack Developer | Frontend Enthusiast
          <br/>
          <br/>

          <span className="hidden md:block">
          Aspiring MERN Stack Developer with a proven ability to build scalable, high-performance web applications. Skilled in designing and implementing modern full-stack solutions, managing client requirements, and creating efficient, user-friendly digital experiences. Proficient in MongoDB, Express.js, React.js, and Node.js, along with Tailwind CSS and JavaScript, with a strong focus on developing robust APIs, dynamic front-end interfaces, and seamless database integrations. Adept at problem-solving, collaborating with cross-functional teams, and leveraging cutting-edge technologies to deliver impactful, responsive applications. Passionate about continuous learning and applying agile development practices to drive innovation in web solutions.
          </span>
        </p>
      </section>

      <div ref={iconsRef} className="my-10 flex space-x-6">
        <img src="images/react.png" alt="React" className="w-15 h-12" />
        <img src="images/nodejs.png" alt="Node.js" className="w-16 h-16" />
        <img src="images/mongodb.svg" alt="MongoDB" className="w-12 h-12" />
        <img src="images/nextjs.png" alt="NextJs" className="w-14 bg-white rounded-full h-14" />

      </div>
    </div>
  );
}
