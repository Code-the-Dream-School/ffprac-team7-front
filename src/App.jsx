import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom"
import { Home } from './pages/home';
import NewItemPage from './pages/NewItemPage';
import { Index } from './pages/indexPage';
import { ItemDetails } from './pages/itemDetails';
import Items from './pages/Items'


import './App.css'
import LoginPage from './pages/LoginPage';

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
      path: "/itemDetails",
      element: <ItemDetails />
    },
    {
      path: "/reportedItems",
      element: <Items/>
    },
    {
      path: "/reportNewItem",
      element: <NewItemPage/>
    }

  ]);

  return (
    <div className="app">

      <RouterProvider router={router}>router </RouterProvider>

    </div>


  );

}

export default App
