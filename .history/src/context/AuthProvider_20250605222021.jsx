import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const authInformation = {
        user: null,
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;