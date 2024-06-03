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
import { toast } from "react-toastify";

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
      description: "",
      name: "",
      position: "",
      status: "",
      rating: "",
    },
  });

  const onsubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("name", data.name);
      formData.append("position", data.position);
      formData.append("rating", data.rating);
      formData.append("status", data.status);

      // Only append image if it's a new image or if the image has changed
      if (
        data.image &&
        (!existingImage || data.image[0].name !== existingImage)
      ) {
        formData.append("image", data.image[0]);
      }

      formData.append("description", data.description);

      if (id) {
        const response = await adminUpdateApi(
          `/api/v1/testimonial/${id}`,
          formData
        );
        if (response) {
          toast.success(response.data.message);
          navigate.push("/Testimonial");
        }
      } else {
        const response = await adminPostApi("/api/v1/testimonial", formData);
        if (response) {
          toast.success(response.data.message);
          navigate.push("/Testimonial");
        }
      }
    } catch (error) {
      console.error("Something is wrong:", error);
    }
  };

  const getUserByID = async (id) => {
    try {
      const result = await adminFetchApi("api/v1/testimonial", id);
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
        description: data?.description,
        name: data?.name,
        position: data?.position,
        status: data?.status,
        rating: data?.rating,
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
        <h1>Testimonial</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Testimonial </h1>
      </div>
      <form className="py-4" onSubmit={handleSubmit(onsubmit)}>
        <div className="w-full">
          <div>
            <h1>Choose Image:</h1>
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
            <h1>Testimonial Title:</h1>
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
            <h1>Testimonial Description:</h1>
            <textarea
              className="w-full border-2 my-2"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-200">{errors.description.message}</p>
            )}
          </div>
          <div>
            <h1>Name:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("name")}
            />
            {errors["name"] && (
              <p className="text-red-200">{errors["name"].message}</p>
            )}
          </div>
          <div>
            <h1>Position:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("position")}
            />
            {errors["position"] && (
              <p className="text-red-200">{errors["position"].message}</p>
            )}
          </div>
          <div>
            <h1>Rating:</h1>
            <input
              type="number"
              min={0}
              max={5}
              step={1}
              className="w-full border-2 my-2"
              {...register("rating", {
                required: "Rating is required",
                min: { value: 0, message: "Rating cannot be less than 0" },
                max: { value: 5, message: "Rating cannot be more than 5" },
              })}
            />
            {errors["rating"] && (
              <p className="text-red-200">{errors["rating"].message}</p>
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
