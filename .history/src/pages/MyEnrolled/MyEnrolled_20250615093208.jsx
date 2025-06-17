import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myEnroll, setMyEnroll] = useState([]);
    console.log(myGroups);

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://academix-hub-server.vercel.app/my-groups/${user.email}`)
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