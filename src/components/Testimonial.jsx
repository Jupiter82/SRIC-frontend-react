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
import Image from "next/image";

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

export default function Testimonial() {
  const [slidesToShow, setSlidesToShow] = useState(3);

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
        {/* </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "26px",
          color: "black",
          // backgroundColor:"red",
          
          // border: "4px blue solid",
          padding:"2px",
          gap:"4px",
          zIndex: 1,
          
        }}
        className="dot"

      >
        {i+1} */}
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
        <div>
          <TestimonialSlide
            image="/images/testimonial-1.jpg"
            name="Client Name"
            profession="Profession"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
          <TestimonialSlide
            image="/images/testimonial-2.jpg"
            name="Client Name"
            profession="Profession"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
        <div>
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <Typography color="blue-gray">
                  Frontend Lead @ Google
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim.
                I use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <Typography color="blue-gray">
                  Frontend Lead @ Google
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim.
                I use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
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
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="tania andrew"
              />
              <div className="flex w-full flex-col gap-0.5">
                <div className="flex items-center justify-between">
                  <Typography variant="h5" color="blue-gray">
                    Tania Andrew
                  </Typography>
                  <div className="5 flex items-center gap-0">
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                    <StarIcon />
                  </div>
                </div>
                <Typography color="blue-gray">
                  Frontend Lead @ Google
                </Typography>
              </div>
            </CardHeader>
            <CardBody className="mb-6 p-0">
              <Typography>
                &quot;I found solution to all my design needs from Creative Tim.
                I use them as a freelancer in my hobby projects for fun! And its
                really affordable, very humble guys !!!&quot;
              </Typography>
            </CardBody>
          </Card>
        </div>
        <div>
          <TestimonialSlide
            image="/images/testimonial-4.jpg"
            name="Client Name"
            profession="Profession"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
        </div>
      </Slider>
    </div>
  );
}

const TestimonialSlide = ({ image, name, profession, text }) => (
  <div className="testimonial-slide">
    <div className="image-container">
      <Image
        src={image}
        width={100}
        height={100}
        className="p-4 mx-auto my-0 rounded-full"
        alt=""
      />
    </div>
    <div className="text-center px-2 ">
      <h1 className="">{name}</h1>
      <h1 className="">{profession}</h1>
      <p className="px-2 bg-blue-100  py-5 rounded-md">{text}</p>
    </div>
  </div>
);
