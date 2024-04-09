import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/itemDetails.css";
import placeHolder from "../assets/placeholder.svg"

export function ItemDetails() {
    return (
        <div>
            <Header pageTitle="Item Details"/>
            <div className='itemDetailsContainer'>
                <img className='itemImage' src={placeHolder} />
            
                <h2 className='itemName'>Item Name</h2>
            
                <div className="descriptionContainer"> 
                    <h3 className="description" > Description </h3>
                    <p className="descriptionBox" > </p>  
                </div>
                
                <div className='dateContainer'>
                    <h3 className="date" > Date Found </h3>
                    <p className="dateBox"> DD/MM/YYYY</p>  
                </div>

                <div className='locationContainer'>
                    <h3 className="location" > Location </h3>
                    <p className="locationBox">Location</p>  
                </div>
                
                <div className='statusContainer'>
                    <h3 className="status" > Status </h3>
                    <p className="lostFound" > Lost </p>   
                </div>

                <div className='claimButtonContainer'>
                    <button className='button'> Claim </button>
                </div>

              
            </div>
        </div>
    )
}


