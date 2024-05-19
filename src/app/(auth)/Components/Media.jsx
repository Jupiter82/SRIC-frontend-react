"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaDownload } from "react-icons/fa";

export default function Media() {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };
  const handleConfirmDelete = () => {
    console.log("Delete confirmed");
    setShowDeleteModal(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
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
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>Media</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">List</h1>
      </div>
      <Link href={"/Login_Form"}>
        <button className="text-white flex text-xl bg-green-400 rounded-md p-4  mx-4 ">
          <FaPlus className="mx-2 text-3xl" />
          Add New
        </button>
      </Link>

      <h1 className="mx-4 text-xl py-4">Logo List</h1>
      <hr className="font-bold" />
      <div className="overflow-x-auto">
        <table className=" w-full border-2">
          <thead className=" bg-gray-300 border-2">
            <tr className="">
              <td className="px-2 border-2">Item</td>
              <td className="px-2 border-2">Size</td>
              <td className="px-2 border-2">Type</td>
              <td className="px-2 border-2">Modified</td>
              <td className="px-2 border-2">Action</td>
            </tr>
          </thead>
          <tbody className="border-2">
            <tr className="">
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="flex gap-1">
                <Link href={"/view"}>
                  {" "}
                  <FaDownload className="mx-2 text-xl text-black bg-green-500" />
                </Link>
                <Link href={"/Edit"}>
                  <FiEdit className=" text-xl bg-blue-500" />
                </Link>
                <RiDeleteBin5Line
                  className="text-xl mx-2 bg-red-500"
                  onClick={handleDeleteClick}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {showDeleteModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-md">
            <h2 className="text-lg font-semibold mb-4">Delete</h2>
            <p>Please confirm you would like to delete this Media.</p>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                onClick={handleConfirmDelete}
              >
                Yes
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md"
                onClick={handleCancelDelete}
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
