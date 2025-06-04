import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <div>Hello World</div>
            },
            
        ],
    },
]);

export default router;
