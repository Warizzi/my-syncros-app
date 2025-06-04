import React, { useEffect, useState } from 'react';
import LoadingSpinner from '../Components/LoadingSpinner';



const Home = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Simulate a delay for loading
        const timer = setTimeout(() => setLoading(false), 2000);
        return () => clearTimeout(timer); // Clean up the timer if component unmounts
    }, []);

    if (loading) return <LoadingSpinner />;

    return (
        <div>
            <h1>Welcome to your Health Tracker</h1>
        </div>
    );
};

export default Home;