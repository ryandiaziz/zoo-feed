import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readData } from '../../axios/food'
import { FaPlus } from 'react-icons/fa'
import {
    Link
} from 'react-router-dom'
import Pagination from '../../components/Pagination'
import MainContainer from '../../components/MainContainer'
import SearchContainer from '../../components/SearchContainer'

const ShowFoodPage = (props) => {
    const { userData } = props
    const link = '/foods/detail';
    const [foods, setFoods] = useState([])
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostPostIndex = lastPostIndex - postPerPage;
    const currentPosts = foods.slice(firstPostPostIndex, lastPostIndex);

    useEffect(() => {
        readData(result => setFoods(result))
    }, [])


    return (
        <MainContainer>
            <SearchContainer
                bg={'bg-food'}
                title={'Search animal food'}
                onChange={(e) => setSearch(e.target.value)}
            />
            <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
                <Card
                    items={currentPosts}
                    link={link}
                    userData={userData}
                    search={search}
                />
            </div>
            <div className='flex justify-center'>
                <Pagination
                    totalPosts={foods.length}
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </MainContainer>
    )
}

export default ShowFoodPage