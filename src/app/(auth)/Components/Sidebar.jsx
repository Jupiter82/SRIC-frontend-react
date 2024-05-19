"use client";
import React, { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdPermMedia } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPagesOptions, setShowPagesOptions] = useState(false);
  const [showTitleOptions, setShowTitleOptions] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const togglePagesOptions = () => {
    setShowPagesOptions(!showPagesOptions);
  };

  const toggleTitleOptions = () => {
    setShowTitleOptions(!showTitleOptions);
  };

  const closeOptions = () => {
    setShowPagesOptions(false);
    setShowTitleOptions(false);
  };

  return (
    <div className="border border-black p-8 sm:flex md:fixed md:min-h-screen bg-white">
      {/* Sidebar toggle button for small screens */}
      <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
        <IoMenu className="text-2xl text-gray-800" />
      </div>
      {/* Sidebar for medium screens and above */}
      <ul
        className={`${
          showSidebar ? "block" : "hidden"
        } md:block text-black text-xl mt-4 md:mt-0 bg-white`}
      >
        <li className="flex my-2">
          <Link
            href={"/profile"}
            className="flex items-center"
            onClick={closeOptions}
          >
            <MdDashboard className="text-2xl" /> Dashboard
          </Link>
        </li>
        <li className="flex my-2 relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={togglePagesOptions}
          >
            <MdOutlineRestorePage className="text-2xl " /> Pages
            <FaChevronDown className=" my-1 mx-2" />
          </div>
          {showPagesOptions && (
            <div className="absolute left-0 mt-6 bg-white shadow-lg rounded-md py-2 z-10">
              <Link
                href={"/Logo"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Logo
              </Link>
              <Link
                href={"/Slider"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Slider
              </Link>
              <Link
                href={"/Abouts"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                About
              </Link>
              <Link
                href={"/Testimonial"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Testimonial List
              </Link>
              <Link
                href={"/Contact_admin"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Contact
              </Link>
              <Link
                href={"/Service_admin"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Service
              </Link>
              <Link
                href={"/Case_Study"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Case Study
              </Link>
              <Link
                href={"/Program_admin"}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                Program
              </Link>
            </div>
          )}
        </li>
        <li className="flex my-2 relative">
          <div
            className="flex items-center cursor-pointer"
            onClick={toggleTitleOptions}
            
          >
            <MdOutlineRestorePage className="text-2xl"/> Title
            <FaChevronDown className="my-1 mx-6" />
          </div>
          {showTitleOptions && (
            <div className="absolute left-0 mt-6 bg-white shadow-lg rounded-md py-2 z-10">
              <Link
                href={"/Section_admin"}
                className="block px-4 py-2 hover:bg-gray-200"
                onClick={closeOptions}
              >
                Section
              </Link>
            </div>
          )}
        </li>
        {/* <li className="flex my-2" onClick={closeOptions}>
          <IoIosMail className="text-2xl" /> Message
        </li> */}
        <Link href={"/Media"}>
          <li className="flex my-2" onClick={closeOptions}>
            <MdPermMedia className="text-2xl" /> Media
          </li>
        </Link>
      </ul>
    </div>
  );
}
