import React from "react";
import "../components/CartSidebar.css";
import { RxCross2 } from "react-icons/rx";

const CartSidebar = ({show, setShow}) => {
  return (
    <div className= 'sidebar'>
      <button onClick={()=>setShow(!show)} className="closeBtn"><RxCross2 /></button>
      <h2>Your Cart</h2>
      <div className= 'cartItem'>
        <img src= "" alt=""/>

<div className="cartInfo">
  <p>Item Name</p>
  <p>Item Price</p>
</div>

<div className="qtyButton">
<button>-</button>
<button>1</button>
<button>+</button>
</div>
</div>
    </div>
  );
};

export default CartSidebar;
