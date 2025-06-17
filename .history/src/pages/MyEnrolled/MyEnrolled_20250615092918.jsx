import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    console.log(myGroups);

    const token = user.accessToken;

    useEffect(() => {
        if (user?.email) {
            axios.get(`https://academix-hub-server.vercel.app/my-groups/${user.email}`)
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    
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