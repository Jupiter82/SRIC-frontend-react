"use client";
import { userFetchApi } from "@/app/utils/httpUtils";
import Link from "next/link";
import { useParams, usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { IoMenu } from "react-icons/io5";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [data, setData] = useState([]);

  const links = [
    { href: "/", text: "Home" },
    { href: "/About", text: "About" },
    { href: "/CaseStudy", text: "Case Study" },
    { href: "/Services", text: "Services" },
    { href: "/Program", text: "Program" },
    { href: "/GetInvolved", text: "Get Involved" },
  ];

  const getLogo = async () => {
    try {
      const response = await userFetchApi("api/v1/logo/home");
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
    getLogo();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };
  const router = useRouter();

  const pathname = usePathname();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 0); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll); // Cleanup
  }, []);

  console.log(pathname === "/Services");

  return (
    <div className="z-50 sticky top-0 backdrop-blur">
      <nav className="flex justify-around items-center text-blue-500 px-8 shadow-md bg-slate-100 text-black">
        <div
          className={` flex items-center  ${isScrolled ? "py-2 w-12" : "py-6"}`}
        >
          <Link href={"/"}>
            {/* <img src="" alt="Logo" className="h-8" />
            <h1 className="ml-2">SRIC</h1> */}
            {data?.map((item, index) => {
              return (
                <img
                  src={process.env.NEXT_PUBLIC_IMAGE_URL + "/" + item.image}
                  alt="SRIC"
                  key={index}
                />
              );
            })}
          </Link>
        </div>

        <IoMenu className="text-2xl sm:hidden" onClick={toggleMenu} />

        {/* <div className="hidden gap-6 sm:flex ">
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
        </div> */}
        <div className="hidden gap-6 sm:flex ">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {pathname === link.href ? (
                <text className="uppercase text-black font-bold">
                  {link.text}
                </text>
              ) : (
                <text className="uppercase">{link.text}</text>
              )}
            </Link>
          ))}
        </div>
      </nav>
      {/* Dropdown menu */}
      {isMenuOpen && (
        // <div className="sm:hidden z-50 top-16 right-6 flex flex-col mx-2 bg-white shadow-md  mt-2">
        //   <Link href="/">
        //     {pathname === "/" ? (
        //       <text className="uppercase text-red-500 font-bold">Home</text>
        //     ) : (
        //       <text className="uppercase  ">Home</text>
        //     )}
        //   </Link>
        //   <Link href="/About">
        //     {pathname === "/About" ? (
        //       <text className="uppercase text-red-500 font-bold">About</text>
        //     ) : (
        //       <text className="uppercase  ">About</text>
        //     )}
        //   </Link>
        //   <Link href="/CaseStudy">
        //     {pathname === "/CaseStudy" ? (
        //       <text className="uppercase text-red-500 font-bold">
        //         Case Study
        //       </text>
        //     ) : (
        //       <text className="uppercase  ">case study</text>
        //     )}
        //   </Link>
        //   <Link href="/Services">
        //     {pathname === "/Services" ? (
        //       <text className="uppercase text-red-500 font-bold">service</text>
        //     ) : (
        //       <text className="uppercase  ">service</text>
        //     )}
        //   </Link>
        //   <Link href="/Program">
        //     {pathname === "/Program" ? (
        //       <text className="uppercase text-red-500 font-bold">program</text>
        //     ) : (
        //       <text className="uppercase  ">program</text>
        //     )}
        //   </Link>
        //   <Link href="/GetInvolved">
        //     {pathname === "/GetInvolved" ? (
        //       <text className="uppercase text-red-500 font-bold">
        //         Get Involved
        //       </text>
        //     ) : (
        //       <text className="uppercase  ">Get Involved</text>
        //     )}
        //   </Link>
        // </div>
        <div className="sm:hidden z-50 top-16 right-6 flex text-blue-500 flex-col mx-2 bg-white shadow-md mt-2">
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              {pathname === link.href ? (
                <text className="uppercase text-black font-bold">
                  {link.text}
                </text>
              ) : (
                <text className="uppercase">{link.text}</text>
              )}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
