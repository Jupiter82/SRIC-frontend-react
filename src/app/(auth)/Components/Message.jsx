import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";

export default function Message_admin() {
  return (
    <div className=" ">
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href={"/profile"}>
          <h1 className="flex gap-2 ">
            <FaHome className="text-xl" /> Home{" "}
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Message 
        </h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Program</h1>
      </div>
      <button className="text-white flex text-xl bg-green-400 rounded-md p-4  mx-4 ">
        <FaPlus className="mx-2 text-3xl" />
        Add New Program
      </button>

      <h1 className="mx-4 text-xl py-4">Program List</h1>
      <hr className="font-bold" />
      <div className=" w-full">
        <table className=" w-full">
          <thead className=" bg-gray-300">
            <tr className="">
              <td className="px-2 border-2">S.N.</td>
              <td className="px-2 border-2">Title</td>
              <td className="px-2 border-2">Description</td>
              <td className="px-2 border-2">Status</td>
              <td className="px-2 border-2">Update</td>
              <td className="px-2 border-2">Action</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="flex gap-1">
                <Link href={"/view"}>
                  {" "}
                  <FiEye className="mx-2 text-xl text-black bg-green-500" />
                </Link>
                <Link href={"/Edit"}>
                  <FiEdit className=" text-xl bg-blue-500" />
                </Link>
                <Link href={"/Delete"}>
                  <RiDeleteBin5Line className="text-xl mx-2 bg-red-500" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
