import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../../axios/food";

const CreateFoodPage = () => {
  const navigation = useNavigate();
  const [image, setImage] = useState("https://fakeimg.pl/350x200/");
  const [form, setForm] = useState({
    name: "",
    type: "",
    imageUrl: null,
  });

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];

    setForm({ ...form,imageUrl: uploaded });
    setImage(URL.createObjectURL(uploaded));
  }

  const submitHandler = () => {
    console.log(form)
    createData(form);
    navigation('/foods')
  };

  return (
    <>
      <div className="px-[300px] my-5">
        <label
          for="Name"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="relative mt-2 mb-3 rounded-md shadow-md">
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter food name"
          />
        </div>

        <label
          for="Type"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Type
        </label>
        <div className="relative mt-2 mb-3 rounded-md shadow-md">
          <input
            onChange={(e) => setForm({ ...form, type: e.target.value })}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter food type"
          />
        </div>
        <div className="mb-3">
          <div className="mb-4">
            <img
              src={image}
              className="img-thumbnail"
              alt="..."
              width="300px"
            />
          </div>
          <input
            onChange={handleUploadChange}
            className="form-control"
            type="file"
            id="formFile"
          />
        </div>
        <button
          onClick={() => submitHandler()}
          type="button"
          className="text-white items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default CreateFoodPage;
