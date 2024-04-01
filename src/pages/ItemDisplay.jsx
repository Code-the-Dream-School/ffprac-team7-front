import React from "react";

const reportedItems = [
  {id: 1, title: "wallet", type: "found", description: "Dark brown bifold wallet with the monogram CTD printed on both side", photo:"https://media.istockphoto.com/photos/money-wallet-ii-picture-id91599577?k=6&m=91599577&s=612x612&w=0&h=k_F9VXa-93UtI1d1eSaH_eVkKcMrA4mBU2YZ_wmgQlU="},
  {id: 2, title: "cat", type: "lost", description: "Lost short hair domestic cat with a collar. Named 'Clarice' and is very friendly.", photo: "https://c.pxhere.com/photos/38/3d/adorable_animal_cat_close_up_cute_feline_kitty_pet-1486829.jpg!d"}, 
  {id: 3, title: "keys", type: "lost", description: "Set of keys with a green keychain and a house-shaped key holder.", photo: "https://images.pexels.com/photos/724329/pexels-photo-724329.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"},
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
   <img className="itemPhoto" src={item.photo}/>
   <h3 className="itemTitle">{item.title}</h3>
   <p className="itemType">{item.type}</p>
   </div>))
)
};

export default ItemDisplay;


