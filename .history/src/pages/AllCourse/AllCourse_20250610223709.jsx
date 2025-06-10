import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';


const AllCourse = () => {
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    console.log(getAllCourses, loading);

    // Fetching courses data
    useEffect(() => {
        getAllCourses()
            .then(res => setCourses(res))
            .catch(error => console.error(error));
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }




        return (

    );
    };

    export default AllCourse;