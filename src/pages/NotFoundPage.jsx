import React from 'react'
import NotFoundImage from "../assets/404.svg";
import { Link } from 'react-router-dom';
import "../styles/NotFoundPage.css";

// Do some research to see how to make react-router make all error pages navigate to the not found page.
const NotFoundPage = () => {
    return (
        <div className="notFoundContainer">
            <img
                src={NotFoundImage}
                alt="404 Page Not found"
                className="pageNotFoundImg"
            />
            <p className='oops'>Oops!</p>
            <p className="notWorking">Seems like the link is not working.</p>
            <Link to="/"><button className="backToHomeBtn">Back to home page</button></Link>
        </div>
    )
}

export default NotFoundPage

