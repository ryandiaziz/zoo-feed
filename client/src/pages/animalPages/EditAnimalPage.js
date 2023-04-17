import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateData, detailData } from "../../axios/animal";
import { getClassType } from "../../axios/classType";
import { getHabitat } from "../../axios/habitat";
import InputText from "./components/InputText";

const EditAnimalPage = () => {
  const navigation = useNavigate();
  const params = useParams();
  const [classType, setClassType] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [info, setInfo] = useState({
    data: {},
    classTypeData: {},
    habitatData: {},
  });

  const [form, setForm] = useState({
    name: info.data.name,
    age: info.data.age,
    sex: info.data.sex,
    imageUrl: info.data.imageUrl,
    classTypeId: info.data.classType,
    habitatId: info.data.habitatId,
  });

  const getItemInfo = () => {
    const { id } = params;
    detailData(+id, (result) => {
      setInfo({
        data: result.resultAF,
        classTypeData: result.classTypeData[0],
        habitatData: result.habitatData[0],
      });
    });
  };

  useEffect(() => {
    getItemInfo();
  }, []);

  function handleUploadChange(e) {
    let uploaded = e.target.files[0];
    setForm({ ...form, imageUrl: uploaded });
    setInfo((prevState) => {
      return {
        ...prevState,
        data: {
          ...prevState.data,
          imageUrl: URL.createObjectURL(uploaded),
        },
      };
    });
  }
  useEffect(() => {
    getClassType((result) => setClassType(result));
  }, []);

  useEffect(() => {
    getHabitat((result) => setHabitat(result));
  }, []);

  const submitHandler = () => {
    console.log(form);
    // updateData(+params.id, form)
    // navigation('/items')
  };

  function handleChange(field, value) {
    setForm({ ...form, [field]: value });
  }

  return (
    <>
      <div className="px-[300px] my-5">
        <form action="">
          <InputText
            onChange={(value) => handleChange("name", value)}
            label={"Name"}
            name={"name"}
            placeHolder={`Enter animal name`}
            value={info.data.name}
          />
          <InputText
            onChange={(value) => handleChange("age", value)}
            label={"Age"}
            name={"age"}
            placeHolder={"Enter animal age"}
            value={info.data.age}
          />
          <div className="mb-3">
            <label
              htmlFor="countries"
              className="block mb-2 text-sm font-medium text-gray-900 "
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
                src={info.data.imageUrl}
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
              className="block mb-2 text-sm font-medium text-gray-900 "
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
              className="block mb-2 text-sm font-medium text-gray-900 "
            >
              Habitat
            </label>
            <select
              onClick={(e) => setForm({ ...form, habitatId: e.target.value })}
              id="countries"
              className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Choose Animal Habitat</option>
              {habitat.map((dataHabitat) => {
                return (
                  <>
                    <option value={dataHabitat.id}>{dataHabitat.name}</option>
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
        </form>
      </div>
    </>
  );
};

export default EditAnimalPage;
