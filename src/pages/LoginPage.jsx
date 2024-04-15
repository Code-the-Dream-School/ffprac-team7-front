import React from "react";
import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/LoginPage.css";

function LoginPage() {
    return(
        <div>
            <Header />
                <h2 className="greetingContainer" >Welcome to StuffFindr</h2>
            <div className="LoginPageContainer">
                <h2>Log In</h2>
                <div className="inputContainer">
                    <label className="fieldLabel">UserName</label>
                        <input className="inputField" type='text'  disabled />
                    <label className="fieldLabel">Password</label>
                        <input className="inputField" type='password'  disabled />
                </div>
                <p>Don't have an account? <Link to="/SignUpPage">Sign up</Link></p>
                <button className="logInBtn" disabled>Log In</button>
            </div>
        </div>
    );
}

export default LoginPage;