import React from "react";
import { Route } from "react-router-dom";

// layout
import RestaurantLayout from "../Layouts/Restaurant.layout";

function RestaurantHOC({ component: Component, ...rest }) {
  return (
    <>
      <Route
        {...rest}
        component={(props) => (
          <RestaurantLayout>
            <Component {...props} />
          </RestaurantLayout>
        )}
      />
    </>
  );
}

export default RestaurantHOC;