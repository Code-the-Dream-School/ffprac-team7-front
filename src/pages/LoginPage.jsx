import React from "react";

function LoginPage() {
    return(
        <div>
            <h2>Login</h2>
            <input type='text' placeholder='username' disabled />
            <input type='password' placeholder='password' disabled />
            <button disabled>Submit</button>
        </div>
    );
}

export default LoginPage;