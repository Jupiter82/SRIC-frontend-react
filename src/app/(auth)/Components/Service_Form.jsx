"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronRight, FaHome } from "react-icons/fa";
import {
  adminFetchApi,
  adminPostApi,
  adminUpdateApi,
} from "@/app/utils/httpUtils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import * as lucideIcons from "lucide-react";

export default function Service_Form() {
  const [data, setData] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const searchParams = useSearchParams();
  const [existingImage, setExistingImage] = useState(null);
  const [iconName, setIconName] = useState("");
  const id = searchParams.get("id");
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      icon: "",
    },
  });

  useEffect(() => {
    if (id) {
      getUserByID(id);
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      reset({
        image: data?.image,
        icon: data?.icon,
        title: data?.title,
        description: data?.description,
      });
      setIconName(data?.icon);
    }
  }, [data, reset]);

  const onsubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);

      if (data.image) {
        formData.append("image", data.image[0]);
      }

      formData.append("description", data.description);
      formData.append("icon", data.icon);

      if (id) {
        const response = await adminUpdateApi(
          `/api/v1/service/${id}`,
          formData
        );
        if (response) {
          navigate.push("/Service_admin");
        }
      } else {
        const response = await adminPostApi("/api/v1/service", formData);
        if (response) {
          navigate.push("/Service_admin");
        }
      }
    } catch (error) {
      console.error("Something is wrong:", error);
    }
  };

  const getUserByID = async (id) => {
    try {
      const result = await adminFetchApi(`api/v1/service/${id}`);
      if (result.status === 200) {
        setData(result.data.result);

        if (result.data.result.image) {
          setImagePreview(
            `${process.env.NEXT_PUBLIC_IMAGE_URL}/${result.data.result.image}`
          );
          setExistingImage(
            `${process.env.NEXT_PUBLIC_IMAGE_URL}/${result.data.result.image}`
          );
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  const IconComponent = lucideIcons[iconName];
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div className="mx-4">
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
        <h1>Service</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Service </h1>
      </div>
      <form className="py-4" onSubmit={handleSubmit(onsubmit)}>
        <div className="w-full">
          <h1>Choose Service:</h1>
          <input
            type="file"
            accept="image/*"
            className="w-full border-2 my-2 "
            {...register("image", {
              required: existingImage ? false : "Image is required",
            })}
            onChange={(e) => {
              if (e.target.files[0]) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
              }
            }}
          />
          {errors["image"] && (
            <p className="text-red-200">{errors["image"].message}</p>
          )}
          {imagePreview && (
            <div className="my-2">
              <img
                src={imagePreview}
                alt="Image Preview"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
          <div>
            <h1>Service Icon:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("icon", { required: "icon is required" })}
              onChange={(e) =>
                setIconName(capitalizeFirstLetter(e.target.value))
              }
            />
            {errors["icon"] && (
              <p className="text-red-200">{errors["icon"].message}</p>
            )}
            <div className="icon-preview my-2">
              {IconComponent ? <IconComponent /> : <p>Loading icon...</p>}
            </div>
            <p className="text-gray-500">
              Choose icon from{" "}
              <a
                href="https://lucide.dev/icons/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Lucide icons
              </a>{" "}
            </p>
          </div>
          <div>
            <h1>Service Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("title", { required: "TITLE is required" })}
            />
            {errors["title"] && (
              <p className="text-red-200">{errors["title"].message}</p>
            )}
          </div>

          <div>
            <h1>Service Description:</h1>
            <textarea
              className="w-full border-2 my-2"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-200">{errors.description.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          value="submit"
          className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "loading" : "Submit"}
        </button>
      </form>
    </div>
  );
}
