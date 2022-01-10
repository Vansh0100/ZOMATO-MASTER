import React from "react";
import { useParams } from "react-router-dom";
import Delivery from "../Components/Delivery";
function Homepage() {
  const {type}=useParams();
  return (
    <>
    <div className="my-5">{type === "delivery" && <Delivery />}</div>
      </>
  )
}

export default Homepage;
