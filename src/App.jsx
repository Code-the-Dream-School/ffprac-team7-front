import React, { useState, useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from './pages/home';
import { Index } from './pages/indexPage';


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

  ]);

  return (
    <div className="app">
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );

}

export default App
