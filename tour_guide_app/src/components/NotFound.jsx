import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-gray-800">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-2xl mt-4">Page Not Found</p>
      <Link to="/" className="mt-6 text-blue-500 hover:underline">
        Go Back to Home
      </Link>
    </div>
  );
}

export default NotFound;
