import React from "react";
import Header from "../../shared/header";
import "../../styles/SignUpPage.css";
import { Link } from "react-router-dom";
import ImageUpload from "./imageUpload";



function SignupPage() {
    return (
        <div>
            <Header pageTitle="StuffFindr" />
            <div className="signUpPageContainer">
                <h2>Sign up</h2>
                <ImageUpload />
                <div className="inputContainer">
                    <input className="inputName" type='text' placeholder='Name' disabled />
                    <input className="inputUsername" type='text' placeholder='Username' disabled />
                    <input className="inputNumber" type='text' placeholder='Contact Number' disabled />
                    <input className="inputEmail" type='text' placeholder='Email' disabled />
                    <input className="inputPassword" type='password' placeholder='Password' disabled />
                </div>
                <p className="linkToLogIn">Already have an account? <Link to="/LoginPage">Log In</Link></p>
                <button className="submitBtn" disabled>Submit</button>
            </div>
        </div>
    );
}

export default SignupPage;
