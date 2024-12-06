import * as React from "react";
import { useState } from 'react'
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import SignupForm from "./components/SignupForm";
import SigninForm from "./components/SigninForm";
import HomePage from "./components/HomePage";
import { UserAuthContextProvider } from "./components/context/UserAuthProvider";
import { PackageProvider } from "./components/context/PackegesContext";
import ProtectedRoute from "./components/ProtectedRoute";
// Pages imports
import About from "./components/Pages/About";
import Destination from "./components/Pages/Destinations";
import HotelsBooking from "./components/Pages/HotelsBooking";
import TourPackages from "./components/Pages/TourPackages";
import TransportBooking from "./components/Pages/TransportBooking";

// Admin Panel Imports
import AdminPanel from "./components/Dashboard/AdminPanel";
import AdminLogin from "./components/Dashboard/AdminLogin";
import AddTourPackages from "./components/Dashboard/AddTourPakeges";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/signup" />,
  },
  {
    path: '/signup',
    element: <SignupForm />,
  },
  {
    path: '/signin',
    element: <SigninForm />,
  },
  {
    path: '/home',
    element:
      <ProtectedRoute>
        <HomePage />
      </ProtectedRoute>,
    children: [
      { path: 'destinations', element: <Destination /> },
      { path: 'tour-packages', element: <TourPackages /> },
      { path: 'transport-booking', element: <TransportBooking /> },
      { path: 'hotels-booking', element: <HotelsBooking /> },
      { path: 'about', element: <About /> },
    ],
  },
  {
    path: '/Admin',
    element: <AdminLogin/>,
  },
  {
    path: '/Admin/Panel',
    element: <AdminPanel/>,
    children: [
      {path: 'add/tours/packages', element: <AddTourPackages/>}
      
      // {path="/users" element={<Users />}},
      
      // { path="/bookings" element={<Bookings />}}
    ]
  }
]);

function App() {

  return (
    <>
      <UserAuthContextProvider>
        <PackageProvider>
          <RouterProvider router={router} />
        </PackageProvider>
      </UserAuthContextProvider>
    </>
  )
}

export default App
