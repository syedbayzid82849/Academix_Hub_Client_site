import React from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router';

const PrivateRoute = () => {
    const { user, loading } = usec;
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return (
        <div>
            <h1>Welcome to the Private Route</h1>
        </div>
    );
};

export default PrivateRoute;