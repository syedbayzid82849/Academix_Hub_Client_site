import React from 'react';
import { AuthContext } from './AuthContext';
import {createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase/firebase.init';


const AuthProvider = ({ children }) => {
    // loading 
    const [loading, setLoading] = useState(false);

    // create user with name, email, password, photoURL
    const createUserWithEP = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInformation = {
        loading,
        setLoading,
        createUserWithEP,

    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;