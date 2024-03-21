import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './pages/home';
import { Index } from './pages/indexPage';
import { ItemDetails } from './pages/itemDetails';


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
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );

}

export default App
