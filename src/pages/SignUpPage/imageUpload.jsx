import React, { useState, useRef } from 'react';
import DefaultImage from "../../assets/profilePicture.svg";
import EditIcon from "../../assets/editIcon.svg";
import "../../styles/imageUpload.css";


const ImageUpload = () => {
    const [photoURL, setPhotoURL] = useState(DefaultImage);

    const fileUploadRef = useRef();

    const handleImageUpload = (event) => {
        event.preventDefault();
        fileUploadRef.current.click()
    }

    const uploadImageDisplay = () => {
        const uploadedFile = fileUploadRef.current.files[0];

        const cachedURL = URL.createObjectURL(uploadedFile);

        setPhotoURL(cachedURL)
    }


    return (
        <div className="defaultImgContainer">
            <img
                src={photoURL}
                alt="Default Profile Photo"
                className="defaultImg"
            />
            <form id="form" encType='multipart/form-data'>
                <button
                    className='uploadBtn'
                    type='submit'
                    onClick={handleImageUpload}
                >

                    <img
                        src={EditIcon}
                        alt="Edit"
                        className="editBtn"
                    />
                </button>
                <input
                    type="file"
                    id="file"
                    ref={fileUploadRef}
                    onChange={uploadImageDisplay}
                    hidden
                />
            </form>
        </div>
    )
}

export default ImageUpload
