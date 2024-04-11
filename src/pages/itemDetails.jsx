import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/itemDetails.css";
import placeHolder from "../assets/placeholder.svg"

export function ItemDetails() {
    return (
        <div>
            <Header pageTitle="Item Details"/>
            <div className='itemDetailsContainer'>
                <img className='itemImage' src={placeHolder} alt="Placeholder" />
            
                <h2 className='itemName'>Item Name</h2>
            
                <h3 className="description" > Description </h3>
                <p className="descriptionBox" > </p>  
                
                <p className='dateLine'> Date Found <span className="dateBox"> DD/MM/YYYY</span></p>
                
                <p className='locationLine'> Location <span className="locationBox">Location Name</span></p>
                
                <p className='statusLine'> Status <span className="lostFound">Lost</span>
</p>

                <div className='claimButtonContainer'>
                    <button className='button'> Claim </button>
                </div>  
            </div>
        </div>
    )
}

