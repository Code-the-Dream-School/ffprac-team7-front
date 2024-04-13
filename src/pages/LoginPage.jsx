import React from "react";
import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/LoginPage.css";

function LoginPage() {
    return(
        <div>
            <Header />
            <div className="LoginPageContainer">
                <h2>Welcome to StuffFindr</h2>
                <input type='text' placeholder='username' disabled />
                <input type='password' placeholder='password' disabled />
                <button disabled>Submit</button>
            </div>
        </div>
    );
}

export default LoginPage;