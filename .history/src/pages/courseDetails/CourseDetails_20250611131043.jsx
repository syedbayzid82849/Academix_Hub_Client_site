import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    const {user } =useContext()
    const { _id, title, seats, instructorName, instructorEmail, image, enrolled, duration, description, createdAt } = singleCourse;

    return (
        <div>

        </div>
    );
};

export default CourseDetails;