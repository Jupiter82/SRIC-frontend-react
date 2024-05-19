import React from "react";
import Image from "next/image";
import Link from "next/link";

const Category = () => {
  return (
    <div className="bg-white container mx-auto">
      <div className="grid-col-1 text-center">
        <h1 className="text-blue-500 text-2xl">CATEGORIES</h1>
        <h1 className="text-black-500 text-4xl">Courses Categories</h1>
      </div>
      <div className="flex flex-col sm:flex-row overflow-hidden">
        <div className="sm:w-full m-2">
          <div className="relative border overflow-hidden">
            <Link href={"/CourseDetails"}>
              <Image
                src="/images/cat-1.jpg"
                width={400}
                height={400}
                className="w-full h-auto hover:scale-125 duration-500 ease-in-out"
                alt="image"
              />
            </Link>
            <p className="absolute bottom-3 right-3 bg-white text-black p-2">
              Web Design <br />
              <a className="text-blue-500">49 Courses</a>
            </p>
          </div>
          <div className="flex h-auto gap-2 rounded-md border flex-col md:flex-row">
            <div className="relative overflow-hidden">
              <Link href={"/CourseDetails"}>
                <Image
                  src="/images/cat-2.jpg"
                  width={600}
                  height={500}
                  className="h-auto hover:scale-125 duration-500 ease-in-out overflow-hidden"
                  alt="image"
                />
              </Link>
              <p className="absolute bottom-3 right-3 bg-white text-black p-2">
                Graphic Design <br />
                <a className="text-blue-500">49 Courses</a>
              </p>
            </div>
            <div className="relative overflow-hidden">
              <Link href={"/CourseDetails"}>
                <Image
                  src="/images/cat-3.jpg"
                  width={600}
                  height={600}
                  className="h-auto hover:scale-125 duration-500 ease-in-out overflow-hidden"
                  alt="image"
                />
              </Link>
              <p className="absolute bottom-3 right-3 bg-white text-black p-2">
                Video Editing <br />
                <a className="text-blue-500">49 Courses</a>
              </p>
            </div>
          </div>
        </div>
        <div className="sm:w-full relative xl:lg:md:h-\[530px\] m-2 overflow-hidden rounded-md">
          <div className="">
          <Link href={"CourseDetails"}>
            <Image
              src="/images/cat-4.jpg"
              width={500}
              height={300} // Adjusted height for the laptop image
              className="w-full md:h-[264px] lg:h-[351px] 2xl:h-[533px] xl:h-[442px] hover:scale-125 duration-500 ease-in-out overflow-hidden"
              alt="categories image"
            />
            </Link>
            <p className="absolute bottom-3 right-3 bg-white text-black p-2">
              Online Marketing <br />
              <a className="text-blue-500">49 Courses</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
