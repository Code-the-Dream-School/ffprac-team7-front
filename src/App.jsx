import React, { useState, useEffect } from 'react';
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import NewItemPage from './pages/NewItemPage';
import { Index } from './pages/indexPage';
import { ItemDetails } from './pages/itemDetails';
import Header from './shared/header';
import './index.css'

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

  ]);

  return (
    <div className="app">
            <Header/>
            <RouterProvider router={router}>router </RouterProvider>

    </div>

   
  );

}

export default App
