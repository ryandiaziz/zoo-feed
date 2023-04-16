import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { detailData } from "../../axios/animal";
import { readData } from "../../axios/foods";
import TableRow from "./components/TableRow";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const DetailAnimalPage = () => {
  const params = useParams();
  const [form, setForm] = useState({
    data: {},
    classTypeData: {},
    habitatData: {},
  });

  const [foods, setFoods] = useState([]);
  const [allFood, setAllFood] = useState([])

  const getAnimalDetail = () => {
    const { id } = params;
    detailData(+id, (result) => {
      setForm({
        data: result.resultAF,
        classTypeData: result.classTypeData[0],
        habitatData: result.habitatData[0],
      });
      setFoods(result.resultAF.foods);
    });
    readData((result)=> setAllFood(result))
  };


  useEffect(() => {
    getAnimalDetail();
  }, []);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lakukan aksi yang diinginkan setelah submit form
    console.log(`Nama: ${name}`);
    // Tutup modal
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="border-2 my-10 mx-40 shadow-lg rounded-xl py-5">
        <h3 className="font-noto font-bold text-3xl text-center mb-5 uppercase">
          {form.data.name}
        </h3>
        <div className="w-[1000px] mx-auto flex items-center justify-between">
          <div className="w-1/2">
            <img
              src={form.data.imageUrl}
              alt=""
              className="rounded-lg w-[500px] h-[350px] object-cover object-top"
            />
          </div>
          <div class="relative overflow-x-auto w-1/2 ml-9">
            <table class="w-full text-sm text-left text-gray-500">
              <tbody>
                <TableRow label={"Age"} data={`${form.data.age} years`} />
                <TableRow label={"Sex"} data={form.data.sex} />
                <TableRow label={"Class"} data={form.classTypeData.name} />
                <TableRow label={"Habitat"} data={form.habitatData.name} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className="my-10 mx-40 px-10 py-5 shadow-lg rounded-xl border-2">
        <h3 className="font-noto font-bold text-3xl text-center mb-5 uppercase">
          Animal food
        </h3>
        <div className="container flex flex-wrap gap-4 justify-center">
          {foods.map((food) => {
            return (
              <Link
                to={`/foods/detail/${food.id}`}
                className="hover:scale-90 transition-all bg-white pb-1 rounded-md shadow-md"
              >
                <img
                  src={food.imageUrl}
                  className="h-40 w-40 object-cover rounded-t-md"
                  alt=""
                />
                <div className="text-center font-noto font-normal">
                  {food.name}
                </div>
              </Link>
            );
          })}
          <div
            onClick={() => setIsModalOpen(true)}
            className="hover:scale-90 transition-all bg-white pb-1 rounded-md shadow-md h-50 w-40 object-cover rounded-t-md flex items-center justify-center"
          >
            <FaPlus size={50} color="#03C988" />
          </div>
        </div>
      </div>

      <div>
        {/* Modal */}

        <div
          className={`${
            isModalOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          } fixed inset-0 z-10 flex items-center justify-center transition-opacity duration-300`}
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
                <form onSubmit={handleSubmit}>
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="mb-4">
                      <label
                        className="block text-gray-700 font-bold mb-2"
                        htmlFor="name"
                      >
                        Select Foods
                      </label>
                      <select
                        // onClick={(e) =>
                        //   setForm({ ...form, foodId: e.target.value })
                        // }
                        id="countries"
                        className="border border-gray-300 rounded-md p-2 pl-8 bg-white w-full appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        {allFood.map((food) => {
                            return (
                              <>
                                <option value={food.id} style={{backgroundImage: `${food.imageUrl}`}}>
                                  {food.name}
                                </option>
                              </>
                            );
                        })}
                      </select>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button
                      type="submit"
                      className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                    >
                      Simpan
                    </button>
                    <button
                      className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                      onClick={() => setIsModalOpen(false)}
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
