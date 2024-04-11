import { Link } from "react-router-dom"
import Header from "../shared/header";
import "../styles/itemDetails.css";
import placeHolder from "../assets/placeholder.svg"
import mapPin from "../assets/mapPin.svg"

export function ItemDetails() {
    return (
        <div>
            <Header pageTitle="Item Details"/>
            <div className='itemDetailsContainer'>
                
                <img className='itemImage' src={placeHolder} alt="Placeholder" />
            
                <h2 className='itemName'>Item Name</h2>
            
                <h3 className="description" > Description </h3>
                <p className="descriptionBox" > </p>  
                
                <p className='descriptionDetail' > Date Found <span className="descriptionValue"> DD/MM/YYYY</span></p>
                <p className='descriptionDetail'> Location
                    <span className="descriptionValue">Location
                        <span className="mapPin"><img src={mapPin} alt="map pin" /></span>
                    </span>
                
                </p>
                <p className='descriptionDetail'> Status <span className="lostFound descriptionValue">Lost</span>
                </p>

                <div className='claimButtonContainer'>
                    <button className='button'> Claim </button>
                </div>  
            </div>
        </div>
    )
}
