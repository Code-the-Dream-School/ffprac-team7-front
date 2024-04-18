import React, { useState } from "react";
import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/LoginPage.css";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';

function validatePassword(password) {
    const valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%^&*()_+])[A-Za-z\d@#$%^&*()_+]{8,}$/;
    return valid.test(password);
}
function LoginPage() {

    const [password, setPassword] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const [isPasswordValid, setIsPasswordValid] = useState(true);

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        setIsPasswordValid(validatePassword(newPassword));
    };

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text')
        } else {
            setIcon(eyeOff)
            setType('password')
        }
    }

    return (
        <div>
            <Header />
            <p className="greetingContainer" >Welcome Back!</p>
            <div className="LoginPageContainer">
                <h2 className="LoginHeader">Log In</h2>

                <div className="userNameContainer">
                    <label className="fieldLabel" htmlFor="userName">Username</label>
                    <input className="inputField" type='text' id="username" disabled />
                </div>
                <div className="passwordContainer">
                    <label className="fieldLabel" htmlFor="password">Password</label>
                    <div className='passwordInputContainer'>
                        <input
                            className={`inputField ${isPasswordValid ? '' : 'invalid'}`}
                            type={type}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            autoComplete="current-password"
                        />

                        {/* The below error message should be executed in react toastify instead */}
                        {!isPasswordValid && (
                            <p className="passwordError">Password must contain at least one capital and lowercase letter, one number, one symbol, and must be at least 8 characters long.</p>
                        )}
                        <span className="eye" onClick={handleToggle}>
                            <Icon className="eyeIcon" icon={icon} size={25} />
                        </span>
                    </div>
                </div>
                <p className="signUpBlurb">Don't have an account? <Link to="/SignUpPage">Sign up</Link></p>
                <button className="logInBtn" disabled>Log In</button>
            </div>
        </div>
    );
}

export default LoginPage;