import React, { createContext, useContext, useEffect, useState } from "react";
import { db, collection, getDocs } from "../Firebase/Firebase";
import Users from "../Dashboard/Users";
import Bookings from "../Dashboard/Bookings";


const PackageContext = createContext();

export const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Users, setUsers] = useState([]);
    const [Bookings, setBookings] = useState([]);



    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Packages"));
                const fetchedPackages = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setPackages(fetchedPackages);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching packages:", error);
            }
        };

        fetchPackages();
    }, []);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Users"));
                const fetchedUsers = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setUsers(fetchedUsers);
                
            } catch (error) {
                console.error("Error fetching Users:", error);
            }
        };

        fetchUsers();
    
    },[]);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Bookings"));
                const fetchedBookings = querySnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setBookings(fetchedBookings);
                
            } catch (error) {
                console.error("Error fetching Bookinngs:", error);
            }
        };

        fetchBookings();
    
    },[])

return (
    <PackageContext.Provider value={{ packages, loading , Users, Bookings}}>
        {children}
    </PackageContext.Provider>
);
};


export const usePackages = () => {
    return useContext(PackageContext);
};
