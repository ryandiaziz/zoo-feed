/* eslint-disable react-hooks/exhaustive-deps */
import CardSkeleton from '../../components/elements/cardskeleton'
import Card from '../../components/fragments/Card'
import SearchContainer from '../../components/SearchContainer'
import MainLayout from '../../components/layouts/MainLayout'
import CardsLayout from '../../components/layouts/CardsLayout'
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
                    ? <CardsLayout>
                        {Array(4).fill(0).map((d, i) => (<CardSkeleton key={i} />))}
                    </CardsLayout>
                    : <>
                        <CardsLayout>
                            <Card items={currentPosts} />
                        </CardsLayout>
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