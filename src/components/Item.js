import React, { useState } from "react";

function Item({ name, category }) {

  const[addToCart, setAddToCart] = useState(false)

  function handleCart(){
    setAddToCart((addToCart) => !addToCart)
  }

  const cartText = addToCart ? "Add to Cart" : "Remove From Cart"
  const btnClass = addToCart ? "remove" : "add"
  const liClass = addToCart ? "in-cart" : ""
  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={btnClass} onClick={handleCart}>{cartText}</button>
    </li>
  );
}

export default Item;