import React, { useState, useEffect } from 'react';
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import NewItemPage from './pages/NewItemPage';
import { Index } from './pages/indexPage';
import { ItemDetails } from './pages/itemDetails';
import  ItemsCard from './pages/ItemCard'


import './App.css'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
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
      element: <ItemsCard/>
    }

  ]);

  return (
    <div className="app">
  
            <RouterProvider router={router}>router </RouterProvider>

    </div>

   
  );

}

export default App
