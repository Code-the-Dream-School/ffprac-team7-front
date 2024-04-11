import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/HamburgerMenu.css"

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    console.log("menu called")
    setIsOpen(!isOpen);
  };

  return (
    <div className="hamburger-menu">
      <div
        className= "hamburger-icon"
        onClick={toggleMenu}
      >
       &#9776; </div>

      <ul className={`list ${isOpen ? 'open' : ''}`} >
        <li><Link to="/">Home</Link></li>
        <li><Link to="/reportedItems">Reported Items</Link></li>
        <li><Link to="/reportNewItem">Report an Item</Link></li>
      </ul>
    </div>
  );
};

export default HamburgerMenu;
