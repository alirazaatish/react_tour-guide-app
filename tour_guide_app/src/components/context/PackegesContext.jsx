import React, { createContext, useContext, useEffect, useState } from "react";
import { db, collection, getDocs } from "../Firebase/Firebase";

// Create the context
const PackageContext = createContext();

// Provider Component
export const PackageProvider = ({ children }) => {
    const [packages, setPackages] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch tour packages from Firestore
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

    return (
        <PackageContext.Provider value={{ packages, loading }}>
            {children}
        </PackageContext.Provider>
    );
};

// Custom Hook to use the context
export const usePackages = () => {
    return useContext(PackageContext);
};
