import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData, detailData } from '../../axios/animal'
import InputText from './components/InputText'

const EditAnimalPage = () => {
    const [form, setForm] = useState({
        data: {},
        classTypeData: {},
        habitatData: {}
    })


    const navigation = useNavigate()
    const params = useParams()

    const getItemInfo = () => {
        const { id } = params
        detailData(+id, result => {
            setForm({
                data: result.resultAF,
                classTypeData: result.classTypeData[0],
                habitatData: result.habitatData[0]
            })
        })
    }

    useEffect(() => {
        getItemInfo()
    }, [])


    const submitHandler = () => {
        updateData(+params.id, form)
        navigation('/items')
    }

    return (
        <>
            <div className="px-[300px] my-5">
                <form action="">
                    <InputText label={'Name'} name={'name'} placeHolder={`Enter animal name`} value={form.data.name} />
                    {/* <InputText label={'Age'} name={'age'} placeHolder={'Enter animal age'} /> */}
                    <div className="mb-3">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Sex</label>
                        <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <div className="mb-4">
                            <img src={form.data.imageURl} className="img-thumbnail" alt="..." width='300px' />
                        </div>
                        <input
                            // onChange={(e) =>
                            //     setForm({ ...form, image: e.target.files[0] })
                            // }
                            // onChange={handleUploadChange}
                            className="form-control"
                            type="file"
                            id="formFile"
                        />
                    </div>
                    <div className="mb-3">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Class</label>
                        <select id="countries" className="bg-white shadow-md border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose Animal Class</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Habitat</label>
                        <select id="countries" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg shadow-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose Animal Habitat</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <button type="button" className="text-white items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2">Submit</button>
                </form>
            </div>
        </>
    )
}

export default EditAnimalPage