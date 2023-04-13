import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readData, deleteData } from '../../axios/brand'
import {
    Link, useNavigate
} from 'react-router-dom'

const ShowFoodPage = () => {
    const foods = [
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Jambu',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Rumput',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Daging',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Daging Rusa',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Sayur Kangkung',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
    ]
    const navigata = useNavigate()
    const link = '/foods/detail';
    const [brands, setBrands] = useState([])

    useEffect(() => {
        readData(result => setBrands(result))
    }, [])

    const deleteHandler = (id) => {
        deleteData(id)
        navigata('/brands')
    }

    return (
        <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
            <div className='bg-green-500 rounded-full w-10 h-10 flex fixed bottom-10 right-10'>
                <Link to='/animals/create' className='text-xl m-auto'>
                    ➕
                </Link>
            </div>
            <Card items={foods} link={link} />
        </div>
    )
}

export default ShowFoodPage