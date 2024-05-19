"use client";
import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";

export default function Case_Study_Form() {
  const [editorData, setEditorData] = useState("");

  const handleEditorChange = (event, editor) => {
    const data = editor.getData();
    setEditorData(data);
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
        <h1>Add Case Study</h1>
      </div>
      <div className="flex mx-6 my-6 text-blue-500">
        <h1 className="flex">Add Case Study</h1>
      </div>
      <div className="py-4">
        <div>
          <h1>Title:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <div className="w-full">
          <h1>Thumb:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
        </div>
        <div>
          <h1>Section one</h1>
          {/* <div>
            <h1>Section 1 Description:</h1>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              onChange={handleEditorChange}
            />
          </div> */}
        </div>
        <div className="w-full">
          <h1 className="text-sm">Seection 1 Upload Multiple Image:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
        </div>
        {/* <div>
          <h1>Section two</h1>
{/*           <div>
            <h1>Section 2 Description:</h1>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              onChange={handleEditorChange}
            />

          </div> */}
        {/* </div> */}

        <div className="w-full">
          <h1 className="text-sm">Seection 2 Upload Multiple Image:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
        </div>
        <div>
          <h1>Section Three</h1>
{/*           <div>

            <h1>Section 3 Description:</h1>
            <CKEditor
              editor={ClassicEditor}
              data={editorData}
              onChange={handleEditorChange}
            />
          </div> */}
        </div>
        <div className="w-full">
          <h1 className="text-sm">Seection 3 Upload Multiple Image:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
        </div>
        <div className="">
          <input type="checkbox" id="scales" name="scales" />
          <label className="mx-2">Activate Status</label>
        </div>
        <div className="">
          <input type="checkbox" id="scales" name="scales" />
          <label className="mx-2">Featured</label>
        </div>
      </div>
      <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
        Submit
      </button>
    </div>
  );
}
