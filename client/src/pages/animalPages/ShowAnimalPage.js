import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readData, deleteData } from '../../axios/animal'
import { FaPlus } from 'react-icons/fa'
import {
    Link, useNavigate
} from 'react-router-dom'

const ShowAnimalPage = (props) => {
    const { loginStatus } = props
    const isAnimal = true;
    const navigata = useNavigate()
    const [items, setItems] = useState([])

    useEffect(() => {
        readData(result => setItems(result))
    }, [])

    const deleteHandler = (id) => {
        deleteData(id)
        navigata('/items')
    }

    return (
        <>
            <Link to='/animals/create' className='hover:scale-95 transition-all flex fixed bottom-10 right-10 z-10 bg-[#03C988] rounded-full h-[55px] w-[55px]'>
                <FaPlus size={35} color={'#fff'} className='m-auto' />
            </Link>
            <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
                <Card items={items} isAnimal={isAnimal} loginStatus={loginStatus} />
            </div>
        </>
    )
}

export default ShowAnimalPage