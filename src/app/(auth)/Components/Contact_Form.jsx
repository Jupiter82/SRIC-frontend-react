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
import { toast } from "react-toastify";

export default function Contact_Form() {
  const [data, setData] = useState();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const navigate = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: {
      addressTitle: "",
      reference: "",
      address: "",
      workingTitle: "",
      hour: "",
      hourOff: "",
      contactTitle: "",
      phone: "",
      email: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      if (id) {
        const response = await adminUpdateApi(
          `/api/v1/contactInfo/${id}`,
          data
        );
        if (response) {
          toast.success("Form submitted successfully!"); // Display success toast
          navigate.push("/Contact_admin");
        }
      } else {
        const response = await adminPostApi("/api/v1/contactInfo", data);
        if (response) {
          toast.success("Form submitted successfully!"); // Display success toast
          navigate.push("/Contact_admin");
        }
      }
    } catch (error) {
      toast.error("Something went wrong, please try again."); // Display error toast
      console.error("Something went wrong:", error);
    }
  };

  const getUserByID = async (id) => {
    try {
      const result = await adminFetchApi(`api/v1/contactInfo/${id}`);
      if (result.status === 200) {
        setData(result.data.result);
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
      console.log(data);
      reset({
        addressTitle: data?.addressTitle,
        reference: data?.reference,
        address: data?.address,
        workingTitle: data?.workingTitle,
        hour: data?.hour,
        hourOff: data?.hourOff,
        contactTitle: data?.contactTitle,
        phone: data?.phone,
        email: data?.email,
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
        <h1>Contact</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Contact </h1>
      </div>
      <form className="py-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full">
          <div>
            <h1>Address Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("addressTitle", {
                required: "Address Title is required",
              })}
            />
            {errors.addressTitle && (
              <p className="text-red-200">{errors.addressTitle.message}</p>
            )}
          </div>
          <div>
            <h1>Address Reference:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("reference", { required: "Reference is required" })}
            />
            {errors.reference && (
              <p className="text-red-200">{errors.reference.message}</p>
            )}
          </div>
          <div>
            <h1>Address:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("address", { required: "Address is required" })}
            />
            {errors.address && (
              <p className="text-red-200">{errors.address.message}</p>
            )}
          </div>
          <div>
            <h1>Working Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("workingTitle", {
                required: "Working Title is required",
              })}
            />
            {errors.workingTitle && (
              <p className="text-red-200">{errors.workingTitle.message}</p>
            )}
          </div>
          <div>
            <h1>Working Hour:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("hour", { required: "Working Hour is required" })}
            />
            {errors.hour && (
              <p className="text-red-200">{errors.hour.message}</p>
            )}
          </div>
          <div>
            <h1>Hour Off:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("hourOff", { required: "Hour Off is required" })}
            />
            {errors.hourOff && (
              <p className="text-red-200">{errors.hourOff.message}</p>
            )}
          </div>
          <div>
            <h1>Contact Title:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("contactTitle", {
                required: "Contact Title is required",
              })}
            />
            {errors.contactTitle && (
              <p className="text-red-200">{errors.contactTitle.message}</p>
            )}
          </div>
          <div>
            <h1>Phone:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("phone", { required: "Phone is required" })}
            />
            {errors.phone && (
              <p className="text-red-200">{errors.phone.message}</p>
            )}
          </div>
          <div>
            <h1>Email:</h1>
            <input
              type="text"
              className="w-full border-2 my-2"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-red-200">{errors.email.message}</p>
            )}
          </div>
        </div>

        <button
          type="submit"
          value="submit"
          className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
}
