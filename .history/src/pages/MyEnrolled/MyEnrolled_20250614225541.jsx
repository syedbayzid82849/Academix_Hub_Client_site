import React from 'react';
import { useLoaderData } from 'react-router';

const MyEnrolled = () => {
    const enrolledCourses = useLoaderData();
    

    return (
        <div>
            MyEnrolled
        </div>
    );
};

export default MyEnrolled;