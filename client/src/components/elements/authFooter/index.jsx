const AuthFooter = ({ onClick, name, text }) => {
    return (
        <p className="text-sm font-light text-gray-500">
            {text}
            <span onClick={onClick} className="cursor-pointer font-medium text-primary-600 hover:underline dark:text-primary-500"> {name}</span>
        </p>
    )
}

export default AuthFooter