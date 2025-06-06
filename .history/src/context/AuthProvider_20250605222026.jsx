import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    const authInformation = {
        user: null,
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;