import React from "react";
import './header.css';
import HamburgerMenu from "../assets/HamburgerMenu";

const Header = ({pageTitle}) => {
    return(
        
        <div className='header-container'>
             <div><HamburgerMenu/> </div>
            <h1 className='logo'>{pageTitle || "StuffFindr"}</h1>
        </div> 
    )
}

export default Header;
