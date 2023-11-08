/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchFoods, searchFoods } from '../../redux/foodSlice'
import Card from '../../components/fragments/Card'
import Pagination from '../../components/Pagination'
import MainLayout from '../../components/layouts/MainLayout'
import SearchContainer from '../../components/SearchContainer'
import Loading from '../../components/elements/Loading'

const ShowFoodPage = () => {
    const postPerPage = 8
    const dispatch = useDispatch()
    const { foods, loading } = useSelector((state) => state.food)
    const [search, setSearch] = useState('')
    const [isSearchActive, setIsSearchActive] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const lastPostIndex = currentPage * postPerPage;
    const firstPostPostIndex = lastPostIndex - postPerPage;
    const currentPosts = foods.slice(firstPostPostIndex, lastPostIndex);

    useEffect(() => {
        if (!foods.length) dispatch(fetchFoods())

        return () => {
            dispatch(fetchFoods())
        }
    }, [])

    useEffect(() => {
        if (isSearchActive) {
            const timeout = setTimeout(() => {
                dispatch(searchFoods(search))
            }, 500)

            return () => {
                clearTimeout(timeout)
            }
        }

    }, [search])
    return (
        <MainLayout>
            <SearchContainer
                bg={'bg-food'}
                title={'Search animal food'}
                onChange={(e) => setSearch(e.target.value)}
                isActive={setIsSearchActive}
            />
            {
                loading.fetch
                    ? <div className={`m-auto h-[50vh] sm:h-[40vh] flex justify-center items-center`}>
                        <Loading />
                    </div>
                    : <>
                        <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
                            <Card
                                items={currentPosts}
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
                    </>
            }
        </MainLayout>
    )
}

export default ShowFoodPage