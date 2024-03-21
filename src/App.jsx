import React, { useState, useEffect } from 'react';
import {createBrowserRouter, RouterProvider, Routes, Route} from "react-router-dom"
import { Home } from './pages/home';
import NewItemPage from './pages/NewItemPage';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    
  ]);

  return (
    <div className="app">
            <RouterProvider router={router}>router </RouterProvider>


    </div>

   
  );

}

export default App
