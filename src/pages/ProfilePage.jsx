import React from "react";
import { useState } from "react";
import Header from "../shared/header";
import { useParams } from "react-router-dom";

const profiles = [
  {
    profilePicture: "path/to/profile_picture1.jpg",
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

    const {id} = useParams();
const currentProfiles = profiles.find((item) => item.id === parseInt(id));

  return (
    <div>
      <Header pageTitle={'Profile Information'} />
      <div className="profileInfoContainer">
        {currentProfiles.map((profile) => (
          <div key={profile.id}>  
            <img src={profile.profilePicture} />
            <h3>Name </h3> 
            <p>{profile.name}</p>
            <h3>Contact Number</h3> 
            <p>{profile.contactNumber}</p>
            <h3>Email</h3>
            <p>{profile.email}</p> 
          </div>
        ))}
      </div>
    </div>
  );
}


export default ProfilePage
