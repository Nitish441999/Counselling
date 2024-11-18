import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  return (
    <nav className="bg-blue-600 text-white p-4 relative">
      <div className="container mx-auto flex justify-between items-center max-w-7xl">
        {/* Website Name */}
        <h1 className="text-xl font-bold">Website Name</h1>

        {/* Mobile Toggle Button */}
        <button
          className="text-white text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 uppercase">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li
            className="relative group"
            onMouseEnter={() => setShowCollegeDropdown(true)}
            onMouseLeave={() => setShowCollegeDropdown(false)}
          >
            <span className="hover:text-gray-300 cursor-pointer py-5 ">College</span>
            {showCollegeDropdown && (
              <ul className="absolute bg-white text-black mt-4 rounded shadow-lg w-48 list-none z-40">
                <li className="px-4 py-2 hover:bg-gray-200">B.Tech Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">MBA Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">MBBS Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">MCA Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">BBA Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">BCA Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">BE Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">BDS Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">LAW Collage</li>
                <li className="px-4 py-2 hover:bg-gray-200"> College</li>
                <li className="px-4 py-2 hover:bg-gray-200">MBA Colleges</li>
                <li className="px-4 py-2 hover:bg-gray-200">MBBS Collage</li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setShowCourseDropdown(true)}
            onMouseLeave={() => setShowCourseDropdown(false)}
          >
            <span className="hover:text-gray-300 cursor-pointer py-5">Course</span>
            {showCourseDropdown && (
              <ul className="absolute bg-white text-black mt-4 rounded shadow-lg w-48 list-none z-40">
                <li className="px-4 py-2 hover:bg-gray-200">Course 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Course 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Course 3</li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Blog</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
        </ul>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`fixed top-30 right-0 h-auto w-2/3 rounded-md bg-blue-700 text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li className="hover:text-gray-300 cursor-pointer">Home</li>
          <li
            className="relative group"
            onClick={() => setShowCollegeDropdown(!showCollegeDropdown)}
          >
            <span className="hover:text-gray-300 cursor-pointer">College</span>
            {showCollegeDropdown && (
              <ul className="bg-white text-black mt-2 rounded shadow-lg list-none">
                <li className="px-4 py-2 hover:bg-gray-200">College 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">College 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">College 3</li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onClick={() => setShowCourseDropdown(!showCourseDropdown)}
          >
            <span className="hover:text-gray-300 cursor-pointer">Course</span>
            {showCourseDropdown && (
              <ul className="bg-white text-black mt-2 rounded shadow-lg list-none">
                <li className="px-4 py-2 hover:bg-gray-200">Course 1</li>
                <li className="px-4 py-2 hover:bg-gray-200">Course 2</li>
                <li className="px-4 py-2 hover:bg-gray-200">Course 3</li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300 cursor-pointer">About</li>
          <li className="hover:text-gray-300 cursor-pointer">Blog</li>
          <li className="hover:text-gray-300 cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
