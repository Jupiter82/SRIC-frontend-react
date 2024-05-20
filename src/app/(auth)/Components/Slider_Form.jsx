"use client"
import React from "react";
import { useForm } from "react-hook-form";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { adminPostApi } from "@/app/utils/httpUtils";
import Link from "next/link";
export default function Slider_Form() {
  const {register,handleSubmit,formState:{errors,isSubmitting}}= useForm({defaultValues:{title:"JUPOT"}})
  const onsubmit = async (data) => {
   console.log(data )
    try {

      const formData = new FormData()
      formData.append("title",data.title)
      formData.append("url",data.url)
      formData.append("status","active")
      formData.append("image",data.image[0])
      formData.append("subTitle",data.subTitle)
      formData.append("description",data.description)
      const response = await adminPostApi("/api/v1/banner",formData) 
      console.log(response)
    } catch (error) {
      console.error("Something is wrong:", error);
     
    }
  };
  console.log(errors)
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
      <form className="py-4"  onSubmit={handleSubmit(onsubmit)}>
        <div className="w-full">
          <h1>Choose Slider:</h1>
          <input
            type="file"
            accept="image/*"
            className="w-full border-2 my-2 "
            {...register("image",{required:"nanf,dmn dsf"})}
          />
           {errors["image"] && <p className="text-red-200">{errors["image"].message}</p>}
          <div>
            <h1>Slider Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("title",{required:"TITLE is required",})}
            />
             {errors["title"] && <p className="text-red-200">{errors["title"].message}</p>}
          </div>
          <div>
            <h1>Sub Title:</h1>
            <input
              type="text"

              className="w-full border-2 my-2"
              {...register("subTitle",{required:"sub title is required"})}
            />
            {errors["subTitle"] && <p className="text-red-200">{errors["subTitle"].message}</p>}
          </div>
          
          <div>
            <h1>Slider Description:</h1>
            <input
              type="text"
             
              className="w-full border-2 my-2"
              {...register("description")}
            />
             {errors["description"] && <p className="text-red-200">{errors["description"].message}</p>}
          </div>
          <div>
            <h1>Slider Link:</h1>
            <input
              type="text" 
              className="w-full border-2 my-2"
              {...register("url",)}
            />
             {errors["url"] && <p className="text-red-200">{errors["url"].message}</p>}
          </div>
        </div>


        <button type="submit" value="submit" className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}
