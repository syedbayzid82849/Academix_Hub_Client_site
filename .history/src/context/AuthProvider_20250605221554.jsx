import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ch}) => {
    return (
        <AuthContext>
            {ch}
        </AuthContext>
    );
};

export default AuthProvider;