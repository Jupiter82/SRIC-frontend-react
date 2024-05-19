import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <div className="container mx-auto flex md:flex-nowrap flex-wrap p-4 md:gap-10 sm:mx-0 bg-white">
      <div className="">
        <Image
          src="/images/about.jpg"
          width={300}
          height={300}
          className="w-full p-8 md:ml-12 sm:mx-0"
          alt="About image"
        />
      </div>
      <div className="p-8">
        <h1 className="text-blue-500">ABOUT US</h1>

        <h2 className="text-4xl">Welcome to E-Learning</h2>
        <p>
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam <br />
          amet diam et eos. Clita erat ipsum et lorem et sit.
          <br /> <br />
          Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
          diam <br /> amet diam et eos. Clita erat ipsum et lorem et sit, sed
          stet lorem sit clita duo justo magna dolore erat amet
        </p>
        <div className="my-4 flex gap-6 sm:flex-none ">
          <div>
            <h1 className="flex ">
              <FaArrowRight className="mx-2 text-blue-500" />
              Skilled Instructors
            </h1>
            <h1 className="flex ">
              <FaArrowRight className="mx-2 text-blue-500" />
              Online Classes
            </h1>
            <h1 className="flex ">
              <FaArrowRight className="mx-2 text-blue-500" />
              International Certificate
            </h1>
          </div>

          <div>
            <h1 className="flex ">
              <FaArrowRight className="mx-2 text-blue-500" />
              Skilled Instructors
            </h1>
            <h1 className="flex ">
              <FaArrowRight className="mx-2 text-blue-500" />
              Online Classes
            </h1>
            <h1 className="flex ">
              <FaArrowRight className="mx-2 text-blue-500" />
              International Certificate
            </h1>
          </div>
        </div>
        <div>
          <Link href={"/About"}>
            <button className="bg-blue-500 mx-4 px-6 py-4 text-white">
              Read More
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
