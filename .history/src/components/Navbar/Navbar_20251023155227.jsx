import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { FaCircleUser } from "react-icons/fa6";
import Swal from 'sweetalert2';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);


    const links = (isMobile = false) => (
        <ul className="list-none flex flex-col lg:flex-row gap-4 lg:gap-6">
            <li>
                <NavLink
                    to="/"
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/courses"
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                    }
                >
                    All Courses
                </NavLink>
            </li>
            <li>
                <NavLink
                to="/"
                >
                    Membership
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/faqs"
                    onClick={() => isMobile && setIsMenuOpen(false)}
                    className={({ isActive }) =>
                        isActive ? "text-violet-600 dark:text-violet-400 font-semibold" : "text-gray-800 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400"
                    }
                >
                    FAQs
                </NavLink>
            </li>
        </ul>
    );

    const handleSignOut = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will be logged out!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Logout"
        }).then((result) => {
            if (result.isConfirmed) {
                signOutUser()
                    .then(() => {
                        Swal.fire({
                            title: "Logged Out!",
                            text: "You have been logged out successfully.",
                            icon: "success"
                        });
                    })
                    .catch(error => {
                        console.log(error);
                        Swal.fire({
                            title: "Error!",
                            text: "Something went wrong during logout.",
                            icon: "error"
                        });
                    });
            }
        });
    };

    return (
        <header className="px-4 bg-white dark:bg-[#131313] text-gray-800 dark:text-gray-100 shadow-md sticky top-0 z-50 transition-colors duration-300">
            <div className=" flex justify-between items-center h-16">
                {/* Logo */}
                <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
                    <span className='font-bold text-2xl tracking-wide text-violet-600 dark:text-violet-400 italic'>Academix-Hub</span>
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6 items-center">
                    {links()}
                </nav>

                {/* Right Side Buttons */}
                <div className="hidden lg:flex gap-4 items-center">
                    {
                        user ? (
                            <>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                    <NavLink to="/dashboard/profile">
                                        {user?.photoURL ? (
                                            <img
                                                className="w-10 h-10 border border-black rounded-full object-cover"
                                                src={user?.photoURL}
                                                alt="Profile"
                                            />
                                        ) : (
                                            <FaCircleUser className="text-4xl text-gray-700 dark:text-gray-200 hover:text-violet-600 dark:hover:text-violet-400" />
                                        )}
                                    </NavLink>
                                </div>
                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-700"
                                >
                                    Sign in
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
                                >
                                    Sign up
                                </NavLink>
                            </>
                        )
                    }
                </div>

                {/* Mobile Menu Button */}
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke="currentColor"
                        className="w-6 h-6 text-gray-800 dark:text-gray-200">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                            d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-md">
                    <nav className="flex flex-col p-4 space-y-2">
                        {links(true)}
                    </nav>
                    <div className="flex flex-col px-4 pb-4 space-y-2">
                        {
                            user ? (
                                <div className='flex flex-row-reverse items-center justify-between mt-4'>
                                    <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                        <NavLink to="/profile">
                                            {user?.photoURL ? (
                                                <img
                                                    className="w-10 h-10 border border-black rounded-full"
                                                    src={user.photoURL}
                                                    alt="Profile"
                                                />
                                            ) : (
                                                <FaCircleUser className="text-4xl text-gray-800 dark:text-gray-100 hover:text-violet-600 dark:hover:text-violet-400" />
                                            )}
                                        </NavLink>
                                    </div>
                                    <button
                                        onClick={handleSignOut}
                                        className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
                                    >
                                        Logout
                                    </button>
                                </div>
                            ) : (
                                <>
                                    <NavLink
                                        to="/login"
                                        className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200 dark:border-gray-500 dark:hover:bg-gray-700"
                                    >
                                        Sign in
                                    </NavLink>
                                    <NavLink
                                        to="/register"
                                        className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600"
                                    >
                                        Sign up
                                    </NavLink>
                                </>
                            )
                        }
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
