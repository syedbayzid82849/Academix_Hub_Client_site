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
        <div className="navbar bg-base-100 shadow-sm">
            {/* Navbar Start */}
            <div className="navbar-start">
                {/* Mobile Dropdown */}
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                        {user ? (
                            <>
                                <li><NavLink to="/profile">{user?.displayName || "Profile"}</NavLink></li>
                                <li><button onClick={handleSignOut}>Logout</button></li>
                            </>
                        ) : (
                            <>
                                <li><NavLink to="/login">Sign in</NavLink></li>
                                <li><NavLink to="/register">Sign up</NavLink></li>
                            </>
                        )}
                    </ul>
                </div>
                {/* Logo */}
                <NavLink to="/" className="btn btn-ghost text-xl">
                    <span className='text-violet-600 italic font-bold'>HobbyHub</span>
                </NavLink>
            </div>

            {/* Navbar Center */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            {/* Navbar End */}
            <div className="navbar-end hidden lg:flex items-center gap-4">
                {user ? (
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
                                    <FaCircleUser className="text-3xl hover:text-violet-600" />
                                )}
                            </NavLink>
                        </div>
                        <button onClick={handleSignOut} className="btn btn-sm btn-error text-white">
                            Logout
                        </button>
                    </>
                ) : (
                    <>
                        <NavLink to="/login" className="btn btn-sm">
                            Sign in
                        </NavLink>
                        <NavLink to="/register" className="btn btn-sm btn-primary text-white">
                            Sign up
                        </NavLink>
                    </>
                )}
            </div>
        </div
    );
};

export default Navbar;
