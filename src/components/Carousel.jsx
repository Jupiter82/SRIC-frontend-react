"use client";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { userFetchApi } from "@/app/utils/httpUtils";
import Link from "next/link";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "",
        position: "absolute",
        marginRight: "30px",
      }}
      onClick={onClick}
    >
      <FaChevronRight />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "",
        position: "absolute",
        marginLeft: "30px",
        zIndex: 1,
      }}
      onClick={onClick}
    >
      <FaChevronLeft />
    </div>
  );
}

export default function Carousel() {
  const [data, setData] = useState([]);

  const getCarouselData = async () => {
    try {
      const response = await userFetchApi("api/v1/banner/home");
      console.log(response);
      if (response.status === 200) {
        setData(response.data.result);
      }
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCarouselData();
  }, []);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="slider-container ">
      <Slider {...settings}>
        {data.map((item, index) => (
          <div className="relative" key={index}>
            <div className="absolute  bg-black/30 w-[100%] h-[100%]"></div>

            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_URL + "/" + item.image}
              width={1000}
              height={1000}
              className="w-full h-[700px]"
              alt="Carousel image"
            />
            <div className="absolute z-20 top-0 md:top-[25%] md:w-[25rem] md:h-[27rem] left-[11%] flex justify-center items-center">
              <div className="text-white left-4">
                <h2 className="md:text-xl font-bold mb-4 text-blue-500">
                  {item.subtitle}
                </h2>
                <h1 className="md:text-4xl text-white font-bold">
                  {item.title}
                </h1>
                <p className="text-sm">{item.description}</p>
                <button className="sm:py-0 sm:m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold md:py-2 md:m-2 px-4 mr-4">
                  <Link href="/">Read More</Link>
                </button>
                <button className="sm:py-0 sm:m-1 bg-white hover:bg-blue-700 text-black font-bold md:py-2 md:m-2 px-4">
                  <Link href="/">Join</Link>
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
