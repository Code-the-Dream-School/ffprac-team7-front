import Header from "../shared/header";
import "../styles/homePage.css";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

const showToast = () => {
    toast("Hello World!", {})
};

export function Home() {

    return (
        <div >
            <div>
                <Header pageTitle="StuffFindr" />
            </div>
            <div className="homePageContainer">
                <h1>Welcome to Stuff<span>Findr</span></h1>
                <p className="about">Your go-to solution for swiftly reuniting with your cherished belongings!
                    Seamlessly report lost items and connect with a finder when a match is found.
                    StuffFindr is here to make the journey of reclaiming lost items easy and all at your fingertips!</p>
                <div className="homePageBtns">
                    <Link to="/LoginPage" ><button className="logInBtn">Log In</button></Link>
                    <Link to="/SignUpPage"><button className="signUpBtn">Sign Up</button></Link>
                </div>
                <button onClick={showToast}>Toast Alert</button>
            </div>
        </div>
    );
}
