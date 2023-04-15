import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readData, deleteData } from '../../axios/foods'
import { MdAddCircle } from 'react-icons/md'
import {
    Link, useNavigate
} from 'react-router-dom'

const ShowFoodPage = () => {

    const navigata = useNavigate()
    const link = '/foods/detail';
    const [foods, setFoods] = useState([])

    useEffect(() => {
        readData(result => setFoods(result))
    }, [])

    const deleteHandler = (id) => {
        deleteData(id)
        navigata('/brands')
    }

    return (
        <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
            <Link to='/foods/create' className='fixed bottom-10 right-10 z-10'>
                <MdAddCircle size={55} color={'#03C988'} />
            </Link>
            <Card items={foods} link={link} />
        </div>
    )
}

export default ShowFoodPage