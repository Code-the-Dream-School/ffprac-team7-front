import React from "react";
import Header from "../shared/header";
import "../styles/LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage() {
    return (
        <div >
            <div>
                <Header pageTitle="Landing Page" />
            </div>
            <div className="landingPageContainer">
                <h1>Welcome to Stuff<span>Findr</span></h1>
                <p>Your go-to solution for swiftly reuniting with your cherished belongings!
                    Seamlessly report lost items and connect with a finder when a match is found nearby.
                    StuffFindr is here to make the journey of reclaiming lost items hassle-free and all at your fingertips!</p>
                <div className="landingPageBtns">
                    <button className="logInBtn" disabled>Log In</button>
                    <button className="signUpBtn" disabled>Sign Up</button>
                </div>
                <Link to="/">Back to Home Page</Link>
            </div>
        </div>
    );
}

export default LandingPage;