import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData, detailData } from '../../axios/brand'

const EditBrandPage = () => {
    const [form, setForm] = useState({
        name: "",
        type: ""
    })

    const navigation = useNavigate()
    const params = useParams()

    const getBrandInfo = () => {
        const { id } = params
        detailData(+id, result => {
            setForm({
                name: result.name,
                type: result.type
            })
            console.log(result)
        })
    }

    useEffect(() => {
        getBrandInfo()
    }, [])


    const submitHandler = () => {
        updateData(+params.id, form)
        navigation('/brands')
    }

    return (
        <>
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h5>Edit Brands</h5>
                </div>
                <div className="w-50 mx-auto">
                    <hr />
                    <div className="mb-3">
                        <label>Name: </label>
                        <input
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>Type: </label>
                        <input
                            value={form.type}
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

export default EditBrandPage