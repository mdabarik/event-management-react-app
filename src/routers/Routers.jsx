import { Outlet, createBrowserRouter } from "react-router-dom";
import { ErrorElement } from "../components/ErrorElement/ErrorElement";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Outlet></Outlet>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <h1>Home</h1>
            },
            {
                path: '/login',
                element: <h1>Login Page</h1>
            },
            {
                path: '/register',
                element: <h1>Registration Page</h1>
            }
        ]
    }
])

export default routes;