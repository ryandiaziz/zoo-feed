import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readData, deleteData } from '../../axios/foods'
import { FaPlus } from 'react-icons/fa'
import {
    Link, useNavigate
} from 'react-router-dom'

const ShowFoodPage = (props) => {
    const { userData } = props
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
        <>
            {
                userData.roleId === 2 ?
                    <Link to='/foods/create' className='flex fixed bottom-10 right-10 z-10 bg-[#03C988] rounded-full h-[55px] w-[55px]'>
                        <FaPlus size={35} color={'#fff'} className='m-auto' />
                    </Link>
                    :
                    <div></div>
            }
            <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
                <Card items={foods} link={link} userData={userData} />
            </div>
        </>
    )
}

export default ShowFoodPage