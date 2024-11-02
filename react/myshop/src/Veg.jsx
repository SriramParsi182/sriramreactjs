import React, { useState } from "react"
import {useDispatch, useSelector} from 'react-redux'
import { addToCart } from "./store"

const Veg=()=>{

  const vegproducts=useSelector(state=>state.products.veg)
  const dispatch=useDispatch();
  const items=vegproducts.map((product,index)=>
    <p><li key={index}>
      {product.name} - ${product.price.toFixed(2)}&emsp;
      <button onClick={()=>dispatch(addToCart(product))}>add to cart</button>
    </li></p>
  )

    return (
      <>
      <h1>veg items</h1>
      
      {items}
      
     
      </>
    )
  }
  export default Veg;