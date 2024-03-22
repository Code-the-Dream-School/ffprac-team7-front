import React from "react";

function SignupPage() {
    return(
        <div>
            <h2>Sign up</h2>
            <input type='text' placeholder='username' disabled />
            <input type='password' placeholder='password' disabled />
            <button disabled>Submit</button>
        </div>
    );
}

export default SignupPage;
