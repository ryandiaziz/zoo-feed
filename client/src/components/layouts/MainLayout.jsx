import React from 'react'

const MainLayout = ({ children }) => {
    return (
        <main className='max-w-screen-2xl mx-auto'>
            {children}
        </main>
    )
}

export default MainLayout