import React from 'react'

// Importing Navbar Component
import Navbar from '../Components/Navbar/Navbar'
import Foodtab from '../Components/Foodtab'
function DefaultLayout({children}) {
    return (
        <>
        <Navbar/>
        <Foodtab/>
        <div className="container mx-auto px-4 lg:px-20">{children}</div>
            
        </>
    )
}

export default DefaultLayout
