import React from 'react'

const SearchContainer = ({ bg, title, onChange }) => {
    return (
        <section className={`py-10 w-full h-[40vh] sm:h-[50vh] bg-center flex flex-col items-center justify-center ${bg}`}>
            <div className='w-full px-5 sm:px-10'>
                <div className='text-center mb-5 text-white font-noto font-semibold text-xl'>{title}</div>
                <div className='max-w-xl m-auto'>
                    <form className="flex items-center">
                        <label htmlFor="simple-search" className="sr-only">Search</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
                            </div>
                            <input onChange={onChange} type="text" id="simple-search" className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required />
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default SearchContainer