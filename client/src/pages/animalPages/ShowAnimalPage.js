import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readDataAnimal, deleteData } from '../../axios/animal'
import { FaPlus } from 'react-icons/fa'
import {
    Link, useNavigate
} from 'react-router-dom'
import Search from '../../components/Search'

const ShowAnimalPage = (props) => {
    const { loginStatus } = props
    const isAnimal = true;
    const navigata = useNavigate()
    const [items, setItems] = useState([])

    const getDatas = async () => {
        await readDataAnimal(result => setItems(result));
    }

    useEffect(() => {
        getDatas()
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
            <Search />
            <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
                <Card items={items} isAnimal={isAnimal} loginStatus={loginStatus} />
            </div>
        </>
    )
}

export default ShowAnimalPage