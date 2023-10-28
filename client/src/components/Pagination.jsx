import React from 'react'

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pages.push(i);
    }

    const prev = () => {
        if (currentPage === 1) return
        setCurrentPage(currentPage - 1)
    }

    const next = () => {
        if (currentPage === pages.length) return
        setCurrentPage(currentPage + 1)
    }

    return (
        <>

            <nav>
                <ul className="inline-flex items-center -space-x-px">
                    <li>
                        <div onClick={() => prev()} className="cursor-pointer block px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                            <span className="sr-only">Previous</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        </div>
                    </li>
                    {
                        pages.map((page, i) => {
                            return (
                                <li key={i}>
                                    <div onClick={() => setCurrentPage(page)} className={`${page === currentPage ? 'bg-z-green text-white' : ''} cursor-pointer px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700`}>{page}</div>
                                </li>
                            )
                        })
                    }
                    <li>
                        <div onClick={() => next()} className="cursor-pointer block px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                            <span className="sr-only">Next</span>
                            <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd"></path></svg>
                        </div>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Pagination