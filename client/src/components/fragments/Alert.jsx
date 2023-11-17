import { CiSquareInfo } from "react-icons/ci";

const Alert = ({ message }) => {
    return (
        <div className="fixed z-50 left-3 bottom-3 space-x-3 flex items-center rounded-md bg-white border-2 h-10 px-3 py-7">
            <CiSquareInfo className="text-3xl text-red-400" />
            <p>{message}</p>
        </div>
    )
}

export default Alert