import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { updateData, detailData } from '../../axios/item'

const EditItemPage = () => {
    const [form, setForm] = useState({
        name: "",
        price: 0,
        category: "",
        userId: 0,
        brandId: 0
    })

    const navigation = useNavigate()
    const params = useParams()

    const getItemInfo = () => {
        const { id } = params
        detailData(+id, result => {
            setForm({
                name: result.name,
                price: +result.price,
                category: result.category,
                userId: +result.userId,
                brandId: +result.brandId
            })
            console.log(result)
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
            <div className="row my-3">
                <div className="w-100 text-center">
                    <h5>Edit Items</h5>
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
                        <label>Price: </label>
                        <input
                            value={form.price}
                            onChange={(e) => setForm({ ...form, price: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>Category: </label>
                        <input
                            value={form.category}
                            onChange={(e) => setForm({ ...form, category: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>userId: </label>
                        <input
                            value={form.userId}
                            onChange={(e) => setForm({ ...form, userId: e.target.value })}
                            type="text"
                            className="form-control"></input>
                    </div>
                    <div className="mb-3">
                        <label>brandId: </label>
                        <input
                            value={form.brandId}
                            onChange={(e) => setForm({ ...form, brandId: e.target.value })}
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

export default EditItemPage