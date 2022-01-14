import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import RestaurantCard from "../RestaurantCard";

// Component
import DeliveryCarousel from "./DeliveryCarousel";

function Delivery() {
  const [restaurantList, setRestaurantList] = useState([]);
  const reduxState = useSelector((store) => store.restaurant.restaurants);
  useEffect(() => {
    reduxState.restaurants && setRestaurantList(reduxState.restaurants);
  }, [reduxState.restaurants]);
  return (
    <>
      <DeliveryCarousel />
      <h1 className="text-xl mt-4 mb-2 md:mt-8 md:text-3xl md:font-semibold">
        Delivery Restaurants in GONDA(U.P)
      </h1>
      <div className="flex justify-between flex-wrap mt-5">
        {restaurantList.map((restaurant) => (
          <RestaurantCard {...restaurant} key={restaurant._id} />
        ))}
      </div>
    </>
  );
}

export default Delivery;
