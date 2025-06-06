import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    c

    const authInformation = {
        
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;