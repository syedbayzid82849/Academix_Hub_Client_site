import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../../context/AuthContext';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const {user } =useContext(AuthContext);
    
    const { _id, title, seats, instructorName, instructorEmail, image, enrolled, duration, description, createdAt } = singleCourse;

    return (
        <div>

        </div>
    );
};

export default CourseDetails;