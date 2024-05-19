"use client"
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

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
          padding:"2px",
          
        }}
      >
        <ul style={{ margin: "0px",
         }}> {dots} </ul>
      </div>
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
        {i+1}
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
          <TestimonialSlide
            image="/images/testimonial-3.jpg"
            name="Client Name"
            profession="Profession"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          />
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