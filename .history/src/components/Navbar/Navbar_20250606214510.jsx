import { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../../context/AuthContext';
import { FaCircleUser } from "react-icons/fa6";
import Swal from 'sweetalert2';



const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { user, signOutUser } = useContext(AuthContext);
    console.log(user);

    const navLinkClass = ({ isActive }) =>
        isActive ? 'text-violet-600 font-semibold' : 'text-gray-800';

    const links =
        (
            <>
                <NavLink to="/" className={navLinkClass}>Home</NavLink>
                <NavLink to="/jobs" className={navLinkClass}>Jobs</NavLink>
                <NavLink to="/create-job" className={navLinkClass}>Add A Job</NavLink>
                <NavLink to="/about" className={navLinkClass}>About</NavLink>
            </>
        );

    // user sign out 
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
        <header className="p-2 bg-gray-100 text-gray-800 shadow-md">
            <div className="container mx-auto flex justify-between items-center h-16">
                {/* Logo */}
                <NavLink to="/" className=" flex items-center space-x-2 text-xl font-bold">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 32 32" className="w-8 h-8 text-violet-600">
                        <path d="M27.912 7.289..."></path>
                        <path d="M22.094 19.451..."></path>
                    </svg>
                    <span className=' font-bold text-2xl tracking-wide text-violet-600 italic'>HobbyHub</span>
                </NavLink>

                {/* Desktop Menu */}
                <nav className="hidden lg:flex space-x-6 items-center">
                    {links}
                </nav>

                {/* Desktop Buttons */}
                <div className="hidden lg:flex gap-5 flex items-center">
                    {
                        user ? (
                            <>
                                <div className="tooltip tooltip-bottom" data-tip={user?.displayName || "User"}>
                                    <NavLink to="/profile">
                                        {user?.photoURL ? (
                                            <img
                                                className="w-10 h-10 border border-black rounded-full"
                                                src={user.photoURL}
                                                alt="Profile"
                                            />
                                        ) : (
                                            <FaCircleUser className="text-4xl hover:text-violet-600" />
                                        )}
                                    </NavLink>
                                </div>

                                <button
                                    onClick={handleSignOut}
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="px-4 py-2 rounded border border-gray-400 hover:bg-gray-200"
                                >
                                    Sign in
                                </NavLink>
                                <NavLink
                                    to="/register"
                                    className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                >
                                    Sign up
                                </NavLink>
                            </>
                        )
                    }

                </div>

                {/* Mobile Menu Button */}
                {/* Mobile Navbar (DaisyUI style) */}
                <div className="navbar bg-base-100 lg:hidden shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {/* Replace with your own links */}
                                <li><NavLink to="/">Home</NavLink></li>
                                <li><NavLink to="/jobs">Jobs</NavLink></li>
                                <li><NavLink to="/create-job">Add A Job</NavLink></li>
                                <li><NavLink to="/about">About</NavLink></li>

                                {
                                    user ? (
                                        <>
                                            <li>
                                                <NavLink to="/profile">
                                                    {user?.photoURL ? (
                                                        <img
                                                            className="w-8 h-8 rounded-full border border-black"
                                                            src={user.photoURL}
                                                            alt="User"
                                                        />
                                                    ) : (
                                                        <FaCircleUser className="text-xl" />
                                                    )}
                                                    {user.displayName || "User"}
                                                </NavLink>
                                            </li>
                                            <li>
                                                <button
                                                    onClick={handleSignOut}
                                                    className="text-left"
                                                >
                                                    Logout
                                                </button>
                                            </li>
                                        </>
                                    ) : (
                                        <>
                                            <li><NavLink to="/login">Sign In</NavLink></li>
                                            <li><NavLink to="/register">Sign Up</NavLink></li>
                                        </>
                                    )
                                }
                            </ul>
                        </div>
                        <NavLink to="/" className="btn btn-ghost normal-case text-xl text-violet-600 italic font-bold">
                            HobbyHub
                        </NavLink>
                    </div>
                </div>

        </header>
    );
};

export default Navbar;
