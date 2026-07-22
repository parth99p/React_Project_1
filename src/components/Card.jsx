import React from "react";
import "../components/Card.css";

const Card = ({ cardData, cart, setCart }) => {

let addToCart = (product)=> {
  let newCart = [...cart];

  let item  = newCart.find((i) => i.id === product.id)

  if (item) {
    item.qty++;
  } else {
    newCart.push({ ...product, qty: 1})
  }

  setCart(newCart)
}

  return (
    <div className='card-container'>
    {cardData.map((item) => {
        return (
            <div className='card' key={item.id}>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <p>blah blahb laljasf jdjfd</p>
            <p className='price'>Price: &#8377; {item.price}</p>
            <button onClick={()=>addToCart(item)}>Add to Cart</button>
            </div>
        )
    })}
  </div>
  )
}

export default Card;