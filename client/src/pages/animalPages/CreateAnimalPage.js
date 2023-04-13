import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createData } from "../../axios/item";

const CreateAnimalPage = () => {
    const [image, setImage] = useState("https://fakeimg.pl/350x200/");
    // const [saveImage, setSaveImage] = useState(null);

    function handleUploadChange(e) {
        let uploaded = e.target.files[0];
        // form.imageSend = new FormData();
        setForm({ imageSend: uploaded })
        // form.imageSend.append("image", uploaded);
        setImage(URL.createObjectURL(uploaded));
        // setForm({ imageSend: uploaded });
        // setSaveImage(uploaded);
    }

    // function handleSave() {
    //     if (saveImage) {
    //         // save image to backend
    //         let formData = new FormData();
    //         formData.append("photo", saveImage);

    //         fetch("http://localhost:3000/api/items/create", {
    //             method: "POST",
    //             body: formData,
    //         })
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 window.location.href = data.image;
    //             });
    //     } else {
    //         alert("Upload gambar dulu");
    //     }
    // }
    // ~~~~~~~~~~~~~~~~~~~~~
    const [form, setForm] = useState({
        name: "",
        price: 0,
        category: "",
        imageSend: null,
        userId: 0,
        brandId: 0,
    });

    const navigation = useNavigate();

    const submitHandler = () => {
        console.log(form);
        // createData(form);
        // navigation('/items')
    };
    return (
        <>
            <div className="px-[300px]">
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name" />
                </div>
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Age</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name" />
                </div>
                <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Sex</label>
                <div class="relative mt-2 rounded-md shadow-sm">
                    <input type="text" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="Name" />
                </div>
                <div className="my-4">
                    <div className="mb-4">
                        <img src={image} className="img-thumbnail" alt="..." />
                    </div>
                    <label htmlFor="formFile" className="form-label">
                        Upload image here
                    </label>
                    <input
                        // onChange={(e) =>
                        //     setForm({ ...form, image: e.target.files[0] })
                        // }
                        onChange={handleUploadChange}
                        className="form-control"
                        type="file"
                        id="formFile"
                    />
                </div>
                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Class</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <div>
                    <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>
                    <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                        <option selected>Choose Habitat</option>
                        <option value="US">United States</option>
                        <option value="CA">Canada</option>
                        <option value="FR">France</option>
                        <option value="DE">Germany</option>
                    </select>
                </div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button>
            </div>
        </>
    );
};

export default CreateAnimalPage;
