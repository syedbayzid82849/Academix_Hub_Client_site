import React from 'react';
import { AuthContext } from './AuthContext';

const AuthProvider = ({ children }) => {

    // create user with name, email, password, photoURL
    const createUserWithqualifiedName = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const authInformation = {

        createUserWithqualifiedName,
        // You can add more authentication methods here, like signIn, signOut, etc.
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;