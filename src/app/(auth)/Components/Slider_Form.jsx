"use client";
import React, { useEffect, useState, } from "react";
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
import Submit_Form_Button from "./Buttons/Submit_Form_Button";
export default function Slider_Form() {
  const [data, setdata] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const [isNewImage, setIsNewImage] = useState(false)
  const searchParams = useSearchParams();

  const id = searchParams.get("id");
  console.log(id, "id");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({ defaultValues: { title: "" } });
  const onsubmit = async (data) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("url", data.url);
      formData.append("status", "active");
      // formData.append("image", data.image[0]);
      formData.append("subTitle", data.subTitle);
      formData.append("description", data.description);

      // Append file ONLY if a new one is selected
      if (data.image && data.image[0]) {
        formData.append("image", data.image[0]);
      }

      // else if (imagePreview && !isNewImage) {
      //   // If editing and no new image is selected, append the existing image name
      //   formData.append("existingImage", imagePreview);
      // }

      let response; // ✅ MUST be here (function scope)

      if (id) {
        response = await adminUpdateApi(`/api/v1/banner/${id}`, formData);
      } else {
        response = await adminPostApi("/api/v1/banner", formData);
      }

      console.log("RESPONSE 👉", response);

      // ✅ redirect AFTER confirmed success
      if (response && (response.status === 200 || response.status === 201)) {
        toast.success("Slider saved")
        router.replace("/Slider");
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
          setImagePreview(result.data.result.image);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  console.log(imagePreview, "image");
  console.log(data, "sloder");
  useEffect(() => {
    if (id) {
      getUserByID(id);
    }
  }, [id]);
  useEffect(() => {
    if (data) {
      reset({
        // image: data?.image[0],
        title: data?.title,
        subTitle: data?.subTitle,
        description: data?.description,
        url: data?.url,
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
          <h1>Choose Slider:</h1>
          <input
            type="file"
            accept="image/*"
            className="w-full border-2 my-2 "
            {...register("image", { required: !imagePreview && "Image is required" })}
            onChange={(e) => {
              if (e.target.files[0]) {
                setImagePreview(URL.createObjectURL(e.target.files[0]));
                setIsNewImage(true)
              }
            }}
          />
          {errors["image"] && (
            <p className="text-red-200">{errors["image"].message}</p>
          )}
          {imagePreview && (
            <div className="my-2">
              <img
                src={isNewImage ? imagePreview : process.env.NEXT_PUBLIC_IMAGE_URL + "/" + imagePreview}
                alt="Image Preview"
                className="w-32 h-32 object-cover"
              />
            </div>
          )}
          <div>
            <h1>Slider Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("title", { required: "TITLE is required", minLength: { value: 3, message: "Title must be at lest 3 character long" } })}
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
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("description", { required: "description is required" })}
            />
            {errors["description"] && (
              <p className="text-red-200">{errors["description"].message}</p>
            )}
          </div>
          <div>
            <h1>Slider Link:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("url", { required: "url is required", pattern: { value: /^https?:\/\/.+/i, message: "Url must start wit http: or https:" } })}
            />
            {errors["url"] && (
              <p className="text-red-200">{errors["url"].message}</p>
            )}
          </div>
        </div>

        <Submit_Form_Button />
      </form>
    </div>
  );
}
