import React from 'react'
import {Routes,Route} from "react-router-dom"
// Importing Layouts
import DefaultLayout from '../Layouts/default.layout'

function DefaultHoc({component:Component,path,...rest}) {
    return (
        <>
            <Routes>
                <Route path={path} {...rest} element={<DefaultLayout>
                        <Component />
                    </DefaultLayout>} />
            </Routes>
        </>
    )
}

export default DefaultHoc
