import React from 'react';
import { useLoaderData } from 'react-router';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);

    return (    );
};

export default CourseDetails;