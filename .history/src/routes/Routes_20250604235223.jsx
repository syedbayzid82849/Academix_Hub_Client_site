import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";

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
                element: <div>Login Page</div>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
    },
]);

export default router;
