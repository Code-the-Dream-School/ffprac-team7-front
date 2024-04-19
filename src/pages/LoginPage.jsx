import React, { useState } from "react";
import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/LoginPage.css";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function validatePassword(password) {
    // We don't need to add this regex because we are not creating a password. Maybe turn this function into a vaildate password/username pair for enter. If true, redirect to items page.
    const valid = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#!$%^&*()_+])[A-Za-z\d@#$%^&*()_+]{8,}$/;
    return valid.test(password);
}
function LoginPage() {

    const [password, setPassword] = useState("");
    // username has not been used yet. Maybe can be used for the new function PasswordUsernamePair
    const [username, setUsername] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    // maybe can also create a isUsernameValid or isUsernamePasswordPairCorrect
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const navigateTo = useNavigate();


    // const [user, setUser] = useState(null);
    // const [token, setToken] = useState(null);

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

    const handleLogin = async (e) => {
        e.preventDefault();

        // Change to if validPasswordUsernamePair to be validated in order to log in.
        if (!validatePassword(password)) {
            setIsPasswordValid(false);
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                const data = await response.json();
                // setUser(data.user);
                // setToken(data.token);
                navigateTo('/Items');
            } else {
                toast("Login failed", {})

                // console.error('Login failed:', response.statusText);
            }
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <div>
            <Header />
            <p className="greetingContainer" >Welcome Back!</p>
            <div className="LoginPageContainer">
                <h2 className="LoginHeader">Log In</h2>

                <div className="userNameContainer">
                    <label className="fieldLabel" htmlFor="userName">Username</label>
                    <input
                        className="inputField"
                        type='text'
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
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
                        {/* May not need the below code or change to isPasswordUsernamePairCorrect. Below code is causing a rendering error. Each letter typed creates the error message to appear. Make it so the the error message only apears when the username/password pair are incorrect */}
                        {/* {!isPasswordValid && (
                            toast("Password must be at least 8 characters long and contain at least one capital letter, number, and symbol.", {})
                        )} */}
                        <span className="eye" onClick={handleToggle}>
                            <Icon className="eyeIcon" icon={icon} size={25} />
                        </span>
                    </div>
                </div>
                <p className="signUpBlurb">Don't have an account? <Link to="/SignUpPage">Sign up</Link></p>
                <button className="logInBtn" onClick={handleLogin}>Log In</button>
            </div>
        </div>
    );
}

export default LoginPage;