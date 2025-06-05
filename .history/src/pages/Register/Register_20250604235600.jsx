import React from 'react';
import animationData from '../../components/lotties/package.json';
import Lottie from 'lottie-react';

const Register = () => {
    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;


    };
    return (
        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen px-4">
            {/* Registration Form */}
            <div className="w-full md:w-1/2 bg-white md:p-8 rounded-xl shadow-lg">
                <h2 className="text-2xl font-bold mb-4">Register</h2>
                <form onSubmit={handleRegister}>
                    <input name="name" type="text" placeholder="Name" className="input input-bordered w-full mb-3" required />
                    <input name="photo" type="text" placeholder="Photo URL" className="input input-bordered w-full mb-3" required />
                    <input name="email" type="email" placeholder="Email" className="input input-bordered w-full mb-3" required />
                    <input name="password" type="password" placeholder="Password" className="input input-bordered w-full mb-3" required />
                    <input name="confirmPassword" type="password" placeholder="Confirm Password" className="input input-bordered w-full mb-3" required />
                    <button type="submit" className="btn btn-primary w-full">Register</button>
                </form>
            </div>
            {/* Lottie Animation */}
            <div className="w-full md:w-1/2">
                <Lottie animationData={animationData} loop={true} />
            </div>
        </div>

    );
};

export default Register;