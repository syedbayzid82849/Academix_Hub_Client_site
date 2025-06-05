import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({cc}) => {
    return (
        <AuthContext>
            {cc}
        </AuthContext>
    );
};

export default AuthProvider;