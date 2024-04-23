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
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <Home />
    },
    {
      path: "/LoginPage",
      element: <LoginPage />
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
    },
    {
      // Do some research on how to make all error pages lead to this 404 not found page.
      path: "/NotFoundPage",
      element: <NotFoundPage />
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
