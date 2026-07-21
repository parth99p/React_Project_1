import React from "react";
import "../components/Navbar.css";
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='mainContainer'>
      <nav>
        <div className='logo'>
          <div className='foodLogo'>🍗</div>
          <div>Indian Masala Restaurant</div>
      </div>
    <ul className='listItems'>
      <li> <Link to={'/'}>Home</Link> </li>
      <li> <Link to={'/about'}>About</Link> </li>
      <li> <Link to={'/contact'}>Contact</Link> </li>
      <li>
        <Link to ={''}> <IoMdCart /></Link>
      
      </li>
    </ul>
    </nav>
</div>

   
  );
};

export default Navbar;
