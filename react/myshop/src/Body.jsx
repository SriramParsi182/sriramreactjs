import React from "react"
import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Veg from "./Veg";
import NonVeg from "./NonVeg";
import Cart from "./Cart";
import OrderHistory from './OrderHistory';
const Body=()=>{

 


    return (
      <>
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/Veg" element={<Veg />} ></Route>
            <Route path="/NonVeg" element={<NonVeg />} ></Route>
            <Route path="/Cart" element={<Cart />} ></Route>
            <Route path="/OrderHistory" element={<OrderHistory />} ></Route>
        </Routes>
      </>
    )
  }
  
  export default Body;