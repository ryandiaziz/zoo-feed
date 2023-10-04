import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { detailData } from "../../axios/animal";
import { readData } from "../../axios/food";
import TableRow from "./components/TableRow";
import { FaPlus, FaRegEdit, FaWindowClose, FaReply } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { addAF, deleteAF } from "../../axios/animalfood";
import Swal from "sweetalert2";

const DetailAnimalPage = (props) => {
  const navigation = useNavigate();
  const params = useParams();
  const { loginStatus, userData } = props;
  const [show, setShow] = useState(false);
  const [foods, setFoods] = useState([]);
  const [allFood, setAllFood] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [detail, setDetail] = useState({
    data: {},
    classTypeData: {},
    habitatData: {},
  });
  const [form, setForm] = useState({
    foodId: 0,
  });

  const getAnimalDetail = () => {
    const { id } = params;
    detailData(+id, (result) => {
      setDetail({
        data: result.resultAF,
        classTypeData: result.classTypeData[0],
        habitatData: result.habitatData[0],
      });
      setFoods(result.resultAF.foods);
    });
    readData((result) => setAllFood(result));
  };

  useEffect(() => {
    getAnimalDetail();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id } = params;
    if (form.foodId !== 0) {
      addAF(id, form);
      setIsModalOpen(false);
    } else {
      Swal.fire({
        title: "Please select the Foods",
        text: "You did not make any changes, please try again! ",
        icon: "warning",
        confirmButtonColor: "#FF8C00",
        confirmButtonText: "Back",
      });
      setIsModalOpen(false);
    }
  };

  const handleClose = (event) => {
    event.preventDefault();
    setIsModalOpen(false);
  };

  const handleDelete = (event) => {
    let id2 = +event
    const { id } = params;
    let id1 = +id
    deleteAF(id1, id2)

  };

  return (
    <>
      <div className="border-2 my-10 mx-40 shadow-lg rounded-xl py-5 bg-white">
        <h3 className="font-noto font-bold text-3xl text-center mb-5 uppercase">
          {detail.data.name}
        </h3>
        <div className="w-[1000px] mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <img
              src={'https://zoofeed-api-gamma.vercel.app/' + detail.data.imageUrl}
              alt=""
              className="rounded-lg w-[500px] h-[350px] object-cover object-top"
            />
          </div>
          <div className="relative overflow-x-auto w-1/2 ml-9">
            <table className="w-full text-sm text-left text-gray-500">
              <tbody>
                <TableRow label={"Age"} data={`${detail.data.age} years`} />
                <TableRow label={"Sex"} data={detail.data.sex} />
                <TableRow label={"Class"} data={detail.classTypeData.name} />
                <TableRow label={"Habitat"} data={detail.habitatData.name} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-10 mx-40 px-10 py-5 shadow-lg rounded-xl border-2 bg-white">
        <h3 className="font-noto font-bold text-3xl text-center mb-5 uppercase">
          Animal food
        </h3>

        {userData.roleId === 2 && loginStatus ? (
          <>
            {!show ? (
              <>
                <div class="flex justify-end ">
                  <div
                    onClick={() => setShow(true)}
                    class="hover:scale-90 transition-all flex items-center bg-green-500 rounded-md shadow-md pd-2 mb-5"
                  >
                    <span class="font-noto font-bold text-m text-center mr-2 ml-2 uppercase text-white">
                      EDIT
                    </span>
                    <div>
                      <FaRegEdit
                        className="mr-2 mt-2 mb-2"
                        size={25}
                        color="#FFFF"
                      />
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div class="flex justify-end ">
                  <div
                    onClick={() => setShow(false)}
                    class="hover:scale-90 transition-all flex items-center bg-orange-500 rounded-md shadow-md pd-2 mb-5"
                  >
                    <div>
                      <FaReply
                        className="ml-2 mr-2 mt-2 mb-2"
                        size={25}
                        color="#FFFF"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        ) : (
          <></>
        )}

        <div className="container flex flex-wrap gap-5 justify-center">
          {foods.map((food) => {
            return (
              <>
                <div className=" bg-white rounded-md shadow-md">
                  <Link
                    to={`/foods/detail/${food.id}`}

                  >
                    <img
                      src={food.imageUrl}
                      className="hover:scale-95 transition-all h-40 w-40 object-cover rounded-t-md"
                      alt=""
                    />
                    <div className="text-center font-noto font-normal">
                      {food.name}

                    </div>
                  </Link>
                  {show ? (
                    <>
                      <div
                        onClick={() => handleDelete(food.id)}
                        className="hover:scale-90 transition-all flex items-center bg-red-500 rounded-md shadow-md pd-2 mb-5 ">
                        <FaWindowClose
                          className="ml-2 mb-1 mt-1"
                          size={25}
                          color="#FFF"
                        />
                        <span class="font-noto font-bold text-m text-center mr-2 ml-2 uppercase text-white">
                          DELETE
                        </span>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

                </div>

              </>
            );
          })}

          {show ? (
            <div
              onClick={() => setIsModalOpen(true)}
              className="hover:scale-90 transition-all bg-white pb-1 rounded-md shadow-md h-50 w-40 object-cover rounded-t-md flex items-center justify-center"
            >
              <FaPlus size={50} color="#03C988" />
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div>
        {/* Modal */}

        <div
          className={`${isModalOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
            } fixed inset-0 z-20 flex items-center justify-center transition-opacity duration-300`}
        >
          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div
                className="fixed inset-0 transition-opacity"
                aria-hidden="true"
              >
                <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
              </div>

              {/* Konten Modal */}
              <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <form>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                      >
                        Select Foods
                      </label>
                      <select
                        onChange={(e) =>
                          setForm({ ...form, foodId: e.target.value })
                        }
                        id="options"
                        className="border border-gray-300 rounded-md p-2 bg-white w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option selected className="text-center">
                          Choose Foods
                        </option>
                        {allFood.map((food) => {
                          return <option value={food.id}>{food.name}</option>;
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      onClick={handleSubmit}
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Simpan
                    </button>
                    <button
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={handleClose}
                    >
                      Batal
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailAnimalPage;
