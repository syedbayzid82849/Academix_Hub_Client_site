import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const authInfor
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;