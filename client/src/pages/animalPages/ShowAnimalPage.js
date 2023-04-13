import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readData, deleteData } from '../../axios/animal'
import { MdAddCircle } from 'react-icons/md'
import {
    Link, useNavigate
} from 'react-router-dom'

const ShowAnimalPage = () => {
    const isAnimal = true;
    const animals = [
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Kodok',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Buaya',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Cicak',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Cicak',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
        {
            image: 'https://dummyimage.com/600x400/ffffff/000000.png&text=image',
            name: 'Cicak',
            ket: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quasi suscipit unde quaerat id consequuntur pariatur temporibus officia nesciunt officiis?'
        },
    ]
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
        <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
            <Link to='/animals/create' className='fixed bottom-10 right-10'>
                <MdAddCircle size={55} color={'#03C988'} />
            </Link>
            <Card items={items} isAnimal={isAnimal} />
        </div>
    )
}

export default ShowAnimalPage