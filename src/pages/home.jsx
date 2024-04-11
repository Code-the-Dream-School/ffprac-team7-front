import Header from "../shared/header";
import "../styles/homePage.css";
import {toast} from 'react-toastify'


export function Home() {


  const notify  = () => toast("Hello world!")
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
                    <button onClick={notify} style={{width: "100%", fontSize: "2rem", marginTop: "1rem"}}>Make some <span style={{fontStyle: "italic"}}>Toast</span></button>
                </div>
            </div>
        </div>
    );
}
