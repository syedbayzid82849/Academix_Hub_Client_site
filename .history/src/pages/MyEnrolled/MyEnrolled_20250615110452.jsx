import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myEnroll, setMyEnroll] = useState([]);
    console.log(myEnroll);
    useEffect(() => {
        if (user?.email) {
            const email = encodeURIComponent(user.email);
            axios.get(`http://localhost:3000/myEnrolls?email=${email}`);
                .then(res => {
                    console.log(res.data);
                    setMyEnroll(res.data);
                })
                .catch(err => {
                    console.error("Error loading enrollments:", err);
                });
        }
    }, [user?.email])}
    return (
        <div>
            MyEnrolled
        </div>
    );
};

export default MyEnrolled;