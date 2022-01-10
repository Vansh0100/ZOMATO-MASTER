import React from 'react'

// Importing Navbar Component
import Navbar from '../Components/Navbar/Navbar'

function DefaultLayout({children}) {
    return (
        <>
        <Navbar/>
        <div>{children}</div>
            
        </>
    )
}

export default DefaultLayout
