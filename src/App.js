import React from "react";

import './App.css';

import HomePage from "./components/HomePage";
import CharityRegistrationPage from "./components/CharityRegistrationPage";
import DonationPage from "./components/DonationPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/charity",
      element: <CharityRegistrationPage />
    },
    {
      path: "/donation",
      element: <DonationPage />
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
