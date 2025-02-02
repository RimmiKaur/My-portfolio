"use client"
import Image from "next/image";
import Navbar from "./components/NavigationBar";
import { useEffect, useState } from "react";
import HomePage from "./components/Homepage";
import About from "./components/About";
import Project from "./components/Project";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { useInView } from "react-intersection-observer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const { ref: skillsRef, inView: skillsInView } = useInView({ triggerOnce: false });
  
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (
      storedTheme === "dark" ||
      (!storedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <>
      <Navbar darkMode={darkMode} toggleTheme={toggleTheme} />
      <div data-section="home">
        <HomePage darkMode={darkMode} />
      </div>
      <div data-section="about">
        <About darkMode={darkMode} />
      </div>
      <div data-section="skills" ref={skillsRef}>
        <Skills darkMode={darkMode} animate={skillsInView} />
      </div>
      <div data-section="projects">
        <Project darkMode={darkMode} />
      </div>
      <div data-section="contact">
        <Contact darkMode={darkMode} />
      </div>
    </>
  );
}
