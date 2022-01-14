import React from "react";
import { Route } from "react-router-dom";

// layout
import CheckoutLayout from "../Layouts/Checkout.layout";

function CheckoutHoc({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <CheckoutLayout>
            <Component {...props} />
          </CheckoutLayout>
        )}
      />
    </>
  );
}

export default CheckoutHoc; 
