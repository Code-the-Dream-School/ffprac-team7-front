import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import NewItemPage from './pages/NewItemPage';
=======
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './pages/home';
import { Index } from './pages/indexPage';
import { ItemDetails } from './pages/itemDetails';
>>>>>>> main


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
<<<<<<< HEAD
    
=======
    {
      path: "/indexPage",
      element: <Index />
    },
    {
      path: "/itemDetails",
      element: <ItemDetails />
    },

>>>>>>> main
  ]);

  return (
    <div className="app">
            <RouterProvider router={router}>router </RouterProvider>


    </div>

   
  );

}

export default App
