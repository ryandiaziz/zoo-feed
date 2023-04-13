import React, { useState, useEffect } from 'react'
import readData from '../axios/home'
import { deleteData } from '../axios/item'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
    const navigate = useNavigate()
    const [items, setItems] = useState([])

    useEffect(() => {
        readData(result => setItems(result))
    }, [])
    const deleteHandler = (id) => {
        deleteData(id)
        navigate('/')
    }
    return (
        <>
            <div class="container my-4">
                {
                    items.length > 0 ?
                        <div class="row">
                            {
                                items.map(item => {
                                    return (
                                        <div className="card m-2" style={{ width: '18rem' }}>
                                            <img src={item.image} className="object-fit-cover border rounded my-2" alt="..." height="200" />
                                            <div className="card-body">
                                                <h5 className="card-title">
                                                    {item.name}
                                                </h5>
                                            </div>
                                            <ul className="list-group list-group-flush">
                                                <li className="list-group-item">User : {item.user.name}
                                                </li>
                                                <li className="list-group-item">Price : {item.price}
                                                </li>
                                                <li className="list-group-item">Category : {item.category}
                                                </li>
                                            </ul>
                                            <div className="card-body" role="group" aria-label="Basic mixed styles example">
                                                <div className="btn-group m2">
                                                    <button onClick={() => deleteHandler(item.id)} className="btn btn-sm btn-danger">Delete</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div> : <p className='text-center'>NO DATA</p>
                }
            </div>
        </>

    )
}

export default HomePage