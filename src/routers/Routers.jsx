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
import PrivateRouter from "./PrivateRouter/PrivateRouter";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                loader: () => fetch("./services.json"),
                element: <Home></Home>
            },
            {
                path: '/workshops',
                element: <PrivateRouter><WorkShops></WorkShops></PrivateRouter>
            },
            {
                path: '/webinars',
                element: <PrivateRouter><Webinars></Webinars></PrivateRouter>
            },
            {
                path: '/career-fairs',
                element: <PrivateRouter><CareerFairs></CareerFairs></PrivateRouter>
            },
            {
                path: '/blogs',
                element: <PrivateRouter><Blogs></Blogs></PrivateRouter>
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