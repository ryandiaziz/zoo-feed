import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createData } from '../../axios/foods'

const CreateBrandPage = () => {
    const [form, setForm] = useState({
        name: "",
        type: ""
    })

    const navigation = useNavigate()

    const submitHandler = () => {
        createData(form)
        navigation('/brands')
    }
    return (
        <>
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h5>Create Brand</h5>
                </div>
                <div className="w-50 mx-auto">
                    <hr />
                    <div className="mb-3">
                        <label>Name: </label>
                        <input
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>Type: </label>
                        <input
                            onChange={(e) => setForm({ ...form, type: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <button onClick={() => submitHandler()} className="btn btn-block btn-primary"> Submit</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateBrandPage