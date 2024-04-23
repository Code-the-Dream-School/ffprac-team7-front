import React from 'react'
import NotFoundImage from "../assets/404.svg";
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <div className="notFoundContainer">
            <img
                src={NotFoundImage}
                alt="404 Page Not found"
                className="pageNotFoundImg"
            />
            <Link to="/">Back to Homepage</Link>
        </div>
    )
}

export default NotFoundPage

