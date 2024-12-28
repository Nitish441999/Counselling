import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showCollegeDropdown, setShowCollegeDropdown] = useState(false);
  const [showCourseDropdown, setShowCourseDropdown] = useState(false);

  const handleDropdownToggle = (dropdownType) => {
    // Close other dropdowns when toggling a new one
    if (dropdownType === "college") {
      setShowCollegeDropdown((prev) => !prev);
      setShowCourseDropdown(false);
    } else if (dropdownType === "course") {
      setShowCourseDropdown((prev) => !prev);
      setShowCollegeDropdown(false);
    }
  };

  const closeAllMenus = () => {
    // Close all dropdowns and mobile menu
    setMenuOpen(false);
    setShowCollegeDropdown(false);
    setShowCourseDropdown(false);
  };

  return (
    <nav className="flex items-center bg-blue-500 text-white sticky top-0 p-4 z-50 shadow-lg h-24">
      <div className="container mx-auto flex justify-between items-center max-w-full mx-5">
        {/* Website Name */}
        <div className=" flex justify-center items-center gap-3">
          <img
            src="https://i.imgur.com/iUigS5P.jpeg"
            alt="logo"
            className=" w-20 h-20 rounded-full "
          />
          <h1 className="text-xl font-bold uppercase max-md:text-sm">
            <Link to="/">Student Counselling Corner</Link>
          </h1>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="text-black text-2xl md:hidden"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center space-x-6 uppercase">
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setShowCollegeDropdown(true)}
            onMouseLeave={() => setShowCollegeDropdown(false)}
          >
            <span className="hover:text-gray-300 cursor-pointer py-5">
              College
            </span>
            {showCollegeDropdown && (
              <ul className="absolute bg-white text-black mt-4 rounded shadow-lg w-48 list-none z-40">
                <li className="px-4 py-3 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/btech">
                    B.Tech Colleges
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/mba">
                    MBA Colleges
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/mbbs">
                    MBBS Colleges
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/law">
                    Law Colleges
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onMouseEnter={() => setShowCourseDropdown(true)}
            onMouseLeave={() => setShowCourseDropdown(false)}
          >
            <span className="hover:text-gray-300 cursor-pointer py-5">
              Course
            </span>
            {showCourseDropdown && (
              <ul className="absolute bg-white text-black mt-4 rounded shadow-lg w-48 list-none z-40">
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/mbbs">
                    MBBS
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/btech">
                    B.Tech
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-200">
                  <Link className="px-4 py-2" to="/law">
                    Law
                  </Link>
                </li>
              </ul>
            )}
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/about">About</Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>

      {/* Mobile Navigation Links */}
      <div
        className={`fixed top-20 right-0 h-auto w-2/3 bg-blue-700 text-white z-50 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <ul className="flex flex-col space-y-4 p-6">
          <li
            onClick={closeAllMenus}
            className="hover:text-gray-300 cursor-pointer"
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className="relative group"
            onClick={() => handleDropdownToggle("college")}
          >
            <span className="hover:text-gray-300 cursor-pointer">College</span>
            {showCollegeDropdown && (
              <ul className="bg-white text-black mt-2 rounded shadow-lg list-none">
                <li
                  onClick={closeAllMenus}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link to="/btech">B.Tech Colleges</Link>
                </li>
                <li
                  onClick={closeAllMenus}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link to="/mba">MBA Colleges</Link>
                </li>
                <li
                  onClick={closeAllMenus}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link to="/mbbs">MBBS Colleges</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            className="relative group"
            onClick={() => handleDropdownToggle("course")}
          >
            <span className="hover:text-gray-300 cursor-pointer">Course</span>
            {showCourseDropdown && (
              <ul className="bg-white text-black mt-2 rounded shadow-lg list-none">
                <li
                  onClick={closeAllMenus}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link to="/mbbsCourses">MBBS</Link>
                </li>
                <li
                  onClick={closeAllMenus}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link to="/betchCourses">B-Tech</Link>
                </li>
                <li
                  onClick={closeAllMenus}
                  className="px-4 py-2 hover:bg-gray-200"
                >
                  <Link to="/lawCourses">Law</Link>
                </li>
              </ul>
            )}
          </li>
          <li
            onClick={closeAllMenus}
            className="hover:text-gray-300 cursor-pointer"
          >
            <Link to="/about">About</Link>
          </li>
          <li
            onClick={closeAllMenus}
            className="hover:text-gray-300 cursor-pointer"
          >
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
