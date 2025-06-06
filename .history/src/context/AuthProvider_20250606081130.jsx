import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
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
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
            console.log('after auth state change', currentUser);
        });
        return () => unsubscribe();
    }, []);

    const authInformation = {
        user,
        setUser,
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