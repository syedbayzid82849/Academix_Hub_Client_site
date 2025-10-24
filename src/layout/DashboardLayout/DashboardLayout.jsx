import { useState, useContext } from "react";
import { NavLink, Outlet } from "react-router"; // ✅ Correct import
import {
  LayoutDashboard,
  BookOpen,
  User,
  LogOut,
  Menu,
  X,
  PlusCircle,
  Settings,
  CheckCircle,
} from "lucide-react";
import Swal from "sweetalert2";
import { AuthContext } from "../../context/AuthContext";

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);
  const { signOutUser } = useContext(AuthContext);

  const handleSignOut = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will be logged out!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Logout",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser()
          .then(() => {
            Swal.fire({
              title: "Logged Out!",
              text: "You have been logged out successfully.",
              icon: "success",
            });
          })
          .catch((error) => {
            console.log(error);
            Swal.fire({
              title: "Error!",
              text: "Something went wrong during logout.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <div className="flex min-h-screen bg-gray-900 text-white">
      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 bg-blue-900 text-white h-full p-4 flex flex-col transition-transform duration-300
        ${isOpen ? "translate-x-0 w-64" : "-translate-x-full w-64"} md:translate-x-0 md:w-64`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          {/* Logo */}
          <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
            <span className='font-bold text-2xl tracking-wide text-violet-600 dark:text-violet-400 italic'>Academix-Hub</span>
          </NavLink>
          <button
            onClick={toggleSidebar}
            className="md:hidden text-white hover:text-yellow-300"
          >
            <X size={24} />
          </button>
        </div>

        {/* Sidebar Links */}
        <nav className="flex flex-col gap-4">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-yellow-300 ${isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <LayoutDashboard size={18} /> Overview
          </NavLink>

          <NavLink
            to="/dashboard/my-courses"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-yellow-300 ${isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <BookOpen size={18} /> My Courses
          </NavLink>

          <NavLink
            to="/dashboard/add-course"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-yellow-300 ${isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <PlusCircle size={18} /> Add Course
          </NavLink>

          <NavLink
            to="/dashboard/manage-courses"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-yellow-300 ${isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <Settings size={18} /> Manage Courses
          </NavLink>

          <NavLink
            to="/dashboard/myEnrolls"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-yellow-300 ${isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <CheckCircle size={18} /> My Enrollments
          </NavLink>

          <NavLink
            to="/dashboard/profile"
            className={({ isActive }) =>
              `flex items-center gap-2 hover:text-yellow-300 ${isActive ? "text-yellow-400" : ""
              }`
            }
          >
            <User size={18} /> My Profile
          </NavLink>

          <button
            onClick={handleSignOut}
            className="flex items-center gap-2 hover:text-red-400 mt-auto"
          >
            <LogOut size={18} /> Logout
          </button>
        </nav>
      </div>

      {/* Mobile Top Navbar */}
      <div className="fixed md:hidden bg-blue-900 text-white w-full flex justify-between items-center p-4 z-30">
        {/* Logo */}
        <NavLink to="/" className="flex items-center space-x-2 text-xl font-bold">
          <span className='font-bold text-2xl tracking-wide text-violet-600 dark:text-violet-400 italic'>Academix-Hub</span>
        </NavLink>
        <button onClick={toggleSidebar} className="text-white">
          <Menu size={24} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 mt-16 md:mt-0 p-4 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
