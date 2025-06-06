import React from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


const AuthProvider = ({ children }) => {

    // create user with name, email, password, photoURL
    const createUserWithEmailAndPassword = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }

    const authInformation = {

        createUserWithEmailAndPassword,

    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;