"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

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
      instructor: "python Software",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 2,
      image: "/images/course-2.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "python Software",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 3,
      image: "/images/course-3.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "python Software",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 4,
      image: "/images/course-1.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "python Software",
      duration: "1.49 Hrs",
      students: 30,
    },
    {
      id: 5,
      image: "/images/course-2.jpg",
      price: "$149.00",
      rating: 5,
      title: "Web Design & Development Course for Beginners",
      instructor: "python Software",
      duration: "1.49 Hrs",
      students: 30,
    },
  ];

  const handleShowMore = () => {
    setVisibleCourses(showMore ? 3 : courses.length);
    setShowMore(!showMore);
  };

  return (
    <div className="grid-col-1 text-center p-4">
      <h1 className="text-3xl text-blue-500">COURSES</h1>
      <h2 className="text-black-500 text-4xl">Popular Courses</h2>
      <div className="flex flex-wrap justify-center gap-3 mt-2">
        {courses.slice(0, visibleCourses).map((course, index) => (
          <Card
            key={course.id}
            shadow={false}
            className="relative grid h-[40rem] w-full max-w-[28rem] items-end justify-center overflow-hidden text-center"
          >
            <CardHeader
              floated={false}
              shadow={false}
              color="transparent"
              className="absolute inset-0 m-0 h-full w-full rounded-none bg-cover bg-center"
              style={{ backgroundImage: `url(${course.image})` }}
            >
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody className="relative py-14 px-6 md:px-12">
              <Typography
                variant="h2"
                color="white"
                className="mb-6 font-medium leading-[1.5]"
              >
                {course.title}
              </Typography>
              <Typography variant="h5" className="mb-4 text-gray-400">
                {course.instructor}
              </Typography>
              <div className="course-details flex justify-around p-2 text-white">
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
              <h1 className="course-price text-center text-white mt-4">
                {course.price}
              </h1>
              <p className="course-rating flex justify-center text-yellow-500 mt-2">
                {Array(course.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} />
                  ))}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
      {courses.length > 3 && (
        <button
          className={`show-more-button mt-3 bg-blue-500 text-white font-bold py-2 px-4 rounded ${
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
