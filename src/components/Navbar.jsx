"use client";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const router = useRouter();

  const pathname = usePathname();

  console.log(pathname === "/Services");

  return (
    <div className="z-50 sticky top-0">
      <nav className="flex justify-between z-50 items-center py-6 px-8 shadow-md bg-slate-100 text-black">
        <div className="flex items-center">
          <Link href={"/"}>
            {/* <img src="" alt="Logo" className="h-8" /> */}
            <h1 className="ml-2">SRIC</h1>
          </Link>
        </div>

        <IoMenu className="text-2xl sm:hidden" onClick={toggleMenu} />

        <div className="hidden gap-6 sm:flex ">
          <Link href="/">
            {pathname === "/" ? (
              <text className="uppercase text-red-500 font-bold">Home</text>
            ) : (
              <text className="uppercase  ">Home</text>
            )}
          </Link>
          <Link href="/About">
            {pathname === "/About" ? (
              <text className="uppercase text-red-500 font-bold">About</text>
            ) : (
              <text className="uppercase  ">About</text>
            )}
          </Link>
          <Link href="/CaseStudy">
            {pathname === "/CaseStudy" ? (
              <text className="uppercase text-red-500 font-bold">
                Case Study
              </text>
            ) : (
              <text className="uppercase  ">case study</text>
            )}
          </Link>
          <Link href="/Services">
            {pathname === "/Services" ? (
              <text className="uppercase text-red-500 font-bold">service</text>
            ) : (
              <text className="uppercase  ">service</text>
            )}
          </Link>
          <Link href="/Program">
            {pathname === "/Program" ? (
              <text className="uppercase text-red-500 font-bold">program</text>
            ) : (
              <text className="uppercase  ">program</text>
            )}
          </Link>

          <Link href="/GetInvolved">
            {pathname === "/GetInvolved" ? (
              <text className="uppercase text-red-500 font-bold">
                Get Involved
              </text>
            ) : (
              <text className="uppercase  ">Get Involved</text>
            )}
          </Link>
        </div>
      </nav>
      {/* Dropdown menu */}
      {isMenuOpen && (
        <div className="sm:hidden z-50 top-16 right-6 flex flex-col mx-2 bg-white shadow-md  mt-2">
          <Link href="/">
            {pathname === "/" ? (
              <text className="uppercase text-red-500 font-bold">Home</text>
            ) : (
              <text className="uppercase  ">Home</text>
            )}
          </Link>
          <Link href="/About">
            {pathname === "/About" ? (
              <text className="uppercase text-red-500 font-bold">About</text>
            ) : (
              <text className="uppercase  ">About</text>
            )}
          </Link>
          <Link href="/CaseStudy">
            {pathname === "/CaseStudy" ? (
              <text className="uppercase text-red-500 font-bold">
                Case Study
              </text>
            ) : (
              <text className="uppercase  ">case study</text>
            )}
          </Link>
          <Link href="/Services">
            {pathname === "/Services" ? (
              <text className="uppercase text-red-500 font-bold">service</text>
            ) : (
              <text className="uppercase  ">service</text>
            )}
          </Link>
          <Link href="/Program">
            {pathname === "/Program" ? (
              <text className="uppercase text-red-500 font-bold">program</text>
            ) : (
              <text className="uppercase  ">program</text>
            )}
          </Link>
          <Link href="/GetInvolved">
            {pathname === "/GetInvolved" ? (
              <text className="uppercase text-red-500 font-bold">
                Get Involved
              </text>
            ) : (
              <text className="uppercase  ">Get Involved</text>
            )}
          </Link>
        </div>
      )}
    </div>
  );
}
