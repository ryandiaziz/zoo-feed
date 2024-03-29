import React from 'react'

const FormAuth = ({ children, action }) => {
    return (
        <form onSubmit={action} className="space-y-4 md:space-y-6">
            {children}
        </form>
    )
}

export default FormAuth