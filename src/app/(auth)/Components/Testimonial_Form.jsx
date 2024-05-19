import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Testimonial_Form() {
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
        <h1>Testimonial</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Testimonial </h1>
      </div>
      <div className="py-4">
        <div className="w-full">
          <h1>Title:</h1>
          <input
            type="text"
            required="true"
            className="w-full border-2 my-2 "
          />
          <div>
            <h1>Description:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div className="w-full">
            <h1>Choose Image:</h1>
            <input
              type="file"
              required="true"
              accept="image/*"
              className="w-full border-2 my-2 "
            />
          </div>
          <div>
            <h1>Name:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Post:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Rating:</h1>
            <input
              type="Number"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div className="">
            <input type="checkbox" id="scales" name="scales"  />
            <label className="mx-2">Activate Status</label>
          </div>
          <div className="">
            <input type="checkbox" id="scales" name="scales"  />
            <label className="mx-2">Featured</label>
          </div>
        </div>
        <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
