import React from 'react';
import Swal from 'sweetalert2';

const StayUpdateSection = () => {
    const handleSubscrib = () => {
        Swal.fire({
            icon: 'success',
            title: 'Your Subscr Updated!',
            text: 'Your course has been successfully updated.',
        });
    }
    return (
        <section className='my-16 px-4 border-2 rounded-3xl mt-28'>
            <div className=" p-8 rounded-2xl text-center">
                <h2 className="text-2xl font-bold mb-2 text-white">Stay Updated!</h2>
                <p className="mb-4 text-gray-600">Subscribe to our newsletter to get latest course updates.</p>
                <div className="flex justify-center gap-2">
                    <input type="email" placeholder="Enter your email" className="px-16 py-2 rounded-l-lg border" />
                    <button onClick={handleSubscrib()} className="bg-blue-600 text-white px-4 py-2 rounded-r-lg">Subscribe</button>
                </div>
            </div>

        </section>
    );
};

export default StayUpdateSection;