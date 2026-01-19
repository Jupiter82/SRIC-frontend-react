import React from "react";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import CustomButton from "../CustomButton";

export default function Service3() {
  return (
    <div>
      <div className="relative overflow-hidden">
        <Image
          src="/images/banner1.jpg"
          width={1000}
          height={1000}
          className=" w-full h-[350px] object-cover blur-sm"
          quality={85}
          alt="Carousel image 2"
        />
        <div className="">
          <h1 className="text-white z-10 font-bold text-4xl absolute top-[20%] md:left-[45%] left-[35%]">
            Our Services
          </h1>
        </div>
      </div>
      <div className=" container mx-auto flex py-8">
        {/* Sidebar */}
        <div className="py-4 px-2">
          <div className=" hidden md:block bg-gray-200 ">
            {/* Sidebar content goes here */}
            <ul>
              <Link href={"/Service1"}>
                <li className="flex my-2 border-b-2 px-4 justify-between border-slate-500 hover:bg-blue-500">
                  Software Development
                  <FaChevronRight className="my-1 mx-2" />{" "}
                </li>
              </Link>
              <Link href={"/Service2"}>
                <li className="flex my-2 border-b-2 px-4 justify-between border-slate-500 hover:bg-blue-500">
                  Web Development <FaChevronRight className="my-1 mx-2" />
                </li>
              </Link>
              <Link href={"/Service3"}>
                <li className="flex my-2 border-b-2 px-4 justify-between border-slate-500 hover:bg-blue-500">
                  Mobile Application Development{" "}
                  <FaChevronRight className="my-1 mx-2" />
                </li>
              </Link>
              <Link href={"/Service1"}>
                <li className="flex my-2 border-b-2 px-4 justify-between border-slate-500 hover:bg-blue-500">
                  Software Development
                  <FaChevronRight className="my-1 mx-2" />{" "}
                </li>
              </Link>
              <Link href={"/Service2"}>
                <li className="flex my-2 border-b-2 px-4 justify-between border-slate-500 hover:bg-blue-500">
                  Web Development <FaChevronRight className="my-1 mx-2" />
                </li>
              </Link>
              <Link href={"/Service3"}>
                <li className="flex my-2 border-b-2 px-4 justify-between border-slate-500 hover:bg-blue-500">
                  Mobile Application Development{" "}
                  <FaChevronRight className="my-1 mx-2" />
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Description */}
        <div className="md:w-3/4 p-4">
          {/* Description content goes here */}
          <h2 className="text-lg text-center font-bold">
            Mobile Application Development
          </h2>
          <div>
            <Image
              src="/images/service2.jpeg"
              width={1000}
              height={500}
              className="h-[400px] w-full  md:px-4"
              alt="image"
            />
          </div>
          <p>
            SRIC has carved out a successful niche for itself in
            custom software design and development. We provide complete software
            implementation process, starting with software design and
            development, software quality assurance testing, software
            deployment, up to further software upgrades and enhancements The
            core software design and development services provided by Science
            Foundation include, but are not limited to, desktop application
            development, high-end client-server application development,
            enterprise application development and building end-to-end
            enterprise application integration (EAI) solutions, re-engineering,
            software systems maintenance and support.
          </p>
        </div>
      </div>
      <CustomButton />
    </div>
  );
}
