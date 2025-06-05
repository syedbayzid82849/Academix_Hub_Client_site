import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({chaidle}) => {
    return (
        <AuthContext>
            {chaidle}
        </AuthContext>
    );
};

export default AuthProvider;