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

export default function Abouts_Form() {
  const [data, setData] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const searchParams = useSearchParams();
  const [existingImage, setExistingImage] = useState(null);
  const id = searchParams.get("id");
  const router = useRouter();
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
      skill: [{ title: "" }],
    },
  });

  const [skill, setskill] = useState([{ title: "" }]);

  const addSkill = () => {
    setskill([...skill, { title: "" }]);
  };

  const removeSkill = (index) => {
    const newskill = skill.filter((_, i) => i !== index);
    setskill(newskill);
  };

  const onSubmit = async (formData) => {
    try {
      const payload = new FormData();
      payload.append("title", formData.title);

      if (
        formData.image &&
        formData.image[0] &&
        (!existingImage || formData.image[0].name !== existingImage)
      ) {
        payload.append("image", formData.image[0]);
      }

      payload.append("subTitle", formData.subTitle);
      payload.append("description", formData.description);
      const skillArray = formData.skill.map((skill) => ({
        title: skill.title,
      }));
      payload.append("skill", JSON.stringify(skillArray));

      if (id) {
        const response = await adminUpdateApi(`/api/v1/about/${id}`, payload);
        if (response) {
          router.push("/Abouts");
        }
      } else {
        const response = await adminPostApi("/api/v1/about", payload);
        if (response) {
          router.push("/Abouts");
        }
      }
    } catch (error) {
      console.error("Something went wrong:", error);
    }
  };

  const getUserByID = async (id) => {
    try {
      const result = await adminFetchApi(`api/v1/about/${id}`);
      if (result.status === 200) {
        setData(result.data.result);
        if (result.data.result.image) {
          const imageUrl = `${process.env.NEXT_PUBLIC_IMAGE_URL}/${result.data.result.image}`;
          setImagePreview(imageUrl);
          setExistingImage(imageUrl);
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
        image: "",
        title: data.title,
        subTitle: data.subTitle,
        description: data.description,
        skill: data.skill || [{ title: "" }],
      });
      setskill(data.skill || [{ title: "" }]);
    }
  }, [data, reset]);

  return (
    <div className="mx-4">
      <div className="flex row gap-2 mx-4 my-4 text-blue-500">
        <Link href="/profile">
          <h1 className="flex gap-2">
            <FaHome className="text-xl" /> Home{" "}
            <FaChevronRight className="my-1" />
          </h1>
        </Link>
        <h1 className="flex gap-2">
          Pages <FaChevronRight className="my-1" />
        </h1>
        <h1>About</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add About</h1>
      </div>
      <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div>
            <h1>Choose About Image:</h1>
            <input
              type="file"
              accept="image/*"
              className="w-full border-2 my-2"
              {...register("image", {
                required: !existingImage && "Image is required",
              })}
              onChange={(e) => {
                if (e.target.files[0]) {
                  setImagePreview(URL.createObjectURL(e.target.files[0]));
                }
              }}
            />
            {errors.image && (
              <p className="text-red-200">{errors.image.message}</p>
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
            <h1>About Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <p className="text-red-200">{errors.title.message}</p>
            )}
          </div>
          <div>
            <h1>Sub Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("subTitle", { required: "Sub title is required" })}
            />
            {errors.subTitle && (
              <p className="text-red-200">{errors.subTitle.message}</p>
            )}
          </div>
          <div>
            <h1>About Description:</h1>
            <textarea
              className="w-full border-2 my-2"
              {...register("description")}
            />
            {errors.description && (
              <p className="text-red-200">{errors.description.message}</p>
            )}
          </div>
          <div>
            <h1>About skill:</h1>
            {skill.map((skill, index) => (
              <div key={index} className="mb-4">
                <div>
                  <input
                    type="text"
                    placeholder="Skill Name"
                    className="w-full border-2 my-2"
                    {...register(`skill[${index}].title`, {
                      required: "Skill title is required",
                    })}
                  />
                  {errors.skill?.[index]?.title && (
                    <p className="text-red-200">
                      {errors.skill[index].title.message}
                    </p>
                  )}
                </div>
                {skill.length > 1 && (
                  <button type="button" onClick={() => removeSkill(index)}>
                    Remove
                  </button>
                )}
              </div>
            ))}
            <button type="button" onClick={addSkill}>
              Add Skill
            </button>
          </div>
        </div>
        <button
          type="submit"
          className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
