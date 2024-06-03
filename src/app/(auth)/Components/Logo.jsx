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
} from "@material-tailwind/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaChevronRight, FaHome, FaPlus } from "react-icons/fa";
import { adminDeleteApi, adminFetchApi } from "@/app/utils/httpUtils";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Dialog } from "@material-tailwind/react";

export default function Logo() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [LogoData, setLogoData] = useState([]);
  const router = useRouter();
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);

  const handleDeleteClick = (id) => {
    setDeleteId(id);
    setShowDeleteModal(true);
  };

  const deleteUserById = async () => {
    try {
      const result = await adminDeleteApi("api/v1/logo", deleteId);
      if (result.status === 200) {
        getLogoDetails();
        toast.success("Deleted successfully!");
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to delete!");
    } finally {
      setShowDeleteModal(false);
    }
  };

  const changePage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const getLogoDetails = async (pageNumber) => {
    try {
      const response = await adminFetchApi(
        `/api/v1/Logo?page=${pageNumber}&limit=10`
      );
      const fetchedData = response.data;
      setLogoData(fetchedData.result);
      setTotalPages(fetchedData.totalPages);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getLogoDetails(currentPage);
  }, [currentPage]);

  const TABLE_HEAD = ["Image", "Title", "Action"];

  return (
    <>
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href={"/profile"}>
          <h1 className="flex gap-2">
            <FaHome className="text-xl" /> Home{" "}
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>Logo</h1>
      </div>

      <Link href={"/Logo_Form"}>
        <button className="text-white flex text-xl bg-green-400 rounded-md p-4 mx-4 ">
          <FaPlus className="mx-2 text-3xl" />
          Add New Logo
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
              {LogoData.map(({ image, title, _id }, index) => {
                const isLast = index === LogoData.length - 1;
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
                      <Tooltip content="Edit Logo">
                        <IconButton
                          variant="text"
                          onClick={() => {
                            router.push(`/Logo_Form?id=${_id}`);
                          }}
                        >
                          <PencilIcon className="h-4 w-4" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip content="Delete Logo">
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
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>

      <Dialog open={showDeleteModal} handler={setShowDeleteModal}>
        <Dialog.Header>Confirm Delete</Dialog.Header>
        <Dialog.Body>Are you sure you want to delete this logo?</Dialog.Body>
        <Dialog.Footer>
          <Button
            variant="text"
            color="red"
            onClick={() => setShowDeleteModal(false)}
          >
            Cancel
          </Button>
          <Button variant="gradient" color="green" onClick={deleteUserById}>
            Yes, Delete
          </Button>
        </Dialog.Footer>
      </Dialog>
    </>
  );
}
