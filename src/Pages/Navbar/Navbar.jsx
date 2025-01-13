import React, { useState } from "react";
// import Logo from "../assets/Images/jsp.png";
import { CgMenuRightAlt, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoMdArrowDropright } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCollageDropdownOpen, setIsCollageDropdownOpen] = useState(false);
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
  };

  return (
    <nav className="navbar sticky top-0 z-20 bg-white shadow-xl">
      <div className="w-full px-16 max-md:px-1 ">
        <div className="flex justify-between items-center flex-w">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <img
              className="w-20 h-20 max-md:w-20"
              src="https://i.imgur.com/iUigS5P.jpeg"
              alt="Logo"
            />
            <Link
              to="/"
              className="flex items-center py-5 text-[#214fc6]"
              onClick={handleLinkClick}
            >
              <span className="font-bold uppercase text-[20px]">
                Student Counselling Corner
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link
              to="/"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            {/* <Link
              to="/about"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              About
            </Link> */}
            {/* <Link
              to="/service"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Service
            </Link> */}

            {/* Collages Dropdown */}
            <div className="relative group">
              <button className="flex items-center py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300">
                Collages <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden  group-hover:block bg-white text-[#214fc6] shadow-lg top-full w-48 pt-2">
                {/* Machined Parts */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsIndianCollagesSubDropdownOpen(true)}
                  onMouseLeave={() => isIndianCollagesSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Indian Collages <IoMdArrowDropright size={20} />
                  </span>
                  {isIndianCollagesSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Indian Collages
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Abrod Collages
                      </Link>
                    </div>
                  )}
                </div>
                <div
                  className="relative group"
                  onMouseEnter={() => setIsAbrodCollagesSubDropdownOpen(true)}
                  onMouseLeave={() => setIsAbrodCollagesSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Abrod Collages <IoMdArrowDropright size={20} />
                  </span>
                  {isAbrodCollagesSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Indian Collages
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Abrod Collages
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        Abrod Collages
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Cources Dropdown */}
            <div className="relative group">
              <button
                className="flex items-center py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
                onClick={() =>
                  setIsDivisionsDropdownOpen(!isDivisionsDropdownOpen)
                }
              >
                Cources <MdKeyboardArrowDown />
              </button>
              <div className="absolute hidden group-hover:block bg-white text-[#214fc6] shadow-lg top-full w-48 pt-2">
                {/* Machined Parts */}
                <div
                  className="relative group"
                  onMouseEnter={() => setIsEngineeringSubDropdownOpen(true)}
                  onMouseLeave={() => setIsEngineeringSubDropdownOpen(false)}
                >
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Engineering
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isEngineeringSubDropdownOpen && (
                    <div className="absolute right-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        B.Tech
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        M.Tech
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
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
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Medical
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isMedicalSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        MBBS
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        BHMS
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        BAMS
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
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
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Management
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isManagementSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        MBA
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        PGDM
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        MCA
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        BCA
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        BBA NORMAL
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
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
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Nursing
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isNursingSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        GNM
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        B.SC NURSING
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        M.SC NURSING
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
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
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Pharmacy
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isPharmacySubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="EngineeringPlastics"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        D pharma
                      </Link>
                      <Link
                        to="/metalpart"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        B pharma
                      </Link>
                      <Link
                        to="/MicroMachining"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        M pharma
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/RopewaySolutions"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Agriculture
                </Link>
                <Link
                  to="/SpecialPurposeMachines"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  LAW
                </Link>

                <Link
                  to="/SpecialPurposeMachines"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
                  onClick={handleLinkClick}
                >
                  Paramedical
                </Link>
                <Link
                  to="/SpecialPurposeMachines"
                  className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold"
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
                  <span className="flex items-center px-4 py-2 cursor-pointer hover:bg-[#214fc6] hover:text-white font-semibold">
                    Facility of Education
                    <IoMdArrowDropright size={20} />
                  </span>
                  {isMiscellaneousSubDropdownOpen && (
                    <div className="absolute left-full top-0 bg-white w-[180px]">
                      <Link
                        to="/EngineeringPlasticsTrading"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        B.ED
                      </Link>
                      <Link
                        to="/fabrication"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        M.ED
                      </Link>
                      <Link
                        to="/ReverseEngineering"
                        className="block px-4 py-2 hover:bg-[#214fc6] hover:text-white font-semibold capitalize"
                        onClick={handleLinkClick}
                      >
                        D.LED
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* <Link
              to="/newsroom"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Newsroom
            </Link> */}
            <Link
              to="/about"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              About
            </Link>
            <Link
              to="/contact"
              className="py-5 px-3 text-[#214fc6] uppercase font-semibold hover:text-blue-300"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-4xl text-[#214fc6]"
            >
              {isMobileMenuOpen ? "" : <CgMenuRightAlt />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full bg-white p-4 text-[#214fc6] w-1/2 transform transition-transform duration-300 z-50 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="text-4xl text-[#214fc6] absolute top-4 right-4"
        >
          <CgClose />
        </button>
        <div className="flex flex-col space-y-4 mt-16">
          <Link
            to="/"
            onClick={handleLinkClick}
            // className="hover:bg-white hover:text-[#214fc6] p-4"
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
                    setIsAbrodCollagesSubDropdownOpen(
                      !isAbrodCollagesSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Indian Collages <IoMdArrowDropright size={20} />
                </button>
                {isAbrodCollagesSubDropdownOpen && (
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
                    setIsIndinanCollageSubDropdownOpen(
                      !isIndinanCollageSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Engineering <IoMdArrowDropright size={20} />
                </button>
                {isIndinanCollageSubDropdownOpen && (
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
                    setIsIndinanCollageSubDropdownOpen(
                      !isIndinanCollageSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Medical <IoMdArrowDropright size={20} />
                </button>
                {isIndinanCollageSubDropdownOpen && (
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
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      MD
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsIndinanCollageSubDropdownOpen(
                      !isIndinanCollageSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Management <IoMdArrowDropright size={20} />
                </button>
                {isIndinanCollageSubDropdownOpen && (
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
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BCA
                    </Link>
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BBA NORMAL
                    </Link>
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      BBA IN SPECIALIZATION
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsIndinanCollageSubDropdownOpen(
                      !isIndinanCollageSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Nursing <IoMdArrowDropright size={20} />
                </button>
                {isIndinanCollageSubDropdownOpen && (
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
                    <Link to="/MicroMachining" onClick={handleLinkClick}>
                      ANM
                    </Link>
                  </div>
                )}
                <button
                  onClick={() =>
                    setIsIndinanCollageSubDropdownOpen(
                      !isIndinanCollageSubDropdownOpen
                    )
                  }
                  className="flex items-center justify-between w-full"
                >
                  Pharmacy <IoMdArrowDropright size={20} />
                </button>
                {isIndinanCollageSubDropdownOpen && (
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

                <Link to="/RopewaySolutions" onClick={handleLinkClick}>
                  Agriculture
                </Link>
                <br />
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  LAW
                </Link>
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  Paramedical
                </Link>
                <Link to="/SpecialPurposeMachines" onClick={handleLinkClick}>
                  Mass Communication
                </Link>
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
              </div>
            )}
          </div>

          {/* <Link to="/newsroom" onClick={handleLinkClick}>
            Newsroom
          </Link> */}
          <Link to="/contact" onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
