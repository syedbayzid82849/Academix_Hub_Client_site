import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chile}) => {
    return (
        <AuthContext>
            {chile}
        </AuthContext>
    );
};

export default AuthProvider;