import React from "react";
import Image from "next/image";
import About from "@/components/About";
import Card from "@/components/Card";
import Instructor from "@/components/Instructor";
import CustomButton from "@/components/CustomButton";

export default function AboutPage() {
  return (
    <>
      <div className=" ">
        <div className=" relative overflow-hidden">
          <div className="absolute z-10 bg-black/50 w-[100%] h-[100%]">
      
          </div>
          <Image
            src="/images/banner0.jpg"
            width={1000}
            height={1000}
            className=" w-full h-[350px] object-cover"
            quality={85}
            alt="Carousel image 2"
          />
          <div className="">
            <h1 className="text-white z-10 font-bold text-4xl absolute top-[20%] md:left-[45%] left-[35%] ">
              About Us
            </h1>
            {/* <h1 className="text-white z-10 font-bold  absolute md:top-[30%] sm:top-[30%]  md:left-[45%] left-[35%]"> Home/About</h1> */}
          </div>
        </div>
      </div>
      <div className="py-4">
        <Card />
      </div>
      <About />
      <Instructor />
      <div className="py-2">
        <CustomButton />
      </div>
    </>
  );
}
