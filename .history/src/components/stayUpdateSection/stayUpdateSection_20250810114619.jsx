import React, { useState } from 'react';
import Swal from 'sweetalert2';

const StayUpdateSection = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = () => {
        if (!email) {
            Swal.fire({
                icon: 'warning',
                title: 'Email Required!',
                text: 'Please enter a valid email address.',
            });
            return;
        }

        Swal.fire({
            icon: 'success',
            title: 'Subscribed!',
            text: 'You have successfully subscribed to our newsletter.',
        });
        setEmail('');
    };

    return (
        <section className="my-24 px-3">
            <div className="max-w-7xl mx-auto bg-gradient-to-br from-violet-500 to-blue-600 dark:from-violet-700 dark:to-blue-800 py-10 rounded-3xl text-center shadow-xl">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Stay Updated!</h2>
                <p className="text-gray-200 mb-6 text-sm md:text-base">
                    Subscribe to our newsletter to receive the latest course updates, promotions & offers.
                </p>

                <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mt-4">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                        className="w-full sm:w-96 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-white transition"
                    />
                    <button
                        onClick={handleSubscribe}
                        className="bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg hover:bg-blue-100 transition-all"
                    >
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    );
};

export default StayUpdateSection;
