"use client";
import React, { useState } from "react";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { FaChevronRight } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Link from "next/link";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export default function Abouts_Form() {
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
            <FaHome className="text-xl" /> Home
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
      <div className="py-4">
        <div>
          <h1>Title:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <div>
          <h1>Sub-Title:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        {/* <div>
          <h1>Description</h1>
          <CKEditor
            editor={ClassicEditor}
            data={editorData}
            onChange={handleEditorChange}
          />
        </div> */}
        <div className="w-full">
          <h1>Choose Image:</h1>
          <input
            type="file"
            required="true"
            accept="image/*"
            className="w-full border-2 my-2 "
          />
          <div>
            <h1>Image Alt:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
          <div>
            <h1>Button Link:</h1>
            <input
              type="text"
              required="true"
              className="w-full border-2 my-2"
            />
          </div>
        </div>
        <div className="my-2">
          <h1>Alternative Name:</h1>
          <input type="text" required="true" className="w-full border-2 my-2" />
        </div>
        <div>
          <h1>Description:</h1>
          <ReactQuill value={editorData} onChange={setEditorData} />
        </div>
        <div className="flex mt-3">
          <h1>Activate Status :</h1>
          <input type="checkbox" className="my-2" />
        </div>
        <div className="flex">
          <h1>Features:</h1>
          <input type="checkbox" className="my-2" />
        </div>
        <button className="bg-green-400 text-white my-4 text-2xl p-2 rounded-md">
          Submit
        </button>
      </div>
    </div>
  );
}
