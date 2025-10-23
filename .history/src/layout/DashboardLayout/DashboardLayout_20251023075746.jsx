import { Outlet, NavLink } from "react-router";
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

// import { Outlet, NavLink } from "react-router-dom";
// import { useState } from "react";
// import { LayoutDashboard, BookOpen, User, LogOut, Menu, X } from "lucide-react";

// const DashboardLayout = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="flex min-h-screen">
//       {/* Sidebar (Desktop & Mobile) */}
//       <div
//         className={`fixed md:static top-0 left-0 h-full bg-blue-900 text-white flex flex-col p-4 transition-all duration-300 z-50
//         ${isOpen ? "w-64" : "w-0 md:w-64 overflow-hidden"}`}
//       >
//         <h2 className="text-2xl font-bold mb-6 md:block hidden">Academic Hub</h2>

//         {/* Close button (mobile) */}
//         <button
//           className="md:hidden absolute top-4 right-4 text-white"
//           onClick={() => setIsOpen(false)}
//         >
//           <X size={24} />
//         </button>

//         <nav className="flex flex-col gap-4 mt-10 md:mt-0">
//           <NavLink to="/dashboard" className="flex items-center gap-2 hover:text-yellow-300">
//             <LayoutDashboard size={18} /> Dashboard
//           </NavLink>

//           <NavLink to="/dashboard/courses" className="flex items-center gap-2 hover:text-yellow-300">
//             <BookOpen size={18} /> My Courses
//           </NavLink>

//           <NavLink to="/dashboard/profile" className="flex items-center gap-2 hover:text-yellow-300">
//             <User size={18} /> My Profile
//           </NavLink>

//           <NavLink to="/logout" className="flex items-center gap-2 hover:text-red-300 mt-auto">
//             <LogOut size={18} /> Logout
//           </NavLink>
//         </nav>
//       </div>

//       {/* Main Content */}
//       <div className="flex-1 bg-gray-50 p-4 md:p-6 overflow-y-auto w-full">
//         {/* Menu Button (only visible on mobile) */}
//         <button
//           className="md:hidden mb-4 text-blue-900"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           <Menu size={28} />
//         </button>

//         <Outlet />
//       </div>
//     </div>
//   );
// };

// export default DashboardLayout;
