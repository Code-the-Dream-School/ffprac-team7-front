import React from "react";
import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/LoginPage.css";

function LoginPage() {
    return(
        <div>
            <Header />
            <h3 className="greetingContainer" >Welcome to StuffFindr</h3>
            <div className="LoginPageContainer">
                <h2 className="LoginHeader">Log In</h2>
                
                <div className="userNameContainer">
                    <label className="fieldLabel" htmlFor="userName">Username</label>
                    <input className="inputField" type='text' id="username" disabled />
                </div>
                <div className="passwordContainer">
                    <label className="fieldLabel" htmlFor="password">Password</label>
                    <div className='passwordInputContainer'>
                        <input className="inputField" type='password' disabled/>
                        {/* password eye icon here? */}
                    </div>
                </div>
                <p className="signUpBlurb">Don't have an account? <Link to="/SignUpPage">Sign up</Link></p>
                <button className="logInBtn" disabled>Log In</button>
            </div>
        </div>
    );
}

export default LoginPage;