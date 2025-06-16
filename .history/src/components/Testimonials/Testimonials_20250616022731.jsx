import React from 'react';

const Testimonials = () => {
    const testimonials =
        [
            {
                "id": 1,
                "name": "Abdur Rahman",
                "image": "/user1.png",
                "rating": 5,
                "feedback": "This platform helped me enhance my career path greatly!"
            },
            {
                "id": 2,
                "name": "Tanvir Hasan",
                "image": "/user2.png",
                "rating": 5,
                "feedback": "The courses are well structured and easy to follow. Highly recommended!"
            },
            {
                "id": 3,
                "name": "Naheyan khan",
                "image": "/user3.png",
                "rating": 4,
                "feedback": "I learned a lot from the courses. The instructors are very helpful."
            }

        ];

    return (
        <section className="my-16 px-4">
            <h2 className="text-3xl font-bold text-center mb-10">What Our Students Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map(({ id, name, image, rating, feedback}) => (
                    <div key={id} className="bg-white p-6 rounded-2xl shadow-lg">
                        <img src="/user.png" alt="Student" className="w-16 h-16 rounded-full mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-center">{name}</h3>
                        <p className="text-yellow-400 text-center my-2">
                            {'★'.repeat(rating)}{'☆'.repeat(5 - rating)}
                        </p>
                        <p className="text-gray-600 text-sm text-center">{feed}</p>
                    </div>
                ))}
            </div>
        </section>

    );
};

export default Testimonials;