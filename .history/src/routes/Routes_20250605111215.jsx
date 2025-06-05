import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <div>Hello World</div>
            },
            {
                path: '/login', 
                element: <Login
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
    },
]);

export default router;
