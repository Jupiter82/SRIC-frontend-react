"use client";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import {
  adminFetchApi,
  adminPostApi,
  adminUpdateApi,
} from "@/app/utils/httpUtils";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

export default function Slider_Form() {
  const [data, setdata] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const searchParams = useSearchParams();
  const [existingImage, setExistingImage] = useState(null);
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
      subTitle: "",
      description: "",
      url: "",
      status: "",
    },
  });

  const onsubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      data.url.includes("http")
        ? formData.append("url", data.url)
        : formData.append("url", "https://" + data.url);
      formData.append("status", data.status);

      // Only append image if it's a new image or if the image has changed
      if (
        data.image &&
        (!existingImage || data.image[0].name !== existingImage)
      ) {
        formData.append("image", data.image[0]);
      }

      formData.append("subTitle", data.subTitle);
      formData.append("description", data.description);

      if (id) {
        const response = await adminUpdateApi(`/api/v1/banner/${id}`, formData);
        if (response) {
          navigate.push("/Slider");
        }
      } else {
        const response = await adminPostApi("/api/v1/banner", formData);
        if (response) {
          navigate.push("/Slider");
        }
      }
    } catch (error) {
      console.error("Something is wrong:", error);
    }
  };

  const getUserByID = async (id) => {
    try {
      const result = await adminFetchApi("api/v1/banner", id);
      if (result.status === 200) {
        setdata(result.data.result);
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

  useEffect(() => {
    if (id) {
      getUserByID(id);
    }
  }, [id]);

  useEffect(() => {
    if (data) {
      console.log(data, data?.image);
      reset({
        image: "",
        title: data?.title,
        subTitle: data?.subTitle,
        description: data?.description,
        url: data?.url,
        status: data?.status,
      });
    }
  }, [data, reset]);
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
        <h1>Slider</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Slider </h1>
      </div>
      <form className="py-4" onSubmit={handleSubmit(onsubmit)}>
        <div className="w-full">
          <div>
            <h1>Choose Slider:</h1>
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
          </div>

          <div>
            <h1>Slider Title:</h1>
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
            <h1>Sub Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("subTitle", { required: "sub title is required" })}
            />
            {errors["subTitle"] && (
              <p className="text-red-200">{errors["subTitle"].message}</p>
            )}
          </div>

          <div>
            <h1>Slider Description:</h1>
            <textarea
              className="w-full border-2 my-2"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-200">{errors.description.message}</p>
            )}
          </div>
          <div>
            <h1>Slider Link:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("url")}
            />
            {errors["url"] && (
              <p className="text-red-200">{errors["url"].message}</p>
            )}
          </div>
          <div>
            <h1>Status:</h1>
            <select
              className="w-full border-2 my-2"
              {...register("status", { required: "status is required" })}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
            {errors["status"] && (
              <p className="text-red-200">{errors["status"].message}</p>
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
