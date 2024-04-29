import React from "react";
import { useState } from "react";
import Header from "../shared/header";
import "../styles/ProfilePage.css"
import DefaultImage from "../assets/profilePicture.svg";
import { toast } from "react-toastify";


// const profiles = [
//   {
//     profilePicture: false,
//     name: "John Doe",
//     contactNumber: "+1234567890",
//     email: "john.doe@example.com",
//   },
//   {
//     profilePicture: "path/to/profile_picture2.png",
//     name: "Jane Smith",
//     contactNumber: "+9876543210",
//     email: "jane.smith@example.com",
//   },
//   {
//     profilePicture: "path/to/profile_picture3.gif",
//     name: "Alice Johnson",
//     contactNumber: "+5551234567",
//     email: "alice.johnson@example.com",
//   },
//   {
//     profilePicture: "path/to/profile_picture4.bmp",
//     name: "David Lee",
//     contactNumber: "+8178901234",
//     email: "david.lee@example.com",
//   },
//   {
//     profilePicture: "path/to/profile_picture5.jpg",
//     name: "Emily Williams",
//     contactNumber: "+442079865432",
//     email: "emily.williams@example.com",
//   },
// ];


const ProfilePage = ({ username, email, token, profileImgUrl, userId }) => {

  // const [currentProfile, setCurrentProfile] = useState(profiles[1])
  const [updatedUsername, setUpdatedUsername] = useState(username);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedUserID, setUpdatedUserID] = useState(userId);
  const [updatedProfileImgUrl, setUpdatedProfileImgUrl] = useState(profileImgUrl);
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleUpdateProfile = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://localhost:8000/api/v1/users/${userId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          username: updatedUsername,
          email: updatedEmail,
          userID: updatedUserID,
          profileImgUrl: updatedProfileImgUrl
        }),
      });

      if (!response.ok) {
        toast("Failed to update profile")
      }
      toast('Profile updated successfully');
    } catch (error) {
      console.error('Error updating profile:', error.message);
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <div>
      <Header pageTitle={'Profile Information'} />
      <div className="profileInfoContainer">
        <div>
          <img className="imgProfile" src={profileImgUrl || DefaultImage} />
          {isEditing ? (
            <form>
              <h3 className="profileLabel">Name </h3>
              <input
                type="text"
                className="profileInfo"
                value={updatedUsername}
                onChange={(e) => setUpdatedUsername(e.target.value)}
              />
              <h3 className="profileLabel" >Email</h3>
              <input
                type="email"
                className="profileInfo"
                value={updatedEmail}
                onChange={(e) => setUpdatedEmail(e.target.value)}
              />
              <h3 className="profileLabel" >UserID</h3>
              <input
                type="text"
                className="profileInfo"
                value={updatedUserID}
                onChange={(e) => setUpdatedUserID(e.target.value)}
              />
              <button type="button" onClick={handleUpdateProfile} disabled={isLoading}>
                {isLoading ? 'Updating...' : 'Update Info'}
              </button>
              <button type="button" onClick={() => setIsEditing(false)}>Cancel</button>
            </form>
          ) : (
            <div>
              <h3 className="profileLabel">Name </h3>
              <p className="profileInfo">{username}</p>
              <h3 className="profileLabel" >Email</h3>
              <p className="profileInfo">{email}</p>
              <h3 className="profileLabel" >UserID</h3>
              <p className="profileInfo">{userId}</p>
              <button className="updateButton" onClick={() => setIsEditing(true)}>
                Edit Info
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
};



export default ProfilePage
