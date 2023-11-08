import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateData, detailData } from "../../axios/food";
import InputText from "../animal/components/InputText";

const EditFoodPage = () => {
  const navigation = useNavigate();
  const params = useParams();
  const [info, setInfo] = useState({
    data: {},
    consumed: {}
  });

  const [form, setForm] = useState({
    name: "",
    type: "",
    imageUrl: null,
  });


  const getItemInfo = () => {
    const { id } = params;
    detailData(+id, (result) => {
      setInfo({
        data: result.resultAF,
        consumed: result.classTypeData
      });
      setForm({
        name: result.resultAF.name,
        type: result.resultAF.type,
        imageUrl: result.resultAF.imageUrl,
      })
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

  const submitHandler = () => {
    console.log(form);
    updateData(+params.id, form)
    navigation('/foods')
    window.location.reload()
  };


  return (
    <>
      <div className="px-[300px] my-5">

        <InputText
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          label={"Name"}
          name={"name"}
          placeHolder={`Enter food name`}
          value={form.name}

        />
        <InputText
          onChange={(e) => setForm({ ...form, type: e.target.value })}
          label={"Type"}
          name={"type"}
          placeHolder={"Enter food type"}
          value={form.type}
        />

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

export default EditFoodPage;
