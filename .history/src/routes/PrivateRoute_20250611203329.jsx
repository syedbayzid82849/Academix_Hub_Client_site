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

    if (user && user?.email){
        return <Outlet />;
    }

    return 
};

export default PrivateRoute;