import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"
import { Home } from './pages/home';
import NewItemPage from './pages/NewItemPage';
import { Index } from './pages/indexPage';
import ItemDetails from './pages/itemDetails';
import Items from './pages/Items'
import ItemClaim from './pages/ItemClaim';
import ProfilePage from './pages/ProfilePage';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'

import SignupPage from './pages/SignUpPage/SignUpPage';
import LoginPage from './pages/LoginPage';

function App() {

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [token, setToken] = useState("");
  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [userId, setUserId] = useState("");
  // This function sets all of the above states based on the user login input. Stored profileInfo is coming from the backend.
  function updateUserInfo(profileInfo) {

    if (profileInfo.username) {
      setUsername(profileInfo.username)
    }
    if (profileInfo.token) {
      setToken(profileInfo.token)
    }
    if (profileInfo.userId) {
      setUserId(profileInfo.userId)
    }
    if (profileInfo.email) {
      setEmail(profileInfo.email)
    }
    if (profileInfo.profilePicture) {
      setProfileImgUrl(profileInfo.profilePicture)
    }
  }

  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/LoginPage",
      element: <LoginPage setUserInfo={updateUserInfo} />
    },
    {
      path: "/indexPage",
      element: <Index />
    },
    {
      path: "/item/:id",
      element: <ItemDetails />
    },
    {
      path: "/reportedItems",
      element: <Items />
    },
    {
      path: "/reportNewItem",
      element: <NewItemPage />
    },
    {
      path: "/SignUpPage",
      element: <SignupPage />
    },

    // Is the below code needed or did we create an extra login route by mistake? Check in with Roy.
    {
      path: "/LoginPage",
      element: <LoginPage />
    },
    {
      path: "/item/:id/claim",
      element: <ItemClaim />
    },
    {
      path: "/profilePage",
      element: <ProfilePage />
    }

  ]);

  return (
    <div className="app">

      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition:Bounce
      />

      <RouterProvider router={router}>router </RouterProvider>

    </div>
  );
}

export default App;
