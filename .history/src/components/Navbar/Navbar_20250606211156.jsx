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
                <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-800">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>

            {/* Mobile Dropdown */}
            {isMenuOpen && (
                <div className="lg:hidden bg-white border-t border-gray-200 shadow-md">
                    <nav className="flex flex-col p-4 space-y-2">
                        {links}
                    </nav>
                    <div className="flex flex-col px-4 pb-4 space-y-2">
                        {
                            user ? (
                                <>
                                    <div className='flex flex-row-reverse items-center justify-around mt-4'>
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

                                        <div>
                                            <button
                                                onClick={handleSignOut}
                                                className="px-4 py-2 font-semibold rounded bg-violet-600 text-white hover:bg-violet-700"
                                            >
                                                Logout
                                            </button>
                                        </div>
                                    </div>
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
                </div>
            )}
        </header>
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;
