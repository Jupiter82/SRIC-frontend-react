"use client"
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
import { adminFetchApi } from "@/app/utils/httpUtils";
import { ICON_MAP } from "@/common/iconMap"
import { FaQuestionCircle } from "react-icons/fa";


export default function Service_admin() {
  const [serviceData, setServiceData] = useState([])
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const getServiceData = async () => {
    try {
      const response = await adminFetchApi("api/v1/service?page=1&limit=10")
      setServiceData(response?.data?.result)
    } catch (error) {
      console.log(error)
    }
  }
  const handleDeleteClick = () => {
    setShowDeleteModal(true);
  };
  const handleConfirmDelete = () => {

    console.log("Delete confirmed");
    setShowDeleteModal(false);
  };
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
  };
  useEffect(() => getServiceData, [])
  const TABLE_HEAD = ["Image", "Title", "Status", "Icon", "Action"];

  return (
    <>
      <Breadcrumbs_Div title={"Service"} />
      <div className=" ">
        <Add_Form_Button title={"Service"} path={"Service_Form"} />

        <Card className="h-full w-full">
          <CardHeader floated={false} shadow={false} className="rounded-none">
          </CardHeader>
          <CardBody className="overflow-scroll px-0">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>{TABLE_HEAD.map((head) =>
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography variant="small" color="blue-grey" className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                )}</tr>
              </thead>
              <tbody>
                {serviceData?.map(({ image, title, status, icon, _id }, index) => {
                  const isLast = index === serviceData.length - 1;
                  const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50"
                  const isActive = status == "active"
                  const IconComponent = ICON_MAP[icon] || FaQuestionCircle;
                  return (
                    <tr key={_id}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={process.env.NEXT_PUBLIC_IMAGE_URL + "/" + image} alt={title} size="md" className="border  border-blue-gray-50 bg-blue-gray-50/50 object-contain p-1" />
                        </div>
                      </td>
                      <td>
                        <Typography variant="small" color="blue-gray" className="font-normal">{title}</Typography>
                      </td>

                      <td>
                        <Typography><div className="flex gap-2">
                          <div className={`rounded-md flex items-center py-0.5 px-2.5 border border-transparent text-sm transition-all shadow-sm ${isActive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                            <div className={`mx-auto block h-2 w-2 rounded-full mr-2 ${isActive ? "bg-green-800" : "bg-red-800"}`}>
                            </div>
                            {isActive ? "Active" : "Inactive"}
                          </div>
                        </div>
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-2">
                          {
                            IconComponent && (<IconComponent className="text-xl text-blue-600" />)
                          }
                        </div>
                      </td>
                      <td></td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>

        {showDeleteModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-md">
              <h2 className="text-lg font-semibold mb-4">Delete</h2>
              <p>Please confirm you would like to delete this Service.</p>
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
      </div>
    </>
  );
}
