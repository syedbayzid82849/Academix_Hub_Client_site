import React from 'react';

const PrivateRoute = () => {
    const { user, loading } = useAuth();
    const location = useLocation();
    return (
        <div>
            
        </div>
    );
};

export default PrivateRoute;