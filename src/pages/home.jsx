import Header from "../shared/header";
import "../styles/homePage.css";


export function Home() {
    return (
        <div >
            <div>
                <Header pageTitle="StuffFindr" />
            </div>
            <div className="homePageContainer">
                <h1>Welcome to Stuff<span>Findr</span></h1>
                <p>Your go-to solution for swiftly reuniting with your cherished belongings!
                    Seamlessly report lost items and connect with a finder when a match is found.
                    StuffFindr is here to make the journey of reclaiming lost items easy and all at your fingertips!</p>
                <div className="homePageBtns">
                    <button className="logInBtn" disabled>Log In</button>
                    <button className="signUpBtn" disabled>Sign Up</button>
                </div>
            </div>
        </div>
    );
}
