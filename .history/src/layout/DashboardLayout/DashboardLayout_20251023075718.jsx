import { Outlet, NavLink } from "react-router-dom";
import { LayoutDashboard, BookOpen, User, LogOut } from "lucide-react"; // Lucide icons

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-900 text-white flex flex-col p-4">
        <h2 className="text-2xl font-bold mb-6">Academic Hub</h2>

        <nav className="flex flex-col gap-4">
          <NavLink to="/dashboard" className="flex items-center gap-2 hover:text-yellow-300">
            <LayoutDashboard size={18} /> Dashboard
          </NavLink>

          <NavLink to="/dashboard/courses" className="flex items-center gap-2 hover:text-yellow-300">
            <BookOpen size={18} /> My Courses
          </NavLink>

          <NavLink to="/dashboard/profile" className="flex items-center gap-2 hover:text-yellow-300">
            <User size={18} /> My Profile
          </NavLink>

          <NavLink to="/logout" className="flex items-center gap-2 hover:text-red-300 mt-auto">
            <LogOut size={18} /> Logout
          </NavLink>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;

