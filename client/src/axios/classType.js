import axios, { Axios } from "axios";
const URL = "http://localhost:3000/api/classtypes";
const accessToken = localStorage.getItem("access_token");
const config = {
   access_token: `${accessToken}` ,
};

const getClassType = async (cb) => {
  try {
    let classType = await axios(
      {
        method: "GET",
        url: URL,
      }
    );

    cb(classType.data);
  } catch (err) {
    console.log(err);
  }
};

const detailClass = async (id, cb) => {
  try {
    let classDetail = await axios(
      {
        method: "GET",
        url: URL + id,
      }
    );

    cb(classDetail.data)
  } catch (err) {
    console.log(err);
  }
};

export {
    getClassType,
    detailClass

}