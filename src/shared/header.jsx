import React from "react";
import './header.css';

const Header = ({pageTitle}) => {
    return(
        <div className='header-container'>
            <div className='menu-icon'>&#9776;</div> 
            
            <div className='logo'>{!pageTitle ? 'StuffFindr' : pageTitle} </div>
        </div>

    )
}

export default Header;