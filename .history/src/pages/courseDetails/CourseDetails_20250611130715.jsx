import React from 'react';
import { useLoaderData } from 'react-router';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
    const { _id, title, seats, instructorName, instructorEmail, image, } = singleCourse;

    return (
        <div>

        </div>
    );
};

export default CourseDetails;