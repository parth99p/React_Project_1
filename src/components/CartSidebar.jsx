import React, { useState } from "react";
import "../components/CartSidebar.css";
import { RxCross2 } from "react-icons/rx";
import { QRCodeSVG } from "qrcode.react";

const CartSidebar = ({show, setShow, cart, setCart}) => {

let [showQr, setShowQr ] = useState(false)

let total = cart.reduce(
  (acc, item) => acc + item.price * item.qty,
  0
);

let addQty = (index) => {
  let newCart = [...cart]
  newCart[index].qty++;
  setCart(newCart)
}

let removeQty = (index)=> {
  let newCart = [...cart]
  newCart[index].qty--;

  if(newCart[index].qty===0){
    newCart.splice(index ,1)
  }

  setCart(newCart)
}


  return (
    <div className= 'sidebar'>
      <button onClick={()=>setShow(!show)} className="closeBtn"><RxCross2 /></button>
      <h2>Your Cart</h2>
      {cart.map((item, index) => {
        return (
          <div className="cartItem" key={item.id}>
            <img src={item.image} alt="" />

            <div className="cartInfo">
              <p>{item.name}</p>
              <p>&#8377;{item.price}</p>
            </div>

            <div className="qtyButton">
             <button onClick={() => removeQty(index)}>-</button>
             <button>{item.qty}</button>
             <button onClick={() => addQty(index)}>+</button>
            </div>
          </div>
        );
      })}

<h3 className="total">Total: &#8377; {total}</h3>

<button
  className="orderBtn"
  onClick={() => setShowQr(true)}
>
  Place Order
</button>

{showQr && (
  <div
    className="qrBox"
    style={{ marginTop: "50px", marginLeft: "37px" }}
  >
    <h2 style={{ padding: "10px 20px" }}>Scan and Pay</h2>

    <QRCodeSVG
      value={"Parthpatil4999@oksbi"}
      size={200}
    />

    <h3 style={{ padding: "10px 20px" }}>
      Total Amount: ₹{total}
    </h3>
  </div>
)}

</div>
);
};

export default CartSidebar;
