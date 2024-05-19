import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Login_form() {
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
        <h1>Logo</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Logo </h1>
      </div>
      <div className="py-4">
        <div className="w-full">
          <h1>Image:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
        </div>
        <div className="my-2">
          <h1>Alternative Name:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
