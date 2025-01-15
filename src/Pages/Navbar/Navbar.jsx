import React, { useState } from "react";
// import Logo from "../assets/Images/jsp.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollageDropdownOpen, setIsCollageDropdownOpen] = useState(false);
  const [isservicveDropdownOpen, setIsserviceDropdownOpen] = useState(false);
  const [isDivisionsDropdownOpen, setIsDivisionsDropdownOpen] = useState(false);
  const [isIndinanCollageSubDropdownOpen, setIsIndinanCollageSubDropdownOpen] =
    useState(false);
  const [isMedicalSubDropdownOpen, setIsMedicalSubDropdownOpen] =
    useState(false);
  const [isManagementSubDropdownOpen, setIsManagementSubDropdownOpen] =
    useState(false);
  const [isNursingSubDropdownOpen, setIsNursingSubDropdownOpen] =
    useState(false);
  const [isPharmacySubDropdownOpen, setIsPharmacySubDropdownOpen] =
    useState(false);
  const [isIndianCollagesSubDropdownOpen, setIsIndianCollagesSubDropdownOpen] =
    useState(false);
  const [isAbrodCollagesSubDropdownOpen, setIsAbrodCollagesSubDropdownOpen] =
    useState(false);
  const [isMiscellaneousSubDropdownOpen, setIsMiscellaneousSubDropdownOpen] =
    useState(false);
  const [isEngineeringSubDropdownOpen, setIsEngineeringSubDropdownOpen] =
    useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
    setIsCollageDropdownOpen(false);
    setIsDivisionsDropdownOpen(false);
    setIsIndinanCollageSubDropdownOpen(false);
    setIsMiscellaneousSubDropdownOpen(false);
    setIsMedicalSubDropdownOpen(false);
    setIsManagementSubDropdownOpen(false);
    setIsNursingSubDropdownOpen(false);
    setIsPharmacySubDropdownOpen(false);
    setIsAbrodCollagesSubDropdownOpen(false);
    setIsIndianCollagesSubDropdownOpen(false);
    setIsEngineeringSubDropdownOpen(false);
    setIsserviceDropdownOpen(false);
  };

  return (
    <nav className="navbar sticky top-0 z-20 bg-blue-700 shadow-xl">
      <div className="w-full px-16 max-md:px-1 ">
        <div className="flex justify-between items-center flex-w">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              className="w-20 h-20 max-md:w-20 rounded-full"
              src="https://i.imgur.com/iUigS5P.jpeg"
              alt="Logo"
            />
            <Link
              to="/"
              className="flex items-center py-5 text-white"
              onClick={handleLinkClick}
            >
              <span className="font-bold uppercase text-[20px] max-md:text-[15px]">
                Student Counselling Corner
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/"
              className="py-5 px-3 text-white uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/about"
              className="py-5 px-3 text-white uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              About
            </Link>

            {/* Collages Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center py-5 px-3 text-white uppercase font-semibold hover:text-blue-300"
                onClick={() =>
                  setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
                }
              >
                Collages <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden group-hover:block bg-blue-700 text-white shadow-lg top-full w-48 pt-2">
                {/* Indian Collages */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsIndianCollagesSubDropdownOpen(true)}
                  onMouseLeave={() => setIsIndianCollagesSubDropdownOpen(false)} // Fixed
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Indian Collages <IoMdArrowDropright size={20} />
                  </span>

                  {isIndianCollagesSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="/indianBtech"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        B.Tech Collages
                      </Link>
                      <Link
                        to="/indianMbbs"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        MBBS Collages
                      </Link>
                      <Link
                        to="/indianLaw"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        Law Collages
                      </Link>
                    </div>
                  )}
                </div>

                {/* Abroad Collages */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsAbrodCollagesSubDropdownOpen(true)}
                  onMouseLeave={() => setIsAbrodCollagesSubDropdownOpen(false)} // Fixed
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Abroad Collages <IoMdArrowDropright size={20} />
                  </span>

                  {isAbrodCollagesSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="/abrodBtech"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        B.Tech Collages
                      </Link>
                      <Link
                        to="/abrodMbbs"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        MBBS Collages
                      </Link>
                      <Link
                        to="/abrodLaw"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        Law Collages
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Cources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center py-5 px-3 text-white uppercase font-semibold hover:text-blue-300"
                onClick={() =>
                  setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
                }
              >
                Cources <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden group-hover:block bg-blue-700 text-white shadow-lg top-full w-48 pt-2">
                {/* Machined Parts */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsEngineeringSubDropdownOpen(true)}
                  onMouseLeave={() => setIsEngineeringSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Engineering
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isEngineeringSubDropdownOpen && (
                    <div className="absolute right-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        B.Tech
                      </Link>
                      <Link
                        to="/metalpart"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        M.Tech
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        Diploma
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMedicalSubDropdownOpen(true)}
                  onMouseLeave={() => setIsMedicalSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Medical
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isMedicalSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        MBBS
                      </Link>
                      <Link
                        to="/metalpart"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        BHMS
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        BAMS
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        MD
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsManagementSubDropdownOpen(true)}
                  onMouseLeave={() => setIsManagementSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Management
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isManagementSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        MBA
                      </Link>
                      <Link
                        to="/metalpart"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        PGDM
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        MCA
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        BCA
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        BBA NORMAL
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        BBA IN SPECIALIZATION
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsNursingSubDropdownOpen(true)}
                  onMouseLeave={() => setIsNursingSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Nursing
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isNursingSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        GNM
                      </Link>
                      <Link
                        to="/metalpart"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        B.SC NURSING
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        M.SC NURSING
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        ANM
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsPharmacySubDropdownOpen(true)}
                  onMouseLeave={() => setIsPharmacySubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Pharmacy
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isPharmacySubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        D pharma
                      </Link>
                      <Link
                        to="/metalpart"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        B pharma
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        M pharma
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/RopewaySolutions"
                  className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                  onClick={handleLinkClick}
                >
                  Agriculture
                </Link>
                <Link
                  to="/SpecialPurposeMachines"
                  className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                  onClick={handleLinkClick}
                >
                  LAW
                </Link>

                <Link
                  to="/SpecialPurposeMachines"
                  className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                  onClick={handleLinkClick}
                >
                  Paramedical
                </Link>
                <Link
                  to="/SpecialPurposeMachines"
                  className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                  onClick={handleLinkClick}
                >
                  Mass Communication
                </Link>
                {/* Miscellaneous */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsMiscellaneousSubDropdownOpen(true)}
                  onMouseLeave={() => setIsMiscellaneousSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Facility of Education
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isMiscellaneousSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-blue-700 w-[180px]">
                      <Link
                        to="/EngineeringPlasticsTrading"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        B.ED
                      </Link>
                      <Link
                        to="/fabrication"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        M.ED
                      </Link>
                      <Link
                        to="/ReverseEngineering"
                        className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5"
                        onClick={handleLinkClick}
                      >
                        D.LED
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                className="flex items-center py-5 px-3 text-white uppercase font-semibold hover:text-blue-300"
                onClick={() =>
                  setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
                }
              >
                Service <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden  group-hover:block bg-blue-700 text-white shadow-lg top-full w-48 pt-2">
                <div className="relative group">
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Career Counseling
                  </span>

                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Career Advisor
                  </span>
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Admission Guidance
                  </span>
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Education Loan Assistance
                  </span>
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Scholarship
                  </span>
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Placement Assistance
                  </span>
                  <span className="flex items-center px-4 py-2 cursor-pointer font-semibold hover:bg-[#214fc6] hover:text-white transition-all duration-300 hover:pl-5">
                    Loan Guardian Service
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="py-5 px-3 text-white uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-4xl text-white"
            >
              {isMobileMenuOpen ? "" : <CgMenuRightAlt />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-blue-700 p-4 text-white w-2/3 transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-4xl text-white absolute top-4 right-4"
        >
          <CgClose />
        </button>
        <div className="flex flex-col space-y-4 mt-16">
          <Link
            to="/"
            onClick={handleLinkClick}
            // className="hover:bg-blue-700 hover:text-white p-4"
          >
            Home
          </Link>
          <Link to="/about" onClick={handleLinkClick}>
            About
          </Link>
          {/* <Link to="/service" onClick={handleLinkClick}>
            Service
          </Link> */}

          {/* Collages Dropdown */}
          <div>
            <button
              onClick={() => setIsCollageDropdownOpen(!isCollageDropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              Collages <MdKeyboardArrowDown />
            </button>
            {isCollageDropdownOpen && (
              <div className="pl-4">
                <button
                  onClick={() =>
                    setIsIndinanCollageSubDropdownOpen(
                      !isIndinanCollageSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Indian Collages <IoMdArrowDropright size={20} />
                </button>
                {isIndinanCollageSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/Indian Collages 1" onClick={handleLinkClick}>
                      Indian Collages 1
                    </Link>
                    <br />
                    <Link to="/Indian Collages 2" onClick={handleLinkClick}>
                      Indian Collages 2
                    </Link>
                    <br />
                    <Link to="/Indian Collages 3" onClick={handleLinkClick}>
                      Indian Collages 3
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsAbrodCollagesSubDropdownOpen(
                      !isAbrodCollagesSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Abrod Collages <IoMdArrowDropright size={20} />
                </button>
                {isAbrodCollagesSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/AbrodCollages1" onClick={handleLinkClick}>
                      Abrod Collages 1
                    </Link>
                    <br />
                    <Link to="/AbrodCollages2" onClick={handleLinkClick}>
                      Abrod Collages 2
                    </Link>
                    <br />
                    <Link to="/Abrod Collages3" onClick={handleLinkClick}>
                      Abrod Collages 3
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Divisions Dropdown */}
          <div>
            <button
              onClick={() =>
                setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
              }
              className="flex items-center justify-between w-full"
            >
              Course <MdKeyboardArrowDown />
            </button>
            {isDivisionsDropdownOpen && (
              <div className="pl-4">
                <button
                  onClick={() =>
                    setIsEngineeringSubDropdownOpen(
                      !isEngineeringSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Engineering <IoMdArrowDropright size={20} />
                </button>
                {isEngineeringSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/EngineeringPlastics" onClick={handleLinkClick}>
                      B.tech
                    </Link>
                    <br />
                    <Link to="/metalpart" onClick={handleLinkClick}>
                      M.Tech
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      Diploma
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsMedicalSubDropdownOpen(!isMedicalSubDropdownOpen)
                  }
                  className="flex items-center justify-between w-full"
                >
                  Medical <IoMdArrowDropright size={20} />
                </button>
                {isMedicalSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/EngineeringPlastics" onClick={handleLinkClick}>
                      MBBS
                    </Link>
                    <br />
                    <Link to="/metalpart" onClick={handleLinkClick}>
                      BHMS
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BAMS
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      MD
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsManagementSubDropdownOpen(!isManagementSubDropdownOpen)
                  }
                  className="flex items-center justify-between w-full"
                >
                  Management <IoMdArrowDropright size={20} />
                </button>
                {isManagementSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/EngineeringPlastics" onClick={handleLinkClick}>
                      MBA
                    </Link>
                    <br />
                    <Link to="/metalpart" onClick={handleLinkClick}>
                      PGDM
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      MCA
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BCA
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BBA NORMAL
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BBA IN SPECIALIZATION
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsNursingSubDropdownOpen(!isNursingSubDropdownOpen)
                  }
                  className="flex items-center justify-between w-full"
                >
                  Nursing <IoMdArrowDropright size={20} />
                </button>
                {isNursingSubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/EngineeringPlastics" onClick={handleLinkClick}>
                      GNM
                    </Link>
                    <br />
                    <Link to="/metalpart" onClick={handleLinkClick}>
                      B.SC NURSING
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      M.SC NURSING
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      ANM
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsPharmacySubDropdownOpen(!isPharmacySubDropdownOpen)
                  }
                  className="flex items-center justify-between w-full"
                >
                  Pharmacy <IoMdArrowDropright size={20} />
                </button>
                {isPharmacySubDropdownOpen && (
                  <div className="pl-4">
                    <Link to="/EngineeringPlastics" onClick={handleLinkClick}>
                      D pharma
                    </Link>
                    <br />
                    <Link to="/metalpart" onClick={handleLinkClick}>
                      B pharma
                    </Link>
                    <br />
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      M pharma
                    </Link>
                  </div>
                )}

                <button
                  onClick={() =>
                    setIsMiscellaneousSubDropdownOpen(
                      !isMiscellaneousSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Facility of Education <IoMdArrowDropright size={20} />
                </button>
                {isMiscellaneousSubDropdownOpen && (
                  <div className="pl-4">
                    <Link
                      to="/EngineeringPlasticsTrading"
                      onClick={handleLinkClick}
                    >
                      B.ED
                    </Link>
                    <br />
                    <Link to="/fabrication" onClick={handleLinkClick}>
                      M.ED
                    </Link>
                    <br />
                    <Link to="/ReverseEngineering" onClick={handleLinkClick}>
                      D.LED
                    </Link>
                  </div>
                )}

                <Link to="/RopewaySolutions" onClick={handleLinkClick}>
                  Agriculture
                </Link>
                <br />
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  LAW
                </Link>
                <br />
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  Paramedical
                </Link>
                <br />
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  Mass Communication
                </Link>
              </div>
            )}
          </div>

          <div>
            <button
              onClick={() => setIsserviceDropdownOpen(!isservicveDropdownOpen)}
              className="flex items-center justify-between w-full"
            >
              Service <MdKeyboardArrowDown />
            </button>
            {isservicveDropdownOpen && (
              <div className="pl-4">
                <button className="flex items-center justify-between w-full">
                  Career Counseling
                </button>

                <button className="flex items-center justify-between w-full">
                  Career Advisor
                </button>
                <button className="flex items-center justify-between w-full">
                  Admission Guidance
                </button>
                <button className="flex items-center justify-between w-full">
                  Education Loan Assistance
                </button>
                <button className="flex items-center justify-between w-full">
                  Scholarship
                </button>
                <button className="flex items-center justify-between w-full">
                  Placement Assistance
                </button>
                <button className="flex items-center justify-between w-full">
                  Loan Guardian Service
                </button>
              </div>
            )}
          </div>
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
