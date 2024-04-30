import React from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/HamburgerMenu.css"


const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);


  const toggleMenu = () => {
    console.log("menu called")
    setIsOpen(!isOpen);
  };

  return (
    <div className={`hamburger-menu ${isOpen ? 'close' : ''}`}>
      <div
        className= "hamburger-icon"
        onClick={toggleMenu}
      >
        {isOpen? <>&#x2715;</> : <>&#9776;</>}
        </div>
      <ul className={`list ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reportedItems">Reported Items</Link></li>
        <li><Link to="/reportNewItem">Report an Item</Link></li>
  
      </ul>
    </div>
  );
};

export default HamburgerMenu;
