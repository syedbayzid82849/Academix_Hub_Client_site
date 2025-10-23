import { Outlet, NavLink } from "react-router";

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-5 hidden md:block">
        <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
        <ul className="space-y-3">
          <li><NavLink to="/dashboard/overview">Overview</NavLink></li>
          <li><NavLink to="/dashboard/my-courses">My Courses</NavLink></li>
          <li><NavLink to="/dashboard/add-course">Add Course</NavLink></li>
          <li><NavLink to="/dashboard/profile">Profile</NavLink></li>
        </ul>
      </div>

      {/* Mobile Sidebar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-blue-900 text-white flex justify-around p-2">
        <NavLink to="/dashboard/overview">Home</NavLink>
        <NavLink to="/dashboard/my-courses">Courses</NavLink>
        <NavLink to="/dashboard/add-course">Add</NavLink>
        <NavLink to="/dashboard/profile">Profile</NavLink>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-50 p-6 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
