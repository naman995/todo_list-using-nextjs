"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    setTitle("");
    setDesc("");
  };
  return (
    <>
      <h1 className="bg-black text-white text-5xl text-center p-5 font-bold">
        TODO lists
      </h1>
      <form
        className="flex flex-row place-content-center mt-4"
        onSubmit={submitHandler}
      >
        <input
          className=" border-2 border-zinc-500 outline-none w-[300px] px-2 py-2"
          placeholder="Enter the title "
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className=" border-2 border-zinc-500 outline-none w-[600px] px-2 py-2"
          placeholder="Enter the Description "
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <button className="bg-black text-white p-4 rounded-lg ml-4 font-extrabold">
          Add Task
        </button>
      </form>
    </>
  );
};

export default page;
