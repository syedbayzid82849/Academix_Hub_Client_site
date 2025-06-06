import React from 'react';
import { AuthContext } from './AuthContext';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {

    // create user with name, email, password, photoURL
    const createUserWithEmailAndPassword = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
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