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
    element: <HomePage />,
    // children: [
    //   { path: 'tour-packages', element: <TourPackages /> },
    //   { path: 'about', element: <About /> },
    //   { path: 'contact-us', element: <ContactUs /> },
    // ],
  },
]);

function App() {
  
  return (
    <>
    <UserAuthContextProvider>
         <RouterProvider router={router}/>
    </UserAuthContextProvider>
    </>
  )
}

export default App
