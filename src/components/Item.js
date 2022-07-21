import React, { useState } from "react";

function Item({ name, category }) {
  
  const [inCart, setInCart] = useState("")
  function handleAddToCart() {
    setInCart(inCart => !inCart)
  }

  const itemClass = inCart ? "in-cart" : ""
  const itemButtonText = inCart ? "Remove from Cart" : "Add to Cart"
  const buttonColor = inCart ? "magenta" : "yellow"
  const buttonTextColor = inCart ? "white" : "black"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}style={{background:buttonColor,color:buttonTextColor}}>{itemButtonText}</button>
    </li>
  );
}

export default Item;
