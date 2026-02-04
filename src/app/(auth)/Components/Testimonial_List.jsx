"use client";
import React, { useEffect, useState } from "react";
import Breadcrumbs_Div from "./Common/Breadcrumbs_Div";
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
import Add_Form_Button from "./Buttons/Add_Form_Button";
import { adminDeleteApi, adminFetchApi } from "@/app/utils/httpUtils";
import Link from "next/link";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { toast } from "react-toastify";


export default function Testimonial_List() {
  const [testimonialData, setTestimonialData] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deleteId, setDeleteId] = useState(null)
  const getTestimonialData = async () => {
    try {
      const response = await adminFetchApi("api/v1/testimonial?page=1&limit=10");
      setTestimonialData(response?.data?.result)
    } catch (error) {
      console.log(error);
    }
  }

  const handleConfirmDelete = async () => {
    try {
      const response = await adminDeleteApi("/api/v1/testimonial", deleteId);
      if (response.status === 200) {
        toast.success("Successfully deleted");
        setDeleteId(null);
        setShowDeleteModal(false);
        getTestimonialData()
      }
    } catch (error) {
      console.log(error)
    }
  }
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null)
  }
  const handleDeleteClick = (id) => {
    setShowDeleteModal(true);
    setDeleteId(id);
    console.log("id_is", id)
  }
  useEffect(() => {
    getTestimonialData()
  }, [])
  const TABLE_HEAD = ["Image", "Title", "Description", "status", "Action"];

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
                {testimonialData?.map(({ description, image, title, status, _id }, index) => {
                  const isLast = index === testimonialData.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50"
                  const isActive = status == "active"
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
                      <td>
                        {/* <Typography>{status === "active" ? (
                          <div className="flex gap-2">
                            <div class="rounded-md flex items-center bg-green-100 py-0.5 px-2.5 border border-transparent text-sm text-green-800 transition-all shadow-sm">
                              <div class="mx-auto block h-2 w-2 rounded-full bg-green-800 mr-2"></div>
                              Active
                            </div>
                          </div>
                        ) : (
                          <div class="flex gap-2">
                            <div class="rounded-md flex items-center bg-red-100 py-0.5 px-2.5 border border-transparent text-sm text-red-800 transition-all shadow-sm">
                              <div class="mx-auto block h-2 w-2 rounded-full bg-red-800 mr-2"></div>
                              Inactive
                            </div>
                          </div>
                        )}</Typography> */}
                        <Typography>
                          <div className="flex gap-2">
                            <div class={`rounded-md flex items-center py-0.5 px-2.5 border border-transparent text-sm  transition-all shadow-sm ${isActive ? " bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                              <div class={`mx-auto block h-2 w-2 rounded-full mr-2 ${isActive ? "bg-green-800" : "bg-red-800"}`}></div>
                              {isActive ? "Active" : "Inactive"}
                            </div>
                          </div>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton variant="text" >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                          {/* <IconButton variant="text" onClick={(() => {
                            setShowDeleteModal(true);
                            setDeleteId(_id);
                            console.log("id_is", _id)
                          })}>
                            <TrashIcon className="h-4 w-4" />
                          </IconButton> */}
                          <IconButton variant="text" onClick={(() => {
                            handleDeleteClick(_id)
                          })}>
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  )
                }
                )}
              </tbody>
            </table>
            {showDeleteModal && <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md">
                <h2 className="text-lg font-semibold mb-4 ">Delete</h2>
                <p>Please confirm you would like to delete this Slider.</p>
                <div className="flex justify-end mt-4">
                  <button className="px-4 py-2 bg-red-500 text-white rounded-md mr-2" onClick={handleConfirmDelete}>
                    Yes
                  </button>
                  <button className="px-4 py-2 bg-green-500 text-white rounded-md" onClick={handleCancelDelete}>No</button>
                </div>
              </div>
            </div>}
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4"></CardFooter>
        </Card>
      </div >
    </>
  );
}
