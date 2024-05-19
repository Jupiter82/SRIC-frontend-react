import React from "react";
import { FaGraduationCap } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";
import { FaHome } from "react-icons/fa";
import { IoBookSharp } from "react-icons/io5";

export default function Card() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:mx-4 md:grid-cols-4 p-8 gap-4 over bg-white">
      <div className=" flex flex-col items-center justify-center text-black bg-blue-200 hover:bg-blue-500 hover:text-white p-2 hover:-translate-y-5 cursor-pointer duration-300 ease-in-out">
        <FaGraduationCap className="flex items-center text-6xl  " />
        <h1 className="text-center font-semibold">Skilled Instructor</h1>
        <p className="text-center">
          Diam elitr kasd sed at elitr <br /> sed ipsum justo dolor sed <br />{" "}
          clita amet diam
        </p>
      </div>

      <div className="flex flex-col items-center text-black bg-blue-200 hover:bg-blue-500 hover:text-white p-2 hover:-translate-y-5 cursor-pointer duration-300 ease-in-out">
        <RiGlobalFill className="text-6xl" />
        <h1 className="text-center font-semibold">Online Classes</h1>
        <p className="text-center">
          Diam elitr kasd sed at elitr <br /> sed ipsum justo dolor sed <br />{" "}
          clita amet diam
        </p>
      </div>

      <div className="flex flex-col items-center text-black bg-blue-200 hover:bg-blue-500 hover:text-white p-2 hover:-translate-y-5 cursor-pointer duration-300 ease-in-out">
        <FaHome className="  text-6xl" />
        <h1 className="text-center font-semibold">Online Classes</h1>
        <p className="text-center">
          Diam elitr kasd sed at elitr <br /> sed ipsum justo dolor sed <br />{" "}
          clita amet diam
        </p>
      </div>

      <div className="flex flex-col items-center text-black bg-blue-200 hover:bg-blue-500 hover:text-white p-2 hover:-translate-y-5 cursor-pointer duration-300 ease-in-out">
        <IoBookSharp className="  text-6xl" />
        <h1 className="text-center font-semibold">Online Classes</h1>
        <p className="text-center">
          Diam elitr kasd sed at elitr <br /> sed ipsum justo dolor sed <br />{" "}
          clita amet diam
        </p>
      </div>
    </div>
  );
}
