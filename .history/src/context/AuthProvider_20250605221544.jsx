import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({c}) => {
    return (
        <AuthContext>
            {c}
        </AuthContext>
    );
};

export default AuthProvider;