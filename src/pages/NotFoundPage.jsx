import React from 'react'
import NotFoundImage from "../assets/404.svg";
import { Link } from 'react-router-dom';
// Do some research to see how to make react-router make all error pages navigate to the not found page.
const NotFoundPage = () => {
    return (
        <div className="notFoundContainer">
            <img
                src={NotFoundImage}
                alt="404 Page Not found"
                className="pageNotFoundImg"
            />
            <p>Oops!... Page Not Found.</p>
            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default NotFoundPage

