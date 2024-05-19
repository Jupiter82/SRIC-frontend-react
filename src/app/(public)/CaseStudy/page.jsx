import React from "react";
import Image from "next/image";
import Link from "next/link";
import CustomButton from "@/components/CustomButton";

export default function CaseStudyPage() {
  return (
    <div>
      <div className=" relative overflow-hidden">
      <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]"></div>
        <Image
          src="/images/banner1.jpg"
          width={1000}
          height={1000}
          className=" w-full h-[350px] object-cover"
          quality={85}
          alt=""
        />
        <div className="">
          <h1 className="text-white z-10 font-bold text-4xl absolute top-[20%] md:left-[45%] left-[35%] ">
            Case Study
          </h1>
          {/* <h1 className="text-white z-10 font-bold  absolute top-[30%] md:left-[45%] left-[35%]">Home/Case Study</h1> */}
        </div>
      </div>
      <div></div>
      <div className="container mx-auto md:grid md:grid-cols-3 gap-4 p-4">
        <Link href="/Case1">
          <div className="bg-blue-100">
            <Image
              src="/images/course-1.jpg"
              width={1000}
              height={1000}
              className="w-full h-[300px]"
              alt=""
            />
            <h1 className="text-center p-4 font-semibold ">
              PHP Shopping Cart Design
            </h1>
          </div>
        </Link>
        <Link href="/Case2">
          <div className="bg-blue-100">
            <Image
              src="/images/course-2.jpg"
              width={1000}
              height={1000}
              className="w-full h-[300px]"
              alt=""
            />
            <h1 className="text-center p-4 font-semibold">Hosting Company</h1>
          </div>
        </Link>
        <Link href="/Case3">
          <div className="bg-blue-100">
            <Image
              src="/images/course-3.jpg"
              width={1000}
              height={1000}
              className="w-full h-[300px]"
              alt=""
            />
            <h1 className="text-center p-4 font-semibold">Fresh Website</h1>
          </div>
        </Link>
      </div>
      <CustomButton />
    </div>
  );
}
