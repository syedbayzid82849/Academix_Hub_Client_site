import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllCourse from "../pages/AllCourse/AllCourse";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch('http://localhost:3000/all-course'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: 
                <PrivateRoute></PrivateRoute>
            },
            {
                path: '/all-course/:id',
                loader: ({ params }) => fetch(`http://localhost:3000/all-course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/login',
                element: <Login></Login>
            }, 
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '*',
                element: <ErrorPage />
            }
        ],
    },
]);

export default router;
