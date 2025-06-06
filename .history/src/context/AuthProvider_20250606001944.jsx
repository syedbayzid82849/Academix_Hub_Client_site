import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {
    // loading 
    const [loading, setLoading] = useState(false);
    // user chack
    const [user, setUser] = useState(null);

    // create user with name, email, password, photoURL
    const createUserWithEP = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // log in user with email and password
    const loginUserWithEP = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password) 
    }

    // user chack
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                // User is signed in
                console.log("User is signed in:", user);
            } else {
                // User is signed out
                console.log("No user is signed in");
            }
        });
        return () => unsubscribe();
    }, []);

    const authInformation = {
        user,
        loading,
        setLoading,
        createUserWithEP,
        loginUserWithEP, 
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;