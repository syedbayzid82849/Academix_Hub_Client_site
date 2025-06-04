
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";\
const Routes = () => {
    return (
        <div>

        </div>
    );
};

export default Routes;


import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
    },
]);