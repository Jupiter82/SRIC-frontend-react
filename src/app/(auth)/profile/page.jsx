"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaAngleDoubleRight } from "react-icons/fa";

export default function ProfilePage() {


  return (
    <div>
      <div className="flex container mx-2 my-4 ">
        <div>
          <div className="flex row gap-2 mx-4 text-blue-500">
            <h1 className="flex gap-2 ">
             <FaHome className="text-xl" /> Home <FaChevronRight className="my-1" />
            </h1>
            <h1>Dashboard</h1>
          </div>
          <div className="flex mx-6 my-6 text-blue-500">
            <h1 className="flex text-4xl">
              Dashboard<FaAngleDoubleRight className="my-5 text-sm" />{" "}
            </h1>
            <h1 className="my-4">overview & stats</h1>
          </div>
        </div>
      </div>
      {/* <hr className="w-full h-1  my-2 border-0 rounded md:my-2 dark:bg-gray-500"/> */}
    </div>
    
  );
}
