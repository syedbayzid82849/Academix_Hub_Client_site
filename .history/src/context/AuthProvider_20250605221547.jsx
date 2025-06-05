import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chaid}) => {
    return (
        <AuthContext>
            {chaid}
        </AuthContext>
    );
};

export default AuthProvider;