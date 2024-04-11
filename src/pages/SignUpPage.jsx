import React from "react";
import Header from "../shared/header";


function SignupPage() {
    return (
        <div>
            <Header pageTitle="StuffFindr" />
            <h2>Sign up</h2>
            <input type='text' placeholder='Name' disabled />
            <input type='text' placeholder='Username' disabled />
            <input type='text' placeholder='Contact Number' disabled />
            <input type='text' placeholder='Email' disabled />
            <input type='password' placeholder='Password' disabled />
            <p>Already have an account? <a>Log in</a></p>
            <button disabled>Submit</button>
        </div>
    );
}

export default SignupPage;
