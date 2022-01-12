import React,{useEffect} from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux";

// Redux Actions
import {getRestaurant} from "../redux/reducers/restaurant/restaurant.action"

import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";
function Homepage() {
  const { type } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRestaurant());
  }, []);

  return (
    <>
    <div className="my-5">{type === "delivery" && <Delivery />}
    {type === "dining" && <Dining />}
        {type === "night" && <NightLife />}
        {type === "nutrition" && <Nutrition />}</div>
        </>
  )
}

export default Homepage;
