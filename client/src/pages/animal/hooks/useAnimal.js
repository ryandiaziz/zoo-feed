/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { fetchAnimals, searchAnimals } from '../../../redux/animalSlice'

const useAnimal = () => {
    const dispatch = useDispatch()
    const { animals, loading } = useSelector((state) => state.animal)
    const [search, setSearch] = useState('')
    const [isSearchActive, setIsSearchActive] = useState(false)

    const postPerPage = 8
    const [currentPage, setCurrentPage] = useState(1)
    const lastPostIndex = currentPage * postPerPage
    const firstPostPostIndex = lastPostIndex - postPerPage
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

    return {
        animals,
        loading,
        setSearch,
        setIsSearchActive,
        setCurrentPage,
        currentPosts,
        postPerPage,
        currentPage,
    }
}

export default useAnimal
