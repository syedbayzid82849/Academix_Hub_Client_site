import React from 'react';
import { useLoaderData } from 'react-router';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);

    return (
        <div>
            <h1>{singleCourse.title}</h1>
            <p>{singleCourse.description}</p>
            <p>Instructor: {singleCourse.instructor}</p>
            <p>Duration: {singleCourse.duration} hours</p>
            <p>Price: ${singleCourse.price}</p>
        </div>
        );
};

export default CourseDetails;