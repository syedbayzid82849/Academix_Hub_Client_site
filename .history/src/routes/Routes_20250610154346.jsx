import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        ErrorElement: <ErrorPage />,
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:3000/all-course'),
                element: <Home></Home>
            },
            {
                path: '/login', 
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            }
        ],
    },
]);

export default router;
