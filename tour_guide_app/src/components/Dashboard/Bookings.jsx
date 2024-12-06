import React from "react";
import { usePackages } from "../context/PackegesContext";
const Bookings = () => {
    const { Bookings } = usePackages();
    console.log("Booking>>>", Bookings);
    if (!Bookings || Bookings.length === 0) {
        return <h2>No Bookings available.</h2>;
    }

    return (
        <>
            <h1 className="text-3xl font-semibold text-center my-6">Booking List</h1>
            <p className="text-center text-lg mb-4">
                Below is the list of all bookings, displaying their usernames and email addresses.
            </p>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Name</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Email</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Phone No</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Persons</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-700 border-b">Travel Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Bookings.map((booking) => {
                            return (
                                <tr key={booking.id} className="border-b">
                                    <td className="py-3 px-6 text-gray-800">{booking.Name}</td>
                                    <td className="py-3 px-6 text-gray-600">{booking.Email}</td>
                                    <td className="py-3 px-6 text-gray-600">{booking.Phone}</td>
                                    <td className="py-3 px-6 text-gray-600">{booking.NumOfPersons}</td>
                                    <td className="py-3 px-6 text-gray-600">{booking.TravelDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Bookings;
