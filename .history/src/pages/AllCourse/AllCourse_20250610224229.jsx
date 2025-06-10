import React, { useEffect, useState, useContext } from 'react';
import { NavLink } from 'react-router'; // Ensure this is imported from 'react-router-dom'
import { motion } from 'framer-motion';
import { AuthContext } from '../../context/AuthContext'; // Adjust path according to your file structure
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'; // Adjust path according to your file structure


const AllCourse = () => {
    // Destructure getAllCourses function and loading state from AuthContext
    const { getAllCourses, loading } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    // console.log(getAllCourses, loading); // This console.log is fine for debugging

    // Fetching courses data when the component mounts
    useEffect(() => {
        // Ensure getAllCourses function exists before calling it
        if (getAllCourses) {
            getAllCourses()
                .then(res => setCourses(res)) // On successful fetch, update the courses state
                .catch(error => {
                    // Log any errors that occur during fetching
                    console.error("Error fetching courses in AllCourse component:", error);
                    // You might want to set an error state here to display a user-friendly message
                });
        }
    }, [getAllCourses]); // Dependency array: re-run useEffect if getAllCourses changes

    // --- Conditional Rendering for Loading State ---
    // If 'loading' is true, display the LoadingSpinner
    if (loading) {
        // Wrap LoadingSpinner in a flex container to center it vertically and horizontally
        // min-h-[400px] ensures there's enough space for the spinner to be centered
        return (
            <section className="my-16 px-4 max-w-6xl mx-auto min-h-[400px] flex items-center justify-center">
                <LoadingSpinner />
            </section>
        );
    }

    // --- Conditional Rendering for No Courses Available ---
    // If 'loading' is false but no courses are found, display a "No courses available" message
    if (courses.length === 0) {
        return (
            <section className="my-16 px-4 max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
                <p className="text-center text-gray-600">No courses available at the moment.</p>
            </section>
        );
    }

    // --- Main Course Display ---
    // If not loading and courses are available, render the course grid
    return (
        <section className="my-16 px-4 max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-10">Our Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Map through the courses array and render each course as a card */}
                {courses.map(({ title, image, _id, createdAt }) => (
                    <motion.div
                        key={_id} // Unique key for each course item
                        className="bg-white shadow-md rounded-2xl overflow-hidden"
                        whileHover={{ scale: 1.05 }} // Framer Motion animation on hover
                        initial={{ opacity: 0, y: 30 }} // Initial animation state
                        animate={{ opacity: 1, y: 0 }} // Animation target state
                        transition={{ duration: 0.4, ease: 'easeOut' }} // Animation transition properties
                    >
                        {/* Course Image */}
                        <img
                            src={image}
                            alt={title}
                            className="w-full h-48 object-cover"
                            // Fallback image in case the original image fails to load
                            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/400x250/E0E0E0/444444?text=Image+Not+Found'; }}
                        />
                        <div className="p-4">
                            {/* Course Title */}
                            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                            {/* Course Added Date */}
                            <p className="text-sm text-gray-500 mb-2">
                                Added: {new Date(createdAt).toLocaleDateString()}
                            </p>
                            {/* NavLink to view course details */}
                            <NavLink
                                to={`/course/${_id}`} // Dynamic route for course details
                                className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                            >
                                View Details
                            </NavLink>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AllCourse;