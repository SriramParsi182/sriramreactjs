import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
const NonVeg=()=>{

  const nonvegproducts=useSelector(state=>state.products.nonveg)
  const dispatch=useDispatch();
  const items=nonvegproducts.map((product,index)=>
    <p><li key={index}>
      {product.name} -${product.price.toFixed(2)}&emsp;
      <button onClick={()=>dispatch(addToCart(product))}>add to cart</button>
    </li></p>
  )

    return (
      <>
            <h1>non-veg items</h1>
      {items} 
      </>
    )
  }
  
  export default NonVeg;