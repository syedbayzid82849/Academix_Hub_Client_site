import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from '../firebase/firebase.init';
import axios from 'axios';


const AuthProvider = ({ children }) => {
    // loading 
    const [loading, setLoading] = useState(true);
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

    sing in 

    // sign out user
    const signOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    // get all courses from the server
    const getAllCourses = () => {
        setLoading(true);
        return axios.get('https://academix-hub-server.vercel.app/all-course')    
            .then(response => {
                setLoading(false);
                return response.data;
            })
            .catch(error => {
                console.error("Error fetching courses:", error);
                throw error;
            });
    }

    // user check
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
        signOutUser,
        getAllCourses, 
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;