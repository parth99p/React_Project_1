import React from "react";
import "../components/CartSidebar.css";
import { RxCross2 } from "react-icons/rx";

const CartSidebar = ({show, setShow, cart, setCart}) => {
  return (
    <div className= 'sidebar'>
      <button onClick={()=>setShow(!show)} className="closeBtn"><RxCross2 /></button>
      <h2>Your Cart</h2>
      {cart.map((item, index) => {
        return (
          <div className="cartItem">
            <img src={item.image} alt="" />

            <div className="cartInfo">
              <p>{item.name}</p>
              <p>&#8377;{item.price}</p>
            </div>

            <div className="qtyButton">
              <button>-</button>
              <button>1</button>
              <button>+</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CartSidebar;
