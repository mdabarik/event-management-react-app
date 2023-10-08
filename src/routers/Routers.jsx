import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import ContactUs from "../pages/ContactUs/ContactUs";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Conferences from "../pages/Conferences/Conferences";
import Seminars from "../pages/Seminars/Seminars";
import PrivateRouter from "./PrivateRouter/PrivateRouter";
import EventDetails from "../pages/EventDetails/EventDetails";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/event/:id',
                element: <PrivateRouter><EventDetails></EventDetails></PrivateRouter>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
            },
            {
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/conferences',
                element: <PrivateRouter><Conferences></Conferences></PrivateRouter>
            },
            {
                path: '/seminars',
                element: <PrivateRouter><Seminars></Seminars></PrivateRouter>
            }
        ]
    }
])

export default routes;