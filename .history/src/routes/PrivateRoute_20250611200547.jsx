import React, { useContext } from 'react';
import LoadingSpinner from '../components/LoadingSpinner/LoadingSpinner';
import { useLocation } from 'react-router';
import { AuthContext } from '../context/AuthContext';

const PrivateRoute = () => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <LoadingSpinner />;
    }

    if (user ) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return 
};

export default PrivateRoute;