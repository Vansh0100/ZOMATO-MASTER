import React from 'react'
import {Route} from "react-router-dom"
// Importing Layouts
import DefaultLayout from '../Layouts/default.layout'

function DefaultHoc({component:Component,...rest}) {
    return (
        <> <Route
        {...rest}
        component={(props) => (
          <DefaultLayout>
            <Component {...props} />
          </DefaultLayout>
        )}
      />
      </>
)
}

export default DefaultHoc
