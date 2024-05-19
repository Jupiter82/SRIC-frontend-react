"use client"
import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const CustomButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className="fixed bottom-4 right-6 cursor-pointer bg-blue-500 text-white py-4 px-4 item-center shadow-md transition-opacity duration-300 md:bottom-8 md:right-8 md:py-4 md:px-6"
      style={{ opacity: isVisible ? 1 : 0 }}
      onClick={scrollToTop}
    >
      <FaArrowUpLong />
    </div>
  );
};

export default CustomButton;
