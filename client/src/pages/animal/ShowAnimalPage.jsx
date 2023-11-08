/* eslint-disable react-hooks/exhaustive-deps */
import Card from '../../components/Card'
import Loading from '../../components/Loading'
import MainContainer from '../../components/MainContainer'
import SearchContainer from '../../components/SearchContainer'
import Pagination from '../../components/Pagination'
import useAnimal from './hooks/useAnimal'

const ShowAnimalPage = () => {
    const {
        animals,
        loading,
        currentPosts,
        setCurrentPage,
        setIsSearchActive,
        setSearch,
        postPerPage,
        currentPage
    } = useAnimal()

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