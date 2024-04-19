import React, { useState } from "react";
import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/LoginPage.css";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


function LoginPage() {

    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const navigateTo = useNavigate();

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
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

        try {
            const response = await fetch('http://localhost:8000/api/v1/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (response.ok) {
                navigateTo('/Items');
            } else {
                const errorMessage = await response.text();
                if (errorMessage.includes('username')) {
                    toast("Username is incorrect", {});
                } else if (errorMessage.includes('password')) {
                    toast("Password is incorrect", {});
                } else {
                    toast("Username and password do not exist. Sign up and create an account.", {});
                }
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
                            className="inputField"
                            type={type}
                            name="password"
                            placeholder="Password"
                            value={password}
                            onChange={handlePasswordChange}
                            autoComplete="current-password"
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleLogin(e)
                                }
                            }}
                        />
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