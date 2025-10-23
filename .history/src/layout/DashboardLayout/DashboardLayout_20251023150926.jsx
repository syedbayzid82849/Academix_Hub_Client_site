import { useState } from "react";
import { NavLink, Outlet } from "react-router"; // react-router-dom use করতে হবে
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

const DashboardLayout = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <div className="flex min-h-screen ">
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 z-50 bg-blue-900 text-white h-full p-4 flex flex-col transition-all duration-300
        ${isOpen ? "w-64" : "w-0 md:w-64"} overflow-hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold hidden md:block">Academic Hub</h2>
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
              `flex items-center gap-2 hover:text-yellow-300 ${isActive && window.location.pathname === "/dashboard" ? "text-yellow-400" : ""
              }`
            }

          >
            <LayoutDashboard size={18} /> Overview
          </NavLink>

          <NavLink
            to="/dashboard/courses"
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

          <NavLink
            to="/logout"
            on
            className="flex items-center gap-2 hover:text-red-400 mt-auto"
          >
            <LogOut size={18} /> Logout
          </NavLink>
        </nav>
      </div>

      {/* Mobile Navbar */}
      <div className="fixed md:hidden bg-blue-900 text-white w-full flex justify-between items-center p-4 z-40">
        <h2 className="text-lg font-semibold">Academic Hub</h2>
        <button onClick={toggleSidebar} className="text-white">
          <Menu size={24} />
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 md:ml-64 mt-16 md:mt-0 transition-all duration-300">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
