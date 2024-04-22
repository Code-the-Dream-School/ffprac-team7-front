import React from "react";
import placeHolder from "../assets/placeholder.svg"



const ItemCard = ({photo, title, dateLostFound, type,description, location }) =>{


return (
<div className="reportedItemsContainer" >
   <div className="ItemCard">
    <img className="itemPhoto" src={photo || placeHolder}/>
    <h3 className="itemTitle">{title}</h3>
    <p>{description}</p>
    <p className="dateLostFound">Reported: {dateLostFound}</p>
    <p>{type}</p>
    <p>{location}</p>
  </div>
</div>
)
};

export default ItemCard;
