import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Contact_Form() {
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
        <h1>Contact Info</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Contact Info </h1>
      </div>
      <div className="py-4">
        <div className="w-full">
          <h1>Address Title:</h1>
          <input
            type="text"
            required="true"
            className="w-full border-2 my-2 "
          />
          <div>
            <h1>Reference:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div className="w-full">
            <h1>Address:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Working:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Hour:</h1>
            <input
              type="time"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Hour off:</h1>
            <input
              type="time"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Contact Title:</h1>
            <input
              type=""
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Phone:</h1>
            <input
              type="Number"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Email:</h1>
            <input
              type="email"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
        </div>
        <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
