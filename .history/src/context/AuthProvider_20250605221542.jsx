import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chaild}) => {
    return (
        <AuthContext>
            {chaild}
        </AuthContext>
    );
};

export default AuthProvider;