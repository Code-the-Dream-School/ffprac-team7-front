import React from "react";
import './header.css';
import HamburgerMenu from "./HamburgerMenu";

const Header = ({pageTitle}) => {
    return(
        
        <div className='header-container'>
            <HamburgerMenu/>
            <h1 className='logo'>{pageTitle || "StuffFindr"}</h1>
        </div> 
    )
}

export default Header;
