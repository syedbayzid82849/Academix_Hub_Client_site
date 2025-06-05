import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chai}) => {
    return (
        <AuthContext>
            {chai}
        </AuthContext>
    );
};

export default AuthProvider;