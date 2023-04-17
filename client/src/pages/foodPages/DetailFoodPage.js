import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { detailData } from '../../axios/foods';
import { readData } from '../../axios/foods';
import TableRow from '../animalPages/components/TableRow';

const DetailFoodPage = () => {
    const params = useParams();
    const [form, setForm] = useState({
        data: {},
    })
    // PROTOTYPE
    const [foods, setFoods] = useState([])

    const getAnimalDetail = () => {
        const { id } = params
        detailData(+id, result => {
            setForm({
                data: result.resultAF,

            })
        })
        // PROTOTYPE
        console.log(form);
        readData(result => setFoods(result))
    }

    useEffect(() => {
        getAnimalDetail()
    }, [])
    return (
        <>
            <div className='border-2 my-10 mx-40 shadow-lg rounded-xl py-5'>
                <h3 className='font-noto font-bold text-3xl text-center mb-5 uppercase'>{form.data.name}</h3>
                <div className='w-[1000px] mx-auto flex items-center justify-between'>
                    <div className='w-1/2'>
                        <img src={form.data.imageUrl} alt="" className='rounded-lg w-[500px] h-[350px] object-cover object-top' />
                    </div>
                    <div className="relative overflow-x-auto w-1/2 ml-9">
                        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                            <tbody>
                                <TableRow label={'Type'} data={form.data.type} />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div className='my-10 mx-40 px-10 py-5 shadow-lg rounded-xl border-2'>
                <h3 className='font-noto font-bold text-3xl text-center mb-5 uppercase'>Animal food</h3>
                <div className="container flex flex-wrap gap-4 justify-center">
                    {
                        foods.map(food => {
                            return (
                                <div className='bg-white pb-1 rounded-md shadow-md'>
                                    <img src={food.imageUrl} className="h-40 w-40 object-cover rounded-t-md" alt="" />
                                    <div className='text-center font-noto font-normal'>{food.name}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default DetailFoodPage