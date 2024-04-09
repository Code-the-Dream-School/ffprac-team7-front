import React from "react";
import './header.css';

const Header = ({pageTitle}) => {
    return(
        <div className='header-container'>
            <div className='menu-icon'>&#9776;</div> 
            <h1 className='logo'>{pageTitle || "StuffFindr"}</h1>
        </div>
    )
}

export default Header;
