import React from "react";

const reportedItems = [
  {id: 1, title: "wallet", type: "found", description: "Dark brown bifold wallet with the monogram CTD printed on both side"},
  {id: 2, title: "cat", type: "lost", description: "Lost short hair domestic cat with a collar. Named 'Clarice' and is very friendly."}, 
  {id: 3, title: "keys", type: "lost", description: "Set of keys with a green keychain and a house-shaped key holder."},
  {id: 4, title: "smartphone", type: "found", description: "Black iPhone 12 with a cracked screen."},
  {id: 5, title: "bike", type: "lost", description: "Red mountain bike with a black seat and silver handlebars."},
  {id: 6, title: "earrings", type: "found", description: "Pair of silver hoop earrings found near the park."},
  {id: 7, title: "backpack", type: "lost", description: "Blue backpack with a NASA patch sewn on the front pocket."},
  {id: 8, title: "watch", type: "found", description: "Golden wristwatch with a leather strap."},
  {id: 9, title: "laptop", type: "lost", description: "Macbook Air laptop in a black case."},
  {id: 10, title: "bracelet", type: "found", description: "Gold bracelet with small diamond studs."},
];


const ItemDisplay = () =>{
return (

   reportedItems.map(item=>(<div key={item.id} className="ItemCard">
   <h3>{item.title}</h3>
   <p>{item.type}</p>
   </div>))
)
};

export default ItemDisplay;


