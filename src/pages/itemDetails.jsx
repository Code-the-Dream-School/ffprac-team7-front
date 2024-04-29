import Header from "../shared/header";
import "../styles/itemDetails.css";
import placeHolder from "../assets/placeholder.svg"
import mapPin from "../assets/mapPin.svg"
import { useEffect } from "react";
import { useState } from "react";
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom";

const theToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjJkNzAzZWJhMzJmNDFjNzg5NTIwMWIiLCJ1c2VybmFtZSI6IlRyZWVTdGFuZCIsImlhdCI6MTcxNDI2OTgwMCwiZXhwIjoxNzE2ODYxODAwfQ.v1kpMaryjcNcDq-3QT-rHXGbT-RhF2UX0oFyq7he4Pw";
const token = encodeURIComponent(theToken);

function ItemDetails() {


const { _id } = useParams();
  const [currentItem, setCurrentItem] = useState(null);
  

  useEffect(() => {
    const fetchItemDetails = async () => {
      try {
        const response = await fetch(`http://localhost:8000/api/v1/items/${_id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        if (!response.ok) {
          throw new Error('Failed to fetch item details');
        }
        const itemDetails = await response.json();
        setCurrentItem(itemDetails);
        console.log(itemDetails)
      } catch (error) {
        console.error('Error fetching item details:', error);
      }
    };

    fetchItemDetails();
  }, [_id, token]);

  if (!currentItem) {
    return <div>Loading...</div>;
  }

    return (
        <div>
            <Header pageTitle="Item Details"/>
            <div className='itemDetailsContainer'>
                <div className="itemImgContainer"><img className='itemImage' src={currentItem.photo ||placeHolder} alt="Placeholder" /></div>
                <h2 className='itemName'>{currentItem.title}</h2>
                <h3 className="description" > Description </h3>
                <p className="descriptionBox" >{currentItem.description}</p>  
                <p className='descriptionDetail'> Date Found 
                    <span className="descriptionValue"> {currentItem.dateLostFound}</span>
                    </p>
    
                <p className='descriptionDetail'> Location
                    <span className="descriptionValue">{currentItem.location}
                        <span className="mapPin"><img src={mapPin} alt="map pin" /></span>
                    </span>
                
                </p>
                <p className='descriptionDetail'> Status <span className="lostFound descriptionValue">{currentItem.type}</span>
                </p>

                <div className='claimButtonContainer'>
                   <Link to={`/item/${currentItem.id}/claim`} className="button">
            Claim
          </Link>
                </div>  
            </div>
        </div>
    )
}

export default ItemDetails;
