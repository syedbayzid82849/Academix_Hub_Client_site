import React from 'react';

const Routes = () => {
    return (
        <div>

        </div>
    );
};

export default Routes;

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router";

import React from "react";
import ReactDOM from "react-dom/client";

const router = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
    },
]);