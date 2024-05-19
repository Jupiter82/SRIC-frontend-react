import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillFacebook } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

export default function Instructor() {
  return (
    <div className="">
      <div className="grid grid-col-1 text-center p-4">
        <h1 className="text-blue-500 text-2xl">INSTRUCTOR</h1>
        <h2 className="text-4xl">Expert Instructor</h2>
      </div>
      <div className="flex justify-center flex-col md:flex-row gap-2 ">
        <div className="relative overflow-hidden bg-blue-100 rounded-md">
          <Image
            src="/images/team-1.jpg"
            width={400}
            height={400}
            className="p-4 hover:scale-125 duration-500 ease-in-out"
            alt=""
          />
          <div className="absolute flex top-[75%] left-[40%] ">
            <Link href={"https://www.facebook.com/"}>
              <AiFillFacebook className="text-blue-500 text-3xl  bg-white" />
            </Link>
            <Link href={"https://twitter.com/"}>
              <FaSquareXTwitter className="text-blue-500 text-3xl bg-white" />
            </Link>
            <Link href={"https://instagram.com/"}>
              <FaSquareInstagram className="text-blue-500 text-3xl bg-white" />
            </Link>
          </div>
          <div className="py-6">
            <h1 className="text-center">Instructor Name</h1>
            <h1 className="text-center">Designation</h1>
          </div>
        </div>
        <div className="relative overflow-hidden bg-blue-100 rounded-md">
          <Image
            src="/images/team-2.jpg"
            width={400}
            height={400}
            className="p-4 hover:scale-125 duration-500 ease-in-out"
            alt=""
          />
          <div className="absolute flex top-[75%] left-[40%] ">
            <Link href={"https://www.facebook.com/"}>
              <AiFillFacebook className="text-blue-500 text-3xl  bg-white" />
            </Link>
            <Link href={"https://twitter.com/"}>
              <FaSquareXTwitter className="text-blue-500 text-3xl bg-white" />
            </Link>
            <Link href={"https://instagram.com/"}>
              <FaSquareInstagram className="text-blue-500 text-3xl bg-white" />
            </Link>
          </div>
          <div className="py-6">
            <h1 className="text-center">Instructor Name</h1>
            <h1 className="text-center">Designation</h1>
          </div>
        </div>
        <div className="relative overflow-hidden bg-blue-100 rounded-md">
          <Image
            src="/images/team-3.jpg"
            width={400}
            height={400}
            className="p-4 hover:scale-125 duration-500 ease-in-out"
            alt=""
          />
          <div className="absolute flex top-[75%] left-[40%] ">
            <Link href={"https://www.facebook.com/"}>
              <AiFillFacebook className="text-blue-500 text-3xl  bg-white" />
            </Link>
            <Link href={"https://twitter.com/"}>
              <FaSquareXTwitter className="text-blue-500 text-3xl bg-white" />
            </Link>
            <Link href={"https://instagram.com/"}>
              <FaSquareInstagram className="text-blue-500 text-3xl bg-white" />
            </Link>
          </div>
          <div className="py-6">
            <h1 className="text-center">Instructor Name</h1>
            <h1 className="text-center">Designation</h1>
          </div>
        </div>
      </div>
    </div>
  );
}
