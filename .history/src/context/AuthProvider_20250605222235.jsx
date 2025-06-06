import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    // create user with name, email, password, photoURL
    const createUserWithee = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const authInformation = {

        createUserWithqualifiedName,

    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;