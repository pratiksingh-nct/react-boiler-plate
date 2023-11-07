import * as React from 'react';
import BaseLayout from "../layouts/BaseLayout";
import Login from "../pages/Login";

// Define the application's routes using React Router.
const routes: any[] = [
    {
        path: "",
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <Login />, // The login page.
            },
        ],
    },
];

export default routes;
