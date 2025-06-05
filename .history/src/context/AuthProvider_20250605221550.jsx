import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chail}) => {
    return (
        <AuthContext>
            {chail}
        </AuthContext>
    );
};

export default AuthProvider;