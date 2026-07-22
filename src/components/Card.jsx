import React from "react";
import "../components/Card.css";

const Card = ({ cardData }) => {
  return (
    <div className='card-container'>
    {cardData.map((item) => {
        return (
            <div className='card' key={item.id}>
            <img src={item.image} alt="" />
            <h1>{item.name}</h1>
            <p>blah blahb laljasf jdjfd</p>
            <p className='price'>Price: &#8377; {item.price}</p>
            <button>Add to Cart</button>
            </div>
        )
    })}
  </div>
  )
}

export default Card;