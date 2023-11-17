/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Card from '../../components/fragments/Card'
import Pagination from '../../components/Pagination'
import MainLayout from '../../components/layouts/MainLayout'
import CardsLayout from '../../components/layouts/CardsLayout'
import SearchContainer from '../../components/SearchContainer'
import CardSkeleton from '../../components/elements/cardskeleton'
import { fetchFoods, searchFoods } from '../../redux/foodSlice'

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
                    ? <CardsLayout>
                        {Array(4).fill(0).map((d, i) => (<CardSkeleton key={i} />))}
                    </CardsLayout>
                    : <>
                        <CardsLayout>
                            <Card items={currentPosts} search={search} />
                        </CardsLayout>
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