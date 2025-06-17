import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { useEffect } from 'react';
import axios from 'axios';

const ManageCourse = () => {
    const { user } = useContext(AuthContext);

    useEffect(() => {
        axios.get(`https://academix-hub-server.vercel.app/menage-course/${user?.email}`)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [user])



    return (
        <div>
            
        </div>

    );
};

export default ManageCourse;