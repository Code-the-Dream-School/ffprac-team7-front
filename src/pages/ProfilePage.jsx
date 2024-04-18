import React from "react";
import { useState } from "react";
import Header from "../shared/header";
import "../styles/ProfilePage.css"
import DefaultImage from "../assets/profilePicture.svg";


const profiles = [
  {
    profilePicture: false,
    name: "John Doe",
    contactNumber: "+1234567890",
    email: "john.doe@example.com",
  },
  {
    profilePicture: "path/to/profile_picture2.png",
    name: "Jane Smith",
    contactNumber: "+9876543210",
    email: "jane.smith@example.com",
  },
  {
    profilePicture: "path/to/profile_picture3.gif",
    name: "Alice Johnson",
    contactNumber: "+5551234567",
    email: "alice.johnson@example.com",
  },
  {
    profilePicture: "path/to/profile_picture4.bmp",
    name: "David Lee",
    contactNumber: "+8178901234",
    email: "david.lee@example.com",
  },
  {
    profilePicture: "path/to/profile_picture5.jpg",
    name: "Emily Williams",
    contactNumber: "+442079865432",
    email: "emily.williams@example.com",
  },
];


const ProfilePage = () => {

const [currentProfile, setCurrentProfile] = useState(profiles[0])


  return (
    <div>
      <Header pageTitle={'Profile Information'} />
      <div className="profileInfoContainer">

          <div key={currentProfile.id}>  
            <img className="imgProfile" src={currentProfile.profilePicture || DefaultImage}/>
            <h3 className="profileLabel">Name </h3> 
            <p className="profileInfo">{currentProfile.name}</p>
            <h3 className="profileLabel" >Contact Number</h3> 
            <p className="profileInfo">{currentProfile.contactNumber}</p>
            <h3 className="profileLabel" >Email</h3>
            <p className="profileInfo">{currentProfile.email}</p> 
            <button className="updateButton">Update Info</button>
          </div>

      </div>
    </div>
  );
}


export default ProfilePage
