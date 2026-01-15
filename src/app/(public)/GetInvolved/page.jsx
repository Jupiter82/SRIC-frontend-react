"use client";
import React, { useState } from "react";

const GetInvolcedPage = () => {
  return (
    <div className="container mx-auto md:flex py-20 px-4 gap-12 sm:px-6 lg:px-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block mb-1">
                First Name<a className="text-red-500 ">*</a>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange=""
                className="w-full border-gray-300 text-black border-2 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block mb-1">
                Last Name <a className="text-red-500">*</a>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange=""
                className="w-full border-gray-300 border-2 rounded-md py-2 px-3 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="">Company</label>
              <input
                type="text"
                id="company"
                onChange=""
                className="w-full text-black border-gray-300 rounded-md border-2 py-2 px-3 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="">Address</label>
              <input
                type="text"
                id="address"
                onChange=""
                className="w-full text-black border-gray-300 rounded-md border-2 py-2 px-3 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full sm:w-1/2">
              <label className="block mb-1">
                Email<a className="text-red-500">*</a>
              </label>
              <input
                type="email"
                id="email"
                onChange=""
                className="w-full text-black border-gray-300 rounded-md border-2 py-2 px-3 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
            <div className="w-full sm:w-1/2">
              <label className="block mb-1">
                Phone<a className="text-red-500">*</a>
              </label>
              <input
                type="Number"
                id="phone"
                onChange=""
                className="w-full text-black border-gray-300 rounded-md border-2 py-2 px-3 focus:outline-none focus:border-blue-400"
                required
              />
            </div>
          </div>
          <div>
            <label className="block mb-1">
              Message <a className="text-red-500">*</a>
            </label>
            <textarea
              id="message"
              name="message"
              onChange=""
              className="w-full border-gray-300 rounded-md border-2 py-2 px-3 focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <button
            type="submit"
            className=" bg-blue-500 text-white py-2 px-4 rounded-md  hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>
      </div>
      <div className="py-16 md:pl-8 overflow-x-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40351.71942697519!2d85.35657322875292!3d27.684253288873094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1a419f80aa67%3A0x288ab8841508315f!2sMadhyapur%20Thimi!5e0!3m2!1sen!2snp!4v1768455976594!5m2!1sen!2snp"
          width="700"
          height="400"
          style={{ border: "0" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default GetInvolcedPage;
