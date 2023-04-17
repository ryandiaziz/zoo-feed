import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../../axios/animal";
import { getClassType } from "../../axios/classType";
import InputText from "./components/InputText";
import { getHabitat } from "../../axios/habitat";

const CreateAnimalPage = () => {
  const navigation = useNavigate();
  const [image, setImage] = useState("https://fakeimg.pl/350x200/");
  const [classType, setClassType] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [form, setForm] = useState({
    name: "",
    age: 0,
    sex: "",
    imageUrl: null,
    classTypeId: 0,
    habitatId: 0,
  });

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];

    setForm({ ...form, imageUrl: uploaded });
    setImage(URL.createObjectURL(uploaded));
  }
  useEffect(() => {
    getClassType((result) => setClassType(result));
  }, []);

  useEffect(() => {
    getHabitat((result) => setHabitat(result));
  }, []);

  const submitHandler = () => {
    console.log(form);
    createData(form);
    navigation('/animals')
  };

  return (
    <>
      <div className="px-[300px] my-5">
        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Name
        </label>
        <div className="relative mt-2 mb-3 rounded-md shadow-md">
          <input
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter animal Name"
          />
        </div>

        <label
          htmlFor="price"
          className="block text-sm font-medium leading-6 text-gray-900"
        >
          Age
        </label>
        <div className="relative mt-2 mb-3 rounded-md shadow-md">
          <input
            onChange={(e) => setForm({ ...form, age: e.target.value })}
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Enter animal age"
          />
        </div>

        <div className="mb-3">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Sex
          </label>

          <select
            onClick={(e) => setForm({ ...form, sex: e.target.value })}
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
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
        <div className="mb-3">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Class
          </label>
          <select
            onClick={(e) => setForm({ ...form, classTypeId: e.target.value })}
            id="countries"
            className="bg-white shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option selected>Choose Animal Class</option>
            {classType.map((dataClass) => {
              return (
                <>
                  <option value={dataClass.id}>{dataClass.name}</option>
                </>
              );
            })}
          </select>
        </div>
        <div className="mb-3">
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Habitat
          </label>
          <select
            onClick={(e) => setForm({ ...form, habitatId: e.target.value })}
            id="countries"
            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          >
            <option
              selected
            >
              Choose Animal Habitat
            </option>
            {habitat.map((dataHabitat) => {
              return (
                <>
                  <option
                    value={dataHabitat.id}
                  >
                    {dataHabitat.name}
                  </option>
                </>
              );
            })}
          </select>
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

export default CreateAnimalPage;
