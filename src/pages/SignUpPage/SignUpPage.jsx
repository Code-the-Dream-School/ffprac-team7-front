import React, { useState } from "react";
import Header from "../../shared/header";
import "../../styles/SignUpPage.css";
import { Link } from "react-router-dom";
import ImageUpload from "./imageUpload";
import { useNavigate } from "react-router-dom";

function SignupPage({ setUserInfo }) {
  // State variables for form inputs
  const [username, setUsername] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();
  // State variables for input validity
  const [usernameValid, setUsernameValid] = useState(false);
  const [contactNumberValid, setContactNumberValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);

  // Function to handle input changes
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
    setUsernameValid(event.target.value.match(/^[a-zA-Z0-9]+$/));
  };

  const handleContactNumberChange = (event) => {
    setContactNumber(event.target.value);
    setContactNumberValid(event.target.value.trim() !== "");
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    setEmailValid(event.target.value.trim() !== "");
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordValid(
      event.target.value.length >= 8 &&
        /[a-z]/.test(event.target.value) &&
        /[A-Z]/.test(event.target.value) &&
        /[0-9]/.test(event.target.value)
    );
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (usernameValid && contactNumberValid && emailValid && passwordValid) {
      try {
        const response = await fetch(
          "http://localhost:8000/api/v1/users/signup",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, contactNumber, email, password }),
          }
        );

        if (response.ok) {
          const body = await response.json();
          console.log("Signup Successful");
          setUserInfo(body);
          navigateTo("/indexPage");
        } else {
          const errorMessage = await response.text();
          console.error("Signup Failed:", errorMessage);
        }
      } catch (error) {
        console.error("Signup Failed:", error.message);
      }
    }
  };

  return (
    <div>
      <Header pageTitle="StuffFindr" />
      <div className="signUpPageContainer">
        <h2>Sign up</h2>
        <ImageUpload />
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              className="inputUsername"
              type="text"
              placeholder="Username"
              value={username}
              onChange={handleUsernameChange}
            />
            {!usernameValid && (
              <p className="error">Username must be alphanumeric</p>
            )}
            <input
              className="inputNumber"
              type="text"
              placeholder="Contact Number"
              value={contactNumber}
              onChange={handleContactNumberChange}
            />
            {!contactNumberValid && (
              <p className="error">Please enter a contact number</p>
            )}
            <input
              className="inputEmail"
              type="text"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            {!emailValid && <p className="error">Please enter a valid email</p>}
            <input
              className="inputPassword"
              type="password"
              placeholder="Password"
              value={password}
              onChange={handlePasswordChange}
            />
            {!passwordValid && (
              <p className="error">
                Password must be at least 8 characters long and contain at least
                one digit, one lowercase letter, and one uppercase letter
              </p>
            )}
          </div>
          <p className="linkToLogIn">
            Already have an account? <Link to="/LoginPage">Log In</Link>
          </p>
          <div className="buttonContainer">
            <button
              className="submitBtn"
              type="submit"
              disabled={
                !usernameValid ||
                !contactNumberValid ||
                !emailValid ||
                !passwordValid
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
