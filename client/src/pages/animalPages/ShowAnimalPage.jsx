/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { FaPlus } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

import Card from '../../components/Card'
import Loading from '../../components/Loading'
import MainContainer from '../../components/MainContainer'
import SearchContainer from '../../components/SearchContainer'
import Pagination from '../../components/Pagination'
import { searchAnimals, fetchAnimals } from '../../redux/animalSlice'

const ShowAnimalPage = () => {
    const postPerPage = 8
    const dispatch = useDispatch()
    const { animals, loading } = useSelector((state) => state.animal)
    const [search, setSearch] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [isSearchActive, setIsSearchActive] = useState(false)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostPostIndex = lastPostIndex - postPerPage;
    const currentPosts = animals.slice(firstPostPostIndex, lastPostIndex)

    useEffect(() => {
        if (!animals.length) dispatch(fetchAnimals())

        return () => {
            dispatch(fetchAnimals())
        }
    }, [])

    useEffect(() => {
        if (isSearchActive) {
            const timeout = setTimeout(() => {
                dispatch(searchAnimals(search))
            }, 500)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [search])

    return (
        <MainContainer>
            <SearchContainer
                bg={'bg-bird'}
                title={'Search your favorite animal'}
                onChange={(e) => setSearch(e.target.value)}
                isActive={setIsSearchActive}
            />
            {
                loading.fetch
                    ? <div className={`m-auto h-[50vh] sm:h-[40vh] flex justify-center items-center`}>
                        <Loading />
                    </div>
                    : <>
                        <div className="flex gap-2 sm:gap-4 justify-center flex-wrap p-3 md:p-10">
                            <Card items={currentPosts} />
                        </div>
                        <div className='flex justify-center'>
                            <Pagination
                                totalPosts={animals.length}
                                postPerPage={postPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                            />
                        </div>
                    </>
            }
        </MainContainer>
    )
}

export default ShowAnimalPage