import React from 'react';

const CourseCard = () => {
    
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
                <img
                    src={image}
                    alt={title}
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-sm text-gray-500 mb-2">
                        Added: {new Date(createdAt).toLocaleDateString()}
                    </p>
                    <NavLink
                        to={`/all-course/${_id}`}
                        className="inline-block mt-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        View Details
                    </NavLink>
                </div>
            </motion.div>
        </div>
    );
};

export default CourseCard;