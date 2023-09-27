"use client";
import React, { useState } from "react";

const page = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [mainTask, setMainTask] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    setMainTask([...mainTask, { title, desc }]);
    setTitle("");
    setDesc("");
    console.log(mainTask);
  };

  const deleteHandler = (i) => {
    let copyTask = [...mainTask];
    copyTask.splice(i, 1);
    setMainTask(copyTask);
  };

  let renderTask = <h2 className="text-2xl font-bold">No Task Available</h2>;
  if (mainTask.length > 0) {
    renderTask = mainTask.map((t, i) => {
      return (
        <div
          key={i}
          className="flex  justify-between bg-slate-200 rounded-2xl p-4 mt-4"
        >
          <div className="flex place-item-center">
            <h1 className="pr-10 my-auto">Task {i + 1}</h1>
            <h5 className="font-semibold text-xl my-auto">{t.title}</h5>
            <h2 className="pl-10 my-auto">{t.desc}</h2>
          </div>
          <div>
            <button
              onClick={()=>deleteHandler(i)}
              className="bg-red-600 text-white p-4 rounded-lg ml-4 font-extrabold"
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  }

  return (
    <>
      <h1 className="bg-black text-white text-5xl text-center p-5 font-bold ">
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

        <button className="bg-purple-600 text-white p-4 rounded-lg ml-4 font-extrabold">
          Add Task
        </button>
      </form>

      <div className="p-8 mx-[14%]">
        <ul>{renderTask}</ul>
      </div>
    </>
  );
};

export default page;
