import axios, { Axios } from "axios";
const URL = "http://localhost:3000/api/habitats";
const accessToken = localStorage.getItem("access_token");
const config = {
  headers: { access_token: `${accessToken}` },
};

const getHabitat = async (cb) => {
  try {
    let habitat = await axios(
      {
        method: "GET",
        url: URL,
      },
      config
    );

    cb(habitat.data);
  } catch (err) {
    console.log(err);
  }
};

const detailHabitat = async (id, cb) => {
  try {
    let classDetail = await axios(
      {
        method: "GET",
        url: URL + id,
      },
      config
    );

    cb(classDetail.data)
  } catch (err) {
    console.log(err);
  }
};

export {
    getHabitat,
   detailHabitat

}