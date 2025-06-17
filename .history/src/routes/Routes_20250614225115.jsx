import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import AllCourse from "../pages/AllCourse/AllCourse";
import CourseDetails from "../pages/courseDetails/CourseDetails";
import AddCourse from "../pages/AddCourse/AddCourse";
import PrivateRoute from "./PrivateRoute";
import ManageCourse from "../pages/MenageCouse/MenageCourse";
import EditCourse from "../pages/EditCourse/EditCourse";
import MyEnrolled from "../pages/MyEnrolled/MyEnrolled";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                loader: () => fetch('https://academix-hub-server.vercel.app/all-course'),
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <AllCourse></AllCourse>
            },
            {
                path: '/all-course/:id',
                loader: ({ params }) => fetch(`https://academix-hub-server.vercel.app/all-course/${params.id}`),
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/add-course',
                element:
                    <PrivateRoute>
                        <AddCourse></AddCourse>
                    </PrivateRoute>
            },
            {
                path: '/manage-courses',
                loader: ({ params }) => fetch(`https://academix-hub-server.vercel.app/menage-course/${params.email}`),
                element:
                    <PrivateRoute>
                        <ManageCourse></ManageCourse>
                    </PrivateRoute>
            },
            {
                path: '/edit-course/:id',
                loader: ({ params }) => fetch(`https://academix-hub-server.vercel.app/all-course/${params.id}`),
                element:
                    <PrivateRoute>
                        <EditCourse></EditCourse>
                    </PrivateRoute>
            },
            {
                path: '/myEnrolled/:email',
                loader: ({ params }) => fetch(`https://academix-hub-server.vercel.app/all-course/${params.email}`),
                element:
                    <PrivateRoute>
                        <MyEnrolled></MyEnrolled>
                    </PrivateRoute>
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
