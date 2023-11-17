const Button = ({ children, className, onClick, isFull = false, isBorder = false, type = 'button', disabled = false }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${className} h-11 py-2 px-4 rounded-md font-bold transition-all duration-500 ${isBorder ? 'text-z-green border-z-green border-[1px]' : 'text-white bg-z-green'} ${isFull && 'w-full'}`}
        >
            {children}
        </button>
    )
}

export default Button