import React, { useState, useEffect } from 'react'
import Card from '../../components/Card'
import { readDataAnimal } from '../../axios/animal'
import { getLikeData } from '../../axios/animalUser'
import { FaPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Pagination from '../../components/Pagination'

const ShowAnimalPage = (props) => {
    const { loginStatus, userData } = props;
    const isAnimal = true;
    const [items, setItems] = useState([]);
    const [likeData, setLikeData] = useState([]);
    const [search, setSearch] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(8)

    const lastPostIndex = currentPage * postPerPage;
    const firstPostPostIndex = lastPostIndex - postPerPage;
    const currentPosts = items.slice(firstPostPostIndex, lastPostIndex);

    const getDatas = async () => {
        await readDataAnimal(result => setItems(result));
        getLikeData((result) => setLikeData(result));
    }

    useEffect(() => {
        getDatas()
    }, [])


    return (
        <>
            {/* {JSON.stringify(likeData)} */}
            {
                userData.roleId === 2 ?
                    <Link to='/animals/create' className='hover:scale-95 transition-all flex fixed bottom-10 right-10 z-10 bg-[#03C988] rounded-full h-[55px] w-[55px]'>
                        <FaPlus size={35} color={'#fff'} className='m-auto' />
                    </Link>
                    :
                    <div></div>
            }
            <div>
                <div className="container py-10 w-full">
                    <div className='text-center mb-5 font-noto font-semibold text-xl'>Find your favorit animal</div>
                    <div className='w-1/2 m-auto'>
                        <form className="flex items-center">
                            <label htmlFor="simple-search" className="sr-only">Search</label>
                            <div className="relative w-full">
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                                </div>
                                <input onChange={(e) => setSearch(e.target.value)} type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="flex gap-4 justify-center flex-wrap py-4 px-4">
                <Card
                    items={currentPosts}
                    isAnimal={isAnimal}
                    loginStatus={loginStatus}
                    userData={userData}
                    likeData={likeData}
                    search={search}
                />
            </div>
            <div className='flex justify-center'>
                <Pagination
                    totalPosts={items.length}
                    postPerPage={postPerPage}
                    setCurrentPage={setCurrentPage}
                    currentPage={currentPage}
                />
            </div>
        </>
    )
}

export default ShowAnimalPage