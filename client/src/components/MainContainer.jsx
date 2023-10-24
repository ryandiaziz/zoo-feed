import React from 'react'

const MainContainer = ({ children }) => {
    return (
        <main className='max-w-screen-2xl mx-auto'>
            {children}
        </main>
    )
}

export default MainContainer