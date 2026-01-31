"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import Breadcrumbs_Div from "./Common/Breadcrumbs_Div";
import Add_Form_Button from "./Buttons/Add_Form_Button";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import { adminFetchApi } from "@/app/utils/httpUtils";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";


export default function Testimonial_List() {

  const [testimonialData, setTestimonialData] = useState([])
  console.log(testimonialData)

  const getTestimonialData = async () => {
    try {
      const response = await adminFetchApi("api/v1/testimonial?page=1&limit=10");
      setTestimonialData(response?.data?.result)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getTestimonialData()
  }, [])
  const TABLE_HEAD = ["Image", "Title", "Description", "Action"];


  return (
    <>
      <Breadcrumbs_Div title={"Testimonial"} />
      <div className=" ">
        {/* <div className="flex row gap-2 mx-4 my-4 text-blue-500">
          <Link href={"/profile"}>
            <h1 className="flex gap-2 ">
              <FaHome className="text-xl" /> Home{" "}
              <FaChevronRight className="my-1" />
            </h1>
          </Link>
          <h1 className="flex gap-2">
            Pages <FaChevronRight className="my-1" />
          </h1>
          <h1>Testimonial</h1>
        </div>
        <div className="flex mx-6 my-6 text-blue-500">
          <h1 className="flex">Add Testimonial </h1>
        </div> */}
        <Add_Form_Button title={"Testimonial"} path={"Testimonial_Form"} />

        {/* <h1 className="mx-4 text-xl py-4">Testimonial List</h1>
        <hr className="font-bold" />
        <div className="overflow-x-auto">
          <table className=" w-full">
            <thead className=" bg-gray-300">
              <tr className="">
                <td className="px-2 border-2">S.N.</td>
                <td className="px-2 border-2">Title</td>
                <td className="px-2 border-2">Description</td>
                <td className="px-2 border-2">Image</td>
                <td className="px-2 border-2">Name</td>
                <td className="px-2 border-2">Position</td>
                <td className="px-2 border-2">Rating</td>
                <td className="px-2 border-2">Status</td>
                <td className="px-2 border-2">Featured</td>
                <td className="px-2 border-2">Update</td>
                <td className="px-2 border-2">Action</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Good Platform for Learning</td>
                <td>Science research</td>
                <td>img</td>
                <td>Jack</td>
                <td>student</td>
                <td>5</td>
                <td>1</td>
                <td>0</td>
                <td>date</td>
                <td className="flex gap-1">
                  <Link href={"/view"}>
                    {" "}
                    <FiEye className="mx-2 text-xl text-black bg-green-500" />
                  </Link>
                  <Link href={"/"}>
                    <FiEdit className=" text-xl bg-blue-500" />
                  </Link>

                  <RiDeleteBin5Line
                    className="text-xl mx-2 bg-red-500"
                    onClick={handleDeleteClick}
                  />
                </td>
              </tr>

            </tbody>
          </table>
        </div>
        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Delete</h2>
              <p>Please confirm you would like to delete this Testimonial.</p>
              <div className="flex justify-end mt-4">
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                  onClick={handleConfirmDelete}
                >
                  Yes
                </button>
                <button
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                  onClick={handleCancelDelete}
                >
                  No
                </button>
              </div>
            </div>
          </div>
        )} */}

        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {testimonialData?.map(({ description, image, title, _id }, index) => {
                  const isLast = index === testimonialData.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50"
                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={process.env.NEXT_PUBLIC_IMAGE_URL + "/" + image}
                            alt={title}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1 "
                          />
                          {/* <Typography variant="small" color="blue-gray" className="font-bold">{image}</Typography> */}
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant="small" color="blue-gray" className="font-normal">{title}</Typography>
                      </td>
                      <td className={classes}><Typography variant="small" color="blue-gray" className="font-normal">{description}</Typography></td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text" >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                          <IconButton variant="text" >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  )
                }
                )}
                <tr>
                  <td></td>
                </tr>
              </tbody>

            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
        </Card>
      </div>
    </>
  );
}
