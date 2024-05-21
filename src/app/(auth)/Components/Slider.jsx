"use client";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
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
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaPlus } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin5Line } from "react-icons/ri";
import { adminDeleteApi, adminFetchApi } from "@/app/utils/httpUtils";
import { useRouter } from "next/navigation";
// import { useRouter } from "next/navigation";

export default function Slider() {
  const navigate = useRouter();

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [sliderData, setSliderData] = useState([]);
  const [page, setPage] = useState(1);
  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };
  const handleConfirmDelete = async () => {
    console.log("Delete confirmed");
    const response = await adminDeleteApi(`/api/v1/banner/${deleteId}`);
    setDeleteId(null);
    setShowDeleteModal(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
  const onChange = (pageNumber) => {
    setPage(pageNumber);
  };
  const getSliderDetails = async () => {
    try {
      const response = await adminFetchApi("/api/v1/banner?page=1&limit=10");
      setSliderData(response?.data?.result);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSliderDetails();
  }, [page]);

  const TABLE_HEAD = ["Image", "Title", "Sub-Title", "Description", "Action"];

  const TABLE_ROWS = [
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
      name: "Spotify",
      amount: "$2,500",
      date: "Wed 3:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
      name: "Pinterest",
      amount: "$3,400",
      date: "Mon 7:40pm",
      status: "pending",
      account: "master-card",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
      name: "Google",
      amount: "$1,000",
      date: "Wed 5:00pm",
      status: "paid",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
    },
    {
      img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
      name: "netflix",
      amount: "$14,000",
      date: "Wed 3:30am",
      status: "cancelled",
      account: "visa",
      accountNumber: "1234",
      expiry: "06/2026",
    },
  ];

  const deleteUserById = async (id) => {
    //delte ko api with id
    try {
      const result = await adminDeleteApi("api/v1/banner", id);
      if (result.status === 200) {
        getSliderDetails();
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(sliderData, "test");

  return (
    <>
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href={"/profile"}>
          <h1 className="flex gap-2 ">
            <FaHome className="text-xl" /> Home{" "}
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>Slider test</h1>
      </div>

      <Link href={"/Slider_Form"}>
        <button className="text-white flex text-xl bg-green-400 rounded-md p-4  mx-4 ">
          <FaPlus className="mx-2 text-3xl" />
          Add New Slider
        </button>
      </Link>
      <Card className="h-full w-full">
        {/* <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader> */}
                {/* <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Recent Transactions
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                These are details about the last transactions
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button>
            </div>
          </div>
        </CardHeader> */}
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
              {sliderData?.map(
                ({ description, image, subTitle, title, url, _id }, index) => {
                  const isLast = index === TABLE_ROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={name}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={
                              process.env.NEXT_PUBLIC_IMAGE_URL + "/" + image
                            }
                            alt={title}
                            size="md"
                            className="border border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1"
                          />
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {image}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {title}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {subTitle}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {description}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Tooltip content="Edit User">
                          <IconButton
                            variant="text"
                            onClick={() => {
                              navigate.push(`/Slider_Form?id=${_id}`);
                            }}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete User">
                          <IconButton
                            variant="text"
                            onClick={() => {
                              deleteUserById(_id);
                            }}
                          >
                            <TrashIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                }
              )}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <div className="flex items-center gap-2">
            <IconButton variant="outlined" size="sm">
              1
            </IconButton>
            <IconButton variant="text" size="sm">
              2
            </IconButton>
            <IconButton variant="text" size="sm">
              3
            </IconButton>
            <IconButton variant="text" size="sm">
              ...
            </IconButton>
            <IconButton variant="text" size="sm">
              8
            </IconButton>
            <IconButton variant="text" size="sm">
              9
            </IconButton>
            <IconButton variant="text" size="sm">
              10
            </IconButton>
          </div>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </CardFooter>
      </Card>
      {/* <div className=" ">
        <div className="flex row gap-2 mx-4 my-4 text-blue-500">
          <Link href={"/profile"}>
            <h1 className="flex gap-2 ">
              <FaHome className="text-xl" /> Home{" "}
              <FaChevronRight className="my-1" />
            </h1>
          </Link>
          <h1 className="flex gap-2">
            Pages <FaChevronRight className="my-1" />
          </h1>
          <h1>Slider test</h1>
        </div>
        <div className="flex mx-6 my-6 text-blue-500">
          <h1 className="flex">Add Slider </h1>
        </div>
        <Link href={"/Slider_Form"}>
          <button className="text-white flex text-xl bg-green-400 rounded-md p-4  mx-4 ">
            <FaPlus className="mx-2 text-3xl" />
            Add New Slider
          </button>
        </Link>

        <h1
          className="mx-4 text-xl py-4"
          onClick={() => {
            onChange(3);
          }}
        >
          Slider List
        </h1>
        <hr className="font-bold" />
        <div className="overflow-x-auto">
          <table className=" w-full border-2">
            <thead className=" bg-gray-300 border-2">
              <tr className="">
                <td className="px-2 border-2">S.N.</td>
                <td className="px-2 border-2">Review</td>
                <td className="px-2 border-2">Title</td>
                <td className="px-2 border-2">Description</td>
                <td className="px-2 border-2">Link</td>
                <td className="px-2 border-2">Update</td>
                <td className="px-2 border-2">Action</td>
              </tr>
            </thead>
            <tbody className="border-2">
              <tr className="">
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td className="flex gap-1">
                  <Link href={"/view"}>
                    <FiEye className="mx-2 text-xl text-black bg-green-500" />
                  </Link>
                  <Link href={"/Edit"}>
                    <FiEdit className=" text-xl bg-blue-500" />
                  </Link>
                  <RiDeleteBin5Line
                    className="text-xl mx-2 bg-red-500"
                    onClick={() => handleDeleteClick("dumyh")}
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
              <p>Please confirm you would like to delete this Slider.</p>
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
        )}
      </div> */}
    </>
  );
}
