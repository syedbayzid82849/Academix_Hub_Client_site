import React from 'react';
import { NavLink } from 'react-router';
import { motion } from 'framer-motion';


const CourseCard = ({course}) => {
    const { _id, title, image, createdAt } = course;

    return (
        <div>
            <motion.div
                key={_id}
                className="bg-white shadow-md rounded-2xl overflow-hidden"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut' }}
            >

            </motion.div>
        </div>
    );
};

export default CourseCard;