import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chaildern}) => {
    return (
        <AuthContext>
            {chaildern}
        </AuthContext>
    );
};

export default AuthProvider;