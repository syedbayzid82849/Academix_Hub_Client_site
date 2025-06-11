import React from 'react';

const PrivateRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user) {
        return <Navigate to="/login" state={{ from: location }} />;
    }

    return (
        
    );
};

export default PrivateRoute;