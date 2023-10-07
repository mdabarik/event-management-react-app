import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Registration from "../pages/Registration/Registration";
import Home from "../pages/Home/Home";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import WorkShops from "../pages/WorkShops/WorkShops";
import Webinars from "../pages/Webinars/Webinars";
import CareerFairs from "../pages/CareerFairs/CareerFairs";
import Blogs from "../pages/Blogs/Blogs";
import ContactUs from "../pages/ContactUs/ContactUs";
import MainLayout from "../layout/MainLayout";
import AboutUs from "../pages/AboutUs/AboutUs";
import Conferences from "../pages/Conferences/Conferences";
import Seminars from "../pages/Seminars/Seminars";

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
                path: '/workshops',
                element: <WorkShops></WorkShops>
            },
            {
                path: '/webinars',
                element: <Webinars></Webinars>
            },
            {
                path: '/career-fairs',
                element: <CareerFairs></CareerFairs>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/contact-us',
                element: <ContactUs></ContactUs>
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
                path: '/about-us',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/conferences',
                element: <Conferences></Conferences>
            },
            {
                path: '/seminars',
                element: <Seminars></Seminars>
            }
        ]
    }
])

export default routes;