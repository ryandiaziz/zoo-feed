import React from 'react'
import { Link } from 'react-router-dom'
import { FaWindowClose } from 'react-icons/fa'

const Modal = ({ modalOpen, setModalOpen }) => {
    return (
        <div
            className={`${modalOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
                } fixed inset-0 z-20 flex items-center justify-center transition-opacity duration-300`}
        >
            <div className="fixed z-10 inset-0 overflow-y-auto">
                <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                    <div
                        className="fixed inset-0 transition-opacity"
                        aria-hidden="true"
                    >
                        <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                    </div>

                    {/* Konten Modal */}
                    <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                        <FaWindowClose
                            onClick={() => setModalOpen(false)}
                            className='absolute right-0 -top-1 cursor-pointer'
                            color='red'
                            size={25}
                        />
                        <form>
                            <div className='text-center font-noto font-semibold text-lg'>Who are you?</div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <Link to={'../signup/1'}>
                                    <button
                                        // onClick={handleSubmit}
                                        type="submit"
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Visitor
                                    </button>
                                </Link>
                                <Link to={'../signup/2'} >
                                    <button
                                        className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                    >
                                        Zookeeper
                                    </button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal