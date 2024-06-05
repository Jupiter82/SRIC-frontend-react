"use client";

import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import {
  Card,
  Typography,
  Button,
  CardBody,
  Avatar,
  IconButton,
  Tooltip,
  Input,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaHome, FaPlus } from "react-icons/fa";
import { adminDeleteApi, adminFetchApi } from "@/app/utils/httpUtils";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function Abouts() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sliderData, setSliderData] = useState([]);
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = async () => {
    if (deleteId) {
      try {
        const result = await adminDeleteApi("api/v1/about", deleteId);
        if (result.status === 200) {
          getSliderDetails();
          toast.success(" deleted successfully");
        }
      } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      } finally {
        setShowDeleteModal(false);
        setDeleteId(null);
      }
    }
  };
  console.log(sliderData, "test");

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getSliderDetails = async (pageNumber) => {
    try {
      const response = await adminFetchApi(`/api/v1/about/home`);
      const fetchedData = response.data;
      setSliderData(fetchedData.result);
      setTotalPages(fetchedData.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSliderDetails(currentPage);
  }, [currentPage]);

  const TABLE_HEAD = [
    "Image",
    "Title",
    "Sub-Title",
    "Description",
    "Skill",
    "Action",
  ];

  return (
    <>
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href={"/profile"}>
          <h1 className="flex gap-2">
            <FaHome className="text-xl" /> Home
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>About</h1>
      </div>

      <Link href={"/Abouts_Form"}>
        <button className="text-white flex text-xl bg-green-400 rounded-md p-4 mx-4">
          <FaPlus className="mx-2 text-3xl" />
          Add New About
        </button>
      </Link>

      <Card className="h-full w-full">
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
              {sliderData.map(
                (
                  { description, image, subTitle, skill, title, _id },
                  index
                ) => {
                  const isLast = index === sliderData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar
                            src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${image}`}
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
                          {description.length > 25
                            ? `${description.substring(0, 25)}...`
                            : description}
                        </Typography>
                      </td>
                      <td className={classes}>
                        {skill.map((sk, idx) => (
                          <Typography
                            key={idx}
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {sk.title}
                          </Typography>
                        ))}
                      </td>

                      <td className={classes}>
                        <Tooltip content="Edit About">
                          <IconButton
                            variant="text"
                            onClick={() => {
                              router.push(`/Abouts_Form?id=${_id}`);
                            }}
                          >
                            <PencilIcon className="h-4 w-4" />
                          </IconButton>
                        </Tooltip>
                        <Tooltip content="Delete About">
                          <IconButton
                            variant="text"
                            onClick={() => {
                              handleDeleteClick(_id);
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

        <div className="flex items-center justify-between p-4">
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={() => changePage(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
          </Button>
          <div className="flex items-center gap-2">
            <Typography variant="small">Page</Typography>
            <Input
              type="number"
              value={currentPage}
              onChange={(e) => setCurrentPage(e.target.value)}
            />
            <Typography variant="small">of 10</Typography>
          </div>
          <Button
            variant="text"
            className="flex items-center gap-2 rounded-full"
            onClick={() => changePage(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
            <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
          </Button>
        </div>
      </Card>
      <Dialog open={showDeleteModal} handler={setShowDeleteModal}>
        <DialogHeader>Confirm Delete</DialogHeader>
        <DialogBody divider>
          Are you sure you want to delete this contact?
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={() => setShowDeleteModal(false)}
            className="mr-2"
          >
            No
          </Button>
          <Button variant="gradient" color="green" onClick={confirmDelete}>
            Yes
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
