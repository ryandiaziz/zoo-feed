const CardsLayout = ({ children }) => {
    return (
        <div className="flex gap-2 sm:gap-4 justify-center flex-wrap p-3 md:p-10">
            {children}
        </div>
    )
}

export default CardsLayout