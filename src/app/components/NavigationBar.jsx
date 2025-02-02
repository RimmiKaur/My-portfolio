"use client";

import { useState } from "react";
import Link from "next/link";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar({ darkMode, toggleTheme }) {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(`[data-section='${targetId}']`);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80, // Adjust for navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-colors duration-300 ${
        darkMode
          ? "bg-white text-gray-900 shadow-lg"
          : " bg-gray-900 text-white shadow-[0_4px_10px_rgba(255,255,255,0.2)]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Link href="/">
              <p className="text-lg font-bold cursor-pointer">Portfolio</p>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6">
            {[
              { name: "Home", path: "home" },
              { name: "About", path: "about" },
              { name: "Skills", path: "skills" },
              { name: "Projects", path: "projects" },
              { name: "Contact", path: "contact" },
            ].map((link) => (
              <a
                key={link.path}
                href={`#${link.path}`}
                onClick={(e) => handleScroll(e, link.path)}
              >
                <p className="hover:text-blue-500 transition cursor-pointer">{link.name}</p>
              </a>
            ))}
          </div>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 dark:bg-gray-200 bg-gray-700 rounded-full focus:outline-none transition duration-300"
          >
            {darkMode ? (
              <SunIcon className="w-6 h-6 text-yellow-500" />
            ) : (
              <MoonIcon className="w-6 h-6 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
