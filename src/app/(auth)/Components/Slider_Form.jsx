"use client"
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
export default function Slider_Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await adminPostApi("/api/v1/banner",{
        email,
        password,
      }) 
    } catch (error) {
      console.error("Something is wrong:", error);
     
    }
  };
  return (
    <div className="mx-4">
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href={"/profile"}>
          <h1 className="flex gap-2 ">
            <FaHome className="text-xl" /> Home{" "}
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>Slider</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Slider </h1>
      </div>
      <form className="py-4"  onSubmit={handleSubmit}>
        <div className="w-full">
          <h1>Choose Slider:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
          <div>
            <h1>Slider Title:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Slider Description:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Slider Link:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
        </div>
        <div className="my-2">
          <h1>Alternative Name:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
