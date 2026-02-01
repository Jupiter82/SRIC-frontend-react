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
import { PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import {
  ArrowDownTrayIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-toastify";
// import { useRouter } from "next/navigation";

export default function Slider() {
  const [sliderData, setSliderData] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const navigate = useRouter();
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("")
  const [meta, setMeta] = useState({});
  const handleConfirmDelete = async () => {
    try {
      const response = await adminDeleteApi("/api/v1/banner", deleteId);
      // const response = await adminDeleteApi(`/api/v1/banner/${deleteId}`);
      if (response.status === 200) {
        toast.success("Successfully deleted")
        setDeleteId(null);
        setShowDeleteModal(false);
        getSliderDetails()
      }
    } catch (error) {
      console.log(error)
    }
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeleteId(null)
  };
  const getSliderDetails = async () => {
    try {
      const response = await adminFetchApi(`/api/v1/banner?page=${page}&limit=10&search=${search}`);
      console.log(response?.data?.result, "response result")
      setSliderData(response?.data?.result);
      setMeta(response?.data?.meta);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getSliderDetails();
  }, [page])
  useEffect(() => {
    const delay = setTimeout(() => {
      getSliderDetails();
    }, 300)
    return () => clearTimeout(delay)
  }, [search]);

  const TABLE_HEAD = ["Image", "Title", "Sub-Title", "Description", "Action"];
  const totalPages = Math.ceil((meta?.total || 0) / (meta?.limit || 10));
  const pathname = usePathname();
  const pTitle = pathname.split("/")[1]

  // const TABLE_ROWS = [
  //   {
  //     img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
  //     name: "Spotify",
  //     amount: "$2,500",
  //     date: "Wed 3:00pm",
  //     status: "paid",
  //     account: "visa",
  //     accountNumber: "1234",
  //     expiry: "06/2026",
  //   }
  // ];

  //before when delete button id without model
  // const deleteUserById = async (id) => {
  //   //delte ko api with id
  //   try {
  //     const result = await adminDeleteApi("api/v1/banner", id);
  //     if (result.status === 200) {
  //       toast.success("Successfully deleted")
  //       setShowDeleteModal(false)
  //       setDeleteId(null)
  //       getSliderDetails();
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // console.log(sliderData, "test");

  return (
    <>
      <Breadcrumbs_Div title={pTitle} />
      <Add_Form_Button title={pTitle} path="/Slider_Form" />

      <Card className="h-full w-full">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <Typography variant="h5" color="blue-gray">
                Sliders
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Manage slider content
              </Typography>
            </div>
            <div className="flex w-full shrink-0 gap-2 md:w-max">
              <div className="w-full md:w-72">
                <Input
                  label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                />
              </div>
              {/* <Button className="flex items-center gap-3" size="sm">
                <ArrowDownTrayIcon strokeWidth={2} className="h-4 w-4" />{" "}
                Download
              </Button> */}
            </div>
          </div>
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
              {sliderData?.map(
                ({ description, image, subTitle, title, url, _id }, index) => {
                  // const isLast = index === TABLE_ROWS.length - 1;
                  const isLast = index === sliderData.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={_id}>
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
                          {/* <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {image}
                          </Typography> */}
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
                            // onClick={() => {
                            //   deleteUserById(_id);
                            // }}
                            onClick={() => { setDeleteId(_id); setShowDeleteModal(true); console.log(_id, "Deleted") }}

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
          {showDeleteModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-md">
                <h2 className="text-lg font-semibold mb-4">Delete</h2>
                <p>Please confirm you would like to delete this Slider.</p>
                <div className="flex justify-end mt-4">
                  <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md mr-2"
                    onClick={() => {
                      handleConfirmDelete()
                    }}
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
        </CardBody>
        <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
          <Button variant="outlined" size="sm" disabled={page === 1} onClick={() => setPage(prev => prev - 1)}>
            Previous
          </Button>
          <div className="flex items-center gap-2">
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (<IconButton variant={p === page ? "outlined" : "text"} size="sm" key={p} onClick={() => setPage(p)}>{p}</IconButton>))}

          </div>
          <Button variant="outlined" size="sm" disabled={page === totalPages} onClick={() => setPage(prev => prev + 1)}>
            Next
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
