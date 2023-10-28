/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import { FaPlus } from 'react-icons/fa'
// import { Link } from 'react-router-dom'

import Card from '../../components/Card'
import Loading from '../../components/Loading'
import MainContainer from '../../components/MainContainer'
import { getLikeData } from '../../axios/animalUser'
import Pagination from '../../components/Pagination'
import { searchAnimals } from '../../redux/animalSlice'

const ShowAnimalPage = (props) => {
    const dispatch = useDispatch()
    const { isLogin, user } = useSelector((state) => state.auth)
    const { animals, loading } = useSelector((state) => state.animal)
    const isAnimal = true
    const [likeData, setLikeData] = useState([])
    const [search, setSearch] = useState('')
    const postPerPage = 8
    const [currentPage, setCurrentPage] = useState(1)
    const [click, setClick] = useState(false)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostPostIndex = lastPostIndex - postPerPage;
    const currentPosts = animals.slice(firstPostPostIndex, lastPostIndex)

    useEffect(() => {
        getLikeData((result) => setLikeData(result));
    }, [click])

    useEffect(() => {
        const timeout = setTimeout(() => {
            dispatch(searchAnimals(search))
            console.log("SEARCH")
        }, 500)
        return () => {
            console.log("CLEAR TIME")
            clearTimeout(timeout)
        }

    }, [search])

    return (
        <MainContainer>
            <section className="py-10 w-full h-[40vh] sm:h-[50vh] bg-bird bg-center flex flex-col items-center justify-center">
                <div className='w-full px-5 sm:px-10'>
                    <div className='text-center mb-5 text-white font-noto font-semibold text-xl'>Find your favorit animal</div>
                    <div className='max-w-xl m-auto'>
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input onChange={(e) => setSearch(e.target.value)} type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            {
                loading.fetch
                    ? <Loading height='h-screen' />
                    : <>
                        <div className="flex gap-2 sm:gap-4 justify-center flex-wrap p-3 md:p-10">
                            <Card
                                items={currentPosts}
                                isAnimal={isAnimal}
                                loginStatus={isLogin}
                                userData={user}
                                likeData={likeData}
                                search={search}
                                setClick={setClick}
                                click={click}
                            />
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