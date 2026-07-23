import React, { useState } from "react";
import "../components/Navbar.css";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";
import { IoFastFoodOutline } from "react-icons/io5";
import CartSidebar from "./CartSidebar"

const Navbar = ({cart, setCart}) => {

let [show, setShow] = useState(false)

  return (
    <div className='mainContainer'>
      <nav>
        <div className='logo'>
          <div className='foodLogo'><IoFastFoodOutline /></div>
          <div>Indian Masala Restaurant</div>
      </div>
    <ul className='listItems'>
      <li> <Link to={'/'}>Home</Link> </li>
      <li> <Link to={'/about'}>About</Link> </li>
      <li> <Link to={'/contact'}>Contact</Link> </li>
      
      <div className="cartIcon" onClick={() => setShow(true)}>
  <IoMdCart />
  <span>{cart.length}</span>
</div>


    </ul>
    </nav>

{show && <CartSidebar show ={show} setShow={setShow} cart={cart} setCart={setCart}/>}

</div>

  )
}

export default Navbar;
