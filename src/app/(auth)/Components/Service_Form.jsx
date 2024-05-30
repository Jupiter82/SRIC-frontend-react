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
// Function to dynamically import icons from various packages
const getIconComponent = async (iconNameWithPrefix) => {
  const prefixToPackageMap = {
    fa: "react-icons/fa",
    fi: "react-icons/fi",
    ci: "react-icons/ci",
    // add more mappings for other icon packages as needed
  };

  const prefix = iconNameWithPrefix.slice(0, 2); // extract the prefix (first two characters)
  const iconName = iconNameWithPrefix.slice(2); // extract the actual icon name

  if (!prefixToPackageMap[prefix]) {
    console.error(`Unsupported icon prefix: ${prefix}`);
    return null;
  }

  try {
    const { [iconName]: Icon } = await import(`${prefixToPackageMap[prefix]}`);
    return Icon ? <Icon /> : null;
  } catch (error) {
    console.error(
      `Icon ${iconName} not found in package ${prefixToPackageMap[prefix]}:`,
      error
    );
    return null;
  }
};
export default function Service_Form() {
  const [data, setdata] = useState();
  const [imagePreview, setImagePreview] = useState(null);
  const [iconPreview, setIconPreview] = useState(null);
  const searchParams = useSearchParams();
  const [existingImage, setExistingImage] = useState(null);
  const [existingIcon, setExistingIcon] = useState(null);
  const id = searchParams.get("id");
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      title: "",
      subTitle: "",
      description: "",
      icon: "",
    },
  });
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
      const result = await adminFetchApi("api/v1/service", id);
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
        if (result.data.result.icon) {
          setExistingIcon(result.data.result.icon);
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
      reset({
        image: data?.image,
        icon: data?.icon,
        title: data?.title,
        subTitle: data?.subTitle,
        description: data?.description,
      });
      if (data?.icon) {
        setIconPreview(data?.icon);
      }
    }
  }, [data, reset]);
  const handleIconChange = async (e) => {
    const iconNameWithPrefix = e.target.value;
    setValue("icon", iconNameWithPrefix);
    const IconComponent = await getIconComponent(iconNameWithPrefix);
    setIconPreview(IconComponent);
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
            <h1>Choose Icon:</h1>
            <input
              type="text"
              placeholder="Enter icon name with prefix (e.g., faBeer, fiCoffee)"
              className="w-full border-2 my-2"
              {...register("icon", {
                required: existingIcon ? false : "Icon is required",
              })}
              onChange={handleIconChange}
            />
            {errors.icon && (
              <p className="text-red-200">{errors.icon.message}</p>
            )}
            {iconPreview && <div className="my-2">{iconPreview}</div>}
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
