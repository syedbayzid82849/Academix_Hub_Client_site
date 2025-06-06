import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const auth
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;