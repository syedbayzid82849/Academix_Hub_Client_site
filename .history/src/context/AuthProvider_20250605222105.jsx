import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({children}) => {

    // create user with name, email, password, photoURL
    const createUser

    const authInformation = {
        
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;