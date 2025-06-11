import React from 'react';
import { useLoaderData } from 'react-router';


const CourseDetails = () => {
    const singleCourse = useLoaderData();
    console.log(singleCourse);
      const { _id, title, image, description, duration, seats } = course;


    return (
        <div>

        </div>
    );
};

export default CourseDetails;