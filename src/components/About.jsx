"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { userFetchApi } from "@/app/utils/httpUtils";

const About = () => {
  const [data, setData] = useState([]);

  const getAbout = async () => {
    try {
      const response = await userFetchApi("api/v1/about/home");
      if (response.status === 200) {
        setData(response.data.result);
      } else {
        console.error("Error fetching service info:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching service info:", error);
    }
  };

  useEffect(() => {
    getAbout();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-center gap-10"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${item.image}`}
            alt="About Image"
            width={1000}
            height={1000}
            className="rounded-md object-cover w-full md:w-1/2"
          />
          <div className="flex flex-col gap-4 md:w-1/2">
            <h1 className="text-xl font-bold ">Why Choose Us?</h1>
            <h1 className="text-3xl font-bold text-blue-500 uppercase">
              {item.title}
            </h1>
            <p className="text-lg">{item.description}</p>
            <p className="text-lg">{item.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {item.skill.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="text-blue-500 flex items-center gap-2"
                >
                  <FaArrowRight />
                  {skill.title}
                </div>
              ))}
            </div>
            <Link href="/About">
              <button className="flex gap-2 items-center bg-blue-500 text-white rounded-md p-3 mt-4">
                Read More
                <FaArrowRight />
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default About;
