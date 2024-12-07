import React, { useState } from "react";
import { db, collection, addDoc } from "./Firebase/Firebase"
import Swal from 'sweetalert2';

const BookingForm = ({ setShowForm }) => {
    console.log("Booking Chala!!");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });


    const [numOfPerson, setNumOfPerson] = useState(0)
    const [travelDate, setTravelDate] = useState("");

    const handlePersonCount = () => {
        if (numOfPerson > 0) {
            setNumOfPerson(numOfPerson - 1);
        }
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Booking submitted for package:");
        console.log("NAME: ", formData.name);
        console.log("Email: ", formData.email);
        console.log("Phone NO: ", formData.phone);
        console.log("Num of Person: ", numOfPerson);
        console.log("Travel Date: ", travelDate);
        const { name, email, phone } = formData;

        const booking = {
            Name: name,
            Email: email,
            Phone: phone,
            NumOfPersons: numOfPerson,
            TravelDate: travelDate,
        };
        try {
            const docRef = await addDoc(collection(db, "Bookings"), booking);
            console.log("Document written with ID: ", docRef.id);
            Swal.fire({
                title: 'Booking Successful!',
                html: '<strong>Your booking has been successfully placed!</strong><br><p>We will get in touch with you soon.</p>',
                icon: 'success',
                confirmButtonText: 'Okay'
              });

        } catch (error) {
            console.log("Error>>", error);
        }
        setShowForm(false);
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <form
                onSubmit={handleSubmit}
                className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg"
            >
                <h2 className="text-2xl text-center font-semibold mb-4">Book Your Package</h2>
                <div className="space-y-4">
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Good Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Your Phone Number with Country Code"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-orange-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <div className="w-full flex items-center justify-between space-x-4 p-3 border border-orange-300 rounded-md bg-gray-100">
                        <label
                            htmlFor="travel-date"
                            className="text-sm font-medium text-gray-600 mb-1"
                        >
                            No Of Persons:
                        </label>
                        <button
                            type="button"
                            onClick={() => handlePersonCount()}
                            className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
                        >
                            -
                        </button>
                        <span className="text-lg font-semibold text-gray-700">{numOfPerson}</span>
                        <button
                            type="button"
                            onClick={() => setNumOfPerson(numOfPerson + 1)}
                            className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-500 transition"
                        >
                            +
                        </button>
                    </div>

                    <div className="flex flex-col">
                        <label
                            htmlFor="travel-date"
                            className="text-sm font-medium text-gray-600 mb-1"
                        >
                            Travel Date:
                        </label>
                        <input
                            type="date"
                            id="travel-date"
                            name="travelDate"
                            value={travelDate}
                            onChange={(e) => setTravelDate(e.target.value)}
                            className="w-full px-3 py-2 text-gray-600 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 bg-white"
                        />
                    </div>

                </div>
                <div className="mt-6 flex justify-end space-x-4">
                    <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="px-4 py-2 bg-gray-300 rounded-md hover:bg-grey-400"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-600"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
};

export default BookingForm;
