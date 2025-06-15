import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const MyEnrolled = () => {
    const { user } = useContext(AuthContext);
    const [myGroups, setMyGroups] = useState([]);
    console.log(myGroups);

    useEffect(() => {
        if (user?.email) {
            axios.get(`http://localhost:3000/my-groups/${user.email}`)
                .then(res => {
                    console.log(res);
                    se
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