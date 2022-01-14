import './App.css';
import React,{ useEffect } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Redirect,Route} from "react-router-dom"
// Importing HOC
import DefaultHoc from './HOC/default.hoc';
import RestaurantHOC from './HOC/Restaurant.hoc';
import CheckoutHoc from './HOC/Checkout.hoc';

// Importing Pages
import Homepage from './Pages/Homepage';
import RestaurantPage from './Pages/RestaurantPage';
import Overview from "./Components/Restaurant/Overview";
import OrderOnline from "./Components/Restaurant/OrderOnline";
import Reviews from './Components/Restaurant/Reviews/Review';
import Menu from './Components/Restaurant/Menu/Menu';
import Photos from './Components/Restaurant/Photos/Photos';
import CheckoutPage from './Pages/CheckoutPage';
import RedirectRestaurant from './Pages/Restaurant/Redirect';
import GoogleAuth from './Pages/GoogleAuth';
// redux
import {useDispatch} from "react-redux";
import {getMySelf} from "./redux/reducers/user/user.action"

function App() {
  const dispatch=useDispatch(); 
  useEffect(()=>{
    dispatch(getMySelf());
  },[localStorage])
  return (
    <>
    <Route path="/" exact>
        <Redirect to="/delivery" />
      </Route>
    <DefaultHoc path="/:type" exact  component={Homepage} />
    <DefaultHoc path="/google/:token" exact component={GoogleAuth}/>
      <Route path="/restaurant/:id" exact component={RedirectRestaurant} />
    {/* <RestaurantHOC path="/restaurant/:id"
        exact
        component={RestaurantPage}/> */}
        <RestaurantHOC
        path="/restaurant/:id/overview"
        exact
        component={Overview}
      />
      <RestaurantHOC
        path="/restaurant/:id/order-online"
        exact
        component={OrderOnline}
      />
      <RestaurantHOC
        path="/restaurant/:id/reviews"
        exact
        component={Reviews}
      />
      <RestaurantHOC
        path="/restaurant/:id/menu"
        exact
        component={Menu}
      />
      <RestaurantHOC
        path="/restaurant/:id/photos"
        exact
        component={Photos}
      />
      <CheckoutHoc path="/checkout/orders" exact component={CheckoutPage} />
    </>
  );
}

export default App;