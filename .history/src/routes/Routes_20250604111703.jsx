import {
    createBrowserRouter
} from "react-router";

const outer = createBrowserRouter([
    {
        path: "/",
        element: <div>Hello World</div>,
    },
]);

export default Routes;
