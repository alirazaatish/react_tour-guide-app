import React, { useState } from "react";
import axios from "axios";
import { db, collection, addDoc  } from "./Firebase/Firebase";

console.log("DB>>>>", db);

const AddTourPackages = () => {
    const [tourPakegeName, setTourPakegeName] = useState('');
    const [tourPakegePrice, setTourPakegePrice] = useState('');
    const [tourDescription, setTourDescription] = useState('');
    const [tourDuration, setTourDuration] = useState('');
    const [tourPakegeImg, setTourPakegeImg] = useState(null);
    const [error, setError] = useState('');

    const type = ['image/png', 'image/jpeg'];

    // Handle image change (validate image type)
    const tourImageHandler = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile && type.includes(selectedFile.type)) {
            setTourPakegeImg(selectedFile);
            setError('');
        } else {
            setTourPakegeImg(null);
            setError('Please select a valid image type (jpg or png)');
        }
    };

    // Handle form submission
    const addTourPackages = async (e) => {
        e.preventDefault();

        if (!tourPakegeImg) {
            setError("Please select an image");
            return;
        }

        console.log("Uploading file:", tourPakegeImg);

        try {
            // Create FormData object to send to Cloudinary
            const formData = new FormData();
            formData.append('file', tourPakegeImg);
            formData.append('upload_preset', 'tourPackageImages');  // Replace with your Cloudinary preset name

            // Upload image to Cloudinary
            const response = await axios.post('https://api.cloudinary.com/v1_1/dnry1uzoj/image/upload', formData);

            // Get the image URL after upload
            const downloadURL = response.data.secure_url;
            console.log("Download URL:", downloadURL);

            // Now add the tour package to Firestore (or your database)
            // You can replace this with your backend code or Firestore API
            const tourPackageData = {
                TourPakegeName: tourPakegeName,
                TourPakegePrice: Number(tourPakegePrice),
                TourDescription: tourDescription,
                TourDuration: tourDuration,
                TourPakegeImg: downloadURL,
            };
            
            console.log("Tour Package Data:", tourPackageData);

            try {
                const docRef = await addDoc(collection(db, "Packages"), tourPackageData);
                console.log("Document written with ID: ", docRef.id);
              } catch (e) {
                console.error("Error adding document: ", e);
              }

            // Reset the form
            setTourPakegeName("");
            setTourPakegePrice("");
            setTourDescription("");
            setTourDuration("");
            setTourPakegeImg(null)
            document.getElementById("file").value = "";  // Reset file input
            setError("");

            alert('Tour package added successfully');
        } catch (error) {
            console.error("Error in uploading image or adding tour package:", error);
            setError("Failed to upload image or add package");
        }
    };

    return (
        <>
            <div>
                <h1 className="text-align-center mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl">Add Tour Packages</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Easily create and manage tour packages for your customers. Provide package details such as title, description, price, and duration, and upload stunning images to showcase your offerings.</p>
            </div>
            <form className="max-w-sm mx-auto" onSubmit={addTourPackages}>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Package Name:</label>
                    <input type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={tourPakegeName}
                        onChange={(e) => setTourPakegeName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Package Duration:</label>
                    <input type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={tourDuration}
                        onChange={(e) => setTourDuration(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Package Price:</label>
                    <input type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={tourPakegePrice}
                        onChange={(e) => setTourPakegePrice(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Short Description:</label>
                    <input type="text"
                        id="small-input"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value={tourDescription}
                        onChange={(e) => setTourDescription(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="file" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tour Image:</label>
                    <input type="file"
                        id="file"
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        onChange={tourImageHandler} />
                </div>
                <div>
                    <button type="submit" className="focus:outline-none text-white bg-orange-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">Upload</button>
                </div>
                {error && <span className='error-msg'>{error}</span>}
            </form>
        </>
    );
}

export default AddTourPackages;
