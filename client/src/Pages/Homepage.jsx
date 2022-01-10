import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../Components/Delivery";
import Dining from "../Components/Dining";
import NightLife from "../Components/NightLife";
import Nutrition from "../Components/Nutrition";
function Homepage() {
  const { type } = useParams();
  console.log(type);
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
