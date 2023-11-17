import { CiSquareRemove } from "react-icons/ci";

const AuthLayout = ({ children, onClick, text }) => {
    return (
        <section className='fixed top-0 z-50 font-noto w-full h-screen overflow-y-scroll flex justify-center items-center'>
            <div className="w-[30rem] h-min bg-white rounded-lg relative">
                <div onClick={onClick} className='absolute top-2 right-2 cursor-pointer'>
                    <CiSquareRemove className="text-gray-600 hover:text-red-600 text-3xl" />
                </div>
                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                        {text}
                    </h1>
                    {children}
                </div>
            </div>
        </section>
    )
}

export default AuthLayout