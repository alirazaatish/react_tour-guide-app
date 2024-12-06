import React from "react";
import BookingForm from "../BookingForm";
import { useState } from "react";
import { usePackages } from "../context/PackegesContext";

const TourPackages = () => {

  const [showForm, setShowForm] = useState(false);
  const { packages, loading } = usePackages();

  if (loading) {
    return <p>Loading packages...</p>;
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-6 mt-6">Tour Packages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6 m-4">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="border p-4 shadow hover:shadow-lg transition flex flex-col lg:flex-row"
          >
            
            <img
              src={pkg.TourPakegeImg}
              alt={pkg.TourPakegeName}
              className="w-full lg:w-1/2 h-48 object-cover mb-4 lg:mb-0 lg:mr-4"
            />

           
            <div className="flex flex-col justify-between lg:w-1/2">
              
              <div className="mb-4 text-center lg:text-left">
                <h2 className="text-xl font-semibold">{pkg.TourPakegeName}</h2>
                <p className="text-gray-600 mt-2">{pkg.TourDescription}</p>
                <p className="text-gray-500">Duration: {pkg.TourDuration}</p>
              </div>

              
              <div className="flex flex-row items-center justify-start space-x-4 mt-4">
               
                <p className="text-1xl font-bold text-orange-500 bg-yellow-100 p-2 rounded-md shadow-md inline-block">
                  PKR:{pkg.TourPakegePrice}
                </p>

              
                <div className="flex gap-4">
                  <button onClick={() => setShowForm(true)} className="bg-orange-500 text-white px-3 py-3 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition-colors">
                    Booking Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {showForm && (
        <BookingForm
          setShowForm={setShowForm}
          // packageId={pkg.id}
        />
      )}
    </div>
  );
};

export default TourPackages;
