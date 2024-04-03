import React from "react";



const ItemCard = ({photo, title, dateLostFound, type,description, location}) =>{
return (
<div className="reportedItemsContainer">
   <div className="ItemCard">
   <img className="itemPhoto" src={photo}/>
   <h3>{title}</h3>
   <p>{description}</p>
   <p>Date Reported: {dateLostFound}</p>
   <p>{type}</p>
   <p>{location}</p>
  </div> </div>)

};

export default ItemCard;


