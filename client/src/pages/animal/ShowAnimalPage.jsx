/* eslint-disable react-hooks/exhaustive-deps */
import Card from '../../components/fragments/Card'
import Loading from '../../components/elements/Loading'
import MainLayout from '../../components/layouts/MainLayout'
import SearchContainer from '../../components/SearchContainer'
import Pagination from '../../components/Pagination'
import useAnimal from '../../hooks/useAnimal'

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
        <MainLayout>
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
        </MainLayout>
    )
}

export default ShowAnimalPage