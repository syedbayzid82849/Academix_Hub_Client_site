import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myEnroll, setMyEnroll] = useState([]);
    console.log(myEnroll);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/all-course/${user.email}`)
                .then(res => {
                    console.log(res);
                    setMyEnroll(res.data)
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, [user]);
    return (
        <div>
            MyEnrolled
        </div>
    );
};

export default MyEnrolled;