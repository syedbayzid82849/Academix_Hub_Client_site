import React, { useEffect, useState, useContext } from "react";
import { AuthContext } from "../../../../context/AuthContext";
import axios from "axios";
import { motion } from "framer-motion";
import { NavLink } from "react-router";

export default function MyCourses() {
    const { user } = useContext(AuthContext);
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return;

        const fetchCourses = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`https://academix-hub-server-site.vercel.app/manage-course/${user.email}`);
                setCourses(response.data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching courses:", error);
                setLoading(false);
            }
        };

        fetchCourses();
    }, [user?.email]);

    if (loading) return <p className="p-6 text-center">Loading courses...</p>;

    if (!courses.length)
        return <p className="p-6 text-center">You are not enrolled in any courses yet.</p>;

    return (
        <div className="p-6 bg-gray-100 dark:bg-gray-900 min-h-screen">
            <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                My Created Courses ({courses.length})
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {courses.map(({ title, image, _id, createdAt }) => (
                    <motion.div
                        key={_id}
                        className="bg-white dark:bg-gray-800 shadow-md rounded-2xl overflow-hidden flex flex-col"
                        whileHover={{ scale: 1.05 }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, ease: 'easeOut' }}
                    >
                        {/* Image */}
                        <img
                            src={image || "https://placehold.co/400x200"}
                            alt={title}
                            className="w-full h-48 object-cover"
                        />

                        {/* Content */}
                        <div className="p-4 flex flex-col flex-1">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                                Added: {createdAt ? new Date(createdAt).toLocaleDateString() : "N/A"}
                            </p>

                            {/* Button always at bottom */}
                            <NavLink
                                to={`/courseDetails/${_id}`}
                                className="mt-auto inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-center"
                            >
                                View Details
                            </NavLink>
                        </div>
                    </motion.div>
                ))}
            </div>

        </div>
    );
}
