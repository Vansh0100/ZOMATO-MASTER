import React, { useEffect, useState } from "react";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";
import {useParams} from "react-router-dom";
import { useDispatch } from "react-redux";
import {getSpecificRestaurant} from "../redux/reducers/restaurant/restaurant.action";
import { getImage } from "../redux/reducers/image/image.action";
import { getCart } from "../redux/reducers/cart/cart.action";
// components
import Navbar from "../Components/Navbar/Navbar";
import ImageGrid from "../Components/Restaurant/ImageGrid";
import InfoButton from "../Components/Restaurant/InfoButton";
import RestaurantInfo from "../Components/Restaurant/RestaurantInfo";
import Tabs from "../Components/Restaurant/Tabs";
import CartContainer from "../Components/Cart/CartContainer";
function RestaurantLayout({ children }) {
  const [restaurant, setRestaurant] = useState({
    images: [],
    name: "",
    cuisine: "",
    address: "",
    restaurantRating: 4.1,
    deliveryRating: 3.2,
  });
  const {id}=useParams();
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(getSpecificRestaurant(id)).then((data)=>{
      setRestaurant((prev)=>({
       ...prev,...data.payload.restaurant ,
      }))
      dispatch(getImage(data.payload.restaurant.photos)).then((data)=>{
        setRestaurant((prev)=>(
          {
            ...prev,
            images:data.payload.images,
          }
        ))
      })
    })
    dispatch(getCart());
  },[])
  return (
    <>
      <Navbar />
      <div className="container mx-auto px-4 mt-8 lg:px-20 pb-20">
        <ImageGrid images={restaurant.images} />
        <RestaurantInfo
          name={restaurant?.name}
          restaurantRating={restaurant?.restaurantRating || 0}
          deliveryRating={restaurant?.deliveryRating || 0}
          cuisine={restaurant?.cuisine}
          address={restaurant?.address}
        />
        <div className="my-4 flex flex-wrap gap-3 mx-auto">
          <InfoButton isActive={true}>
            <TiStarOutline /> Add Review
          </InfoButton>
          <InfoButton>
            <RiDirectionLine /> Direction
          </InfoButton>
          <InfoButton>
            <BiBookmarkPlus /> Bookmark
          </InfoButton>
          <InfoButton>
            <RiShareForwardLine /> Share
          </InfoButton>
        </div>
        <div className="my-10">
          <Tabs />
        </div>
        {children}
      </div>
      <CartContainer/>
    </>
  );
}

export default RestaurantLayout;