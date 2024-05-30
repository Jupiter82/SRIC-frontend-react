"use client";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { userFetchApi } from "@/app/utils/httpUtils";

function StarIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-yellow-700"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );
}
function Rating({ rating }) {
  const stars = Array.from({ length: rating });

  return (
    <div className="flex items-center gap-0">
      {stars.map((_, index) => (
        <StarIcon key={index} />
      ))}
    </div>
  );
}

export default function Testimonial() {
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [data, setData] = useState([]);

  const getTestimonialData = async () => {
    try {
      const response = await userFetchApi("api/v1/testimonial/home");
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
    getTestimonialData();
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else {
        setSlidesToShow(3);
      }
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "0px",
    slidesToShow: slidesToShow,
    speed: 500,
    dots: true,
    appendDots: (dots) => (
      <div
        style={{
          backgroundColor: "",
          // borderRadius: "8px rounded",
          padding: "10px",
          zIndex: 1,
          padding: "2px",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <div className="slider-container py-4">
      <div className="text-center">
        <h1 className="text-blue-500 text-2xl">Testimonial</h1>
        <h2 className="text-4xl">Our Students Say</h2>
      </div>
      <Slider {...settings}>
        {data.map((item, index) => (
          <div key={index}>
            <Card
              color="transparent"
              shadow={false}
              className="w-full max-w-[26rem]"
            >
              <CardHeader
                color="transparent"
                floated={false}
                shadow={false}
                className="mx-0 flex items-center gap-4 pt-0 pb-8"
              >
                <Avatar
                  size="lg"
                  variant="circular"
                  src={process.env.NEXT_PUBLIC_IMAGE_URL + "/" + item.image}
                  alt="tania andrew"
                />
                <div className="flex w-full flex-col  gap-2">
                  <div className="flex items-center justify-between">
                    <Typography variant="h5" color="blue-gray">
                      {item.name}
                    </Typography>
                    <div className="5 flex items-center gap-4">
                      <Rating rating={item.rating} />
                    </div>
                  </div>
                  <Typography color="blue-gray">{item.position}</Typography>
                </div>
              </CardHeader>
              <CardBody className="mb-6 p-0">
                <Typography>{item.description}</Typography>
              </CardBody>
            </Card>
          </div>
        ))}
      </Slider>
    </div>
  );
}
