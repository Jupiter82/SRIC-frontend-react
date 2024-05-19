"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { IoPersonSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";

const PopularCourse = () => {
  const [showMore, setShowMore] = useState(false);
  const [visibleCourses, setVisibleCourses] = useState(3);

  const courses = [
    {
      id: 1,
      image: "/images/course-1.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 2,
      image: "/images/course-2.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 3,
      image: "/images/course-3.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 4,
      image: "/images/course-1.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 5,
      image: "/images/course-2.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "John Doe",
      duration: "1.49 Hrs",
      students: 30,
    },
  ];

  const handleShowMore = () => {
    if (showMore) {
      setVisibleCourses(3);
    } else {
      setVisibleCourses(courses.length);
    }
    setShowMore(!showMore);
  };

  return (
    <div className="grid-col-1 text-center p-4">
      <h1 className="text-3xl text-blue-500">COURSES</h1>
      <h2 className="text-black-500 text-4xl">Popular Courses</h2>
      <div className="flex flex-wrap justify-center">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <div
            key={course.id}
            className={`course-item relative bg-blue-100 m-4 max-w-sm ${
              index % 3 !== 2 ? "md:mr-4" : ""
            }`}
          >
            <div className="course-image overflow-hidden">
              <Image
                src={course.image}
                width={400}
                height={400}
                className="hover:scale-125 duration-500 ease-in-out"
                alt="Course Image"
              />
            </div>
            <div className="">
              <button className="absolute top-1/2 left-1/4  bg-blue-500 p-2 rounded-l-lg text-white">
                Read More
              </button>
              <button className="absolute top-1/2 left-1/2 bg-blue-500 p-2 rounded-r-lg text-white">
                Read More
              </button>
              <h1 className="course-price text-center">{course.price}</h1>
              <p className="course-rating flex justify-center text-blue-600">
                {Array(course.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </p>
              <h1 className="course-title text-bold">{course.title}</h1>
              <div className="course-details flex justify-around p-2">
                <h1 className="flex items-center">
                  <FaUserTie className="mt-1 mx-2" /> {course.instructor}
                </h1>
                <h1 className="flex items-center">
                  <FaClock className="mt-1 mx-2" />
                  {course.duration}
                </h1>
                <h1 className="flex items-center">
                  <IoPersonSharp className="mt-1 mx-2" />
                  {course.students} Students
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
      {courses.length > 3 && (
        <button
          className={`show-more-button bg-blue-500 text-white font-bold py-2 px-4 rounded ${
            showMore ? "bg-blue-700" : ""
          }`}
          onClick={handleShowMore}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
};

export default PopularCourse;