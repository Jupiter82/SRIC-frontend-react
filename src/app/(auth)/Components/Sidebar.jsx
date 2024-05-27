"use client";

import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
  DocumentDuplicateIcon,
  ChatBubbleBottomCenterTextIcon,
  PhotoIcon,
} from "@heroicons/react/24/solid";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Link from "next/link";
import { MdDashboard } from "react-icons/md";
import { MdOutlineRestorePage } from "react-icons/md";
import { IoIosMail } from "react-icons/io";
import { MdPermMedia } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";

export default function Sidebar() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showPagesOptions, setShowPagesOptions] = useState(false);
  const [showTitleOptions, setShowTitleOptions] = useState(false);
  const [open, setOpen] = useState(0);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const togglePagesOptions = () => {
    setShowPagesOptions(!showPagesOptions);
  };

  const toggleTitleOptions = () => {
    setShowTitleOptions(!showTitleOptions);
  };

  const closeOptions = () => {
    setShowPagesOptions(true);
    setShowTitleOptions(true);
  };

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    <>
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[13.5rem] shadow-xl shadow-blue-gray-900/5  md:fixed md:min-h-screen">
        {/* <div className="mb-2 p-4">
          <Typography variant="h5" color="blue-gray">
            Sidebar
          </Typography>
        </div> */}
        <List>
          <Accordion
            open={open === 1}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 1 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <Link href={"/profile"}>
              <ListItem>
                <ListItemPrefix>
                  <PresentationChartBarIcon className="h-5 w-5" />
                </ListItemPrefix>
                Dashboard
              </ListItem>
            </Link>

            <ListItem className="p-0" selected={open === 1}>
              <AccordionHeader
                onClick={() => handleOpen(1)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <DocumentDuplicateIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Pages
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href={"/Logo"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Logo
                  </ListItem>
                </Link>
                <Link href={"/Slider"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Slider
                  </ListItem>
                </Link>
                <Link href={"/Abouts"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    About
                  </ListItem>
                </Link>
                <Link href={"/Testimonial"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Testimonial List
                  </ListItem>
                </Link>
                <Link href={"/Contact_admin"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Contact
                  </ListItem>
                </Link>
                <Link href={"/Service_admin"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Service
                  </ListItem>
                </Link>
                <Link href={"/Case_Study"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Case Study
                  </ListItem>
                </Link>
                <Link href={"/Program_admin"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Program
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            icon={
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`mx-auto h-4 w-4 transition-transform ${
                  open === 2 ? "rotate-180" : ""
                }`}
              />
            }
          >
            <ListItem className="p-0" selected={open === 2}>
              <AccordionHeader
                onClick={() => handleOpen(2)}
                className="border-b-0 p-3"
              >
                <ListItemPrefix>
                  <ChatBubbleBottomCenterTextIcon className="h-5 w-5" />
                </ListItemPrefix>
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Title
                </Typography>
              </AccordionHeader>
            </ListItem>
            <AccordionBody className="py-1">
              <List className="p-0">
                <Link href={"/Section_admin"}>
                  <ListItem>
                    <ListItemPrefix>
                      <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                    </ListItemPrefix>
                    Section
                  </ListItem>
                </Link>
              </List>
            </AccordionBody>
          </Accordion>
          {/* <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
            Inbox
            <ListItemSuffix>
              <Chip
                value="14"
                size="sm"
                variant="ghost"
                color="blue-gray"
                className="rounded-full"
              />
            </ListItemSuffix>
          </ListItem> */}
          <Link href={"/Media"}>
            <ListItem>
              <ListItemPrefix>
                <PhotoIcon className="h-5 w-5" />
              </ListItemPrefix>
              Meida
            </ListItem>
          </Link>
        </List>
      </Card>
      {/* <div className="border border-black p-8 sm:flex md:fixed md:min-h-screen bg-white">
        Sidebar toggle button for small screens
        <div className="md:hidden cursor-pointer" onClick={toggleSidebar}>
          <IoMenu className="text-2xl text-gray-800" />
        </div>
        Sidebar for medium screens and above
        <ul
          className={`${
            showSidebar ? "block" : "hidden"
          } md:block text-black text-xl mt-4 md:mt-0 bg-white`}
        >
          <li className="flex my-2">
            <Link
              href={"/profile"}
              className="flex items-center"
              onClick={closeOptions}
            >
              <MdDashboard className="text-2xl" /> Dashboard
            </Link>
          </li>
          <li className="flex my-2 relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={togglePagesOptions}
            >
              <MdOutlineRestorePage className="text-2xl " /> Pages
              <FaChevronDown className=" my-1 mx-2" />
            </div>
            {showPagesOptions && (
              <div className="absolute left-0 mt-6 bg-white shadow-lg rounded-md py-2 z-10">
                <Link
                  href={"/Logo"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Logo
                </Link>
                <Link
                  href={"/Slider"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Slider
                </Link>
                <Link
                  href={"/Abouts"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  About
                </Link>
                <Link
                  href={"/Testimonial"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Testimonial List
                </Link>
                <Link
                  href={"/Contact_admin"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Contact
                </Link>
                <Link
                  href={"/Service_admin"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Service
                </Link>
                <Link
                  href={"/Case_Study"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Case Study
                </Link>
                <Link
                  href={"/Program_admin"}
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Program
                </Link>
              </div>
            )}
          </li>
          <li className="flex my-2 relative">
            <div
              className="flex items-center cursor-pointer"
              onClick={toggleTitleOptions}
            >
              <MdOutlineRestorePage className="text-2xl" /> Title
              <FaChevronDown className="my-1 mx-6" />
            </div>
            {showTitleOptions && (
              <div className="absolute left-0 mt-6 bg-white shadow-lg rounded-md py-2 z-10">
                <Link
                  href={"/Section_admin"}
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={closeOptions}
                >
                  Section
                </Link>
              </div>
            )}
          </li>
          <li className="flex my-2" onClick={closeOptions}>
            <IoIosMail className="text-2xl" /> Message
          </li>
          <Link href={"/Media"}>
            <li className="flex my-2" onClick={closeOptions}>
              <MdPermMedia className="text-2xl" /> Media
            </li>
          </Link>
        </ul>
      </div> */}
    </>
  );
}
