import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {

    const navLinks = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/workshops">Workshops</NavLink>
        </li>
        <li>
            <NavLink to="/webinars">Webinars</NavLink>
        </li>
        <li>
            <NavLink to="/career-fairs">Career Fairs</NavLink>
        </li>
        <li>
            <NavLink to="/blogs">Blogs</NavLink>
        </li>
        <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
    </>


    return (
        <div className="container mx-auto z-50 text-white">
            <nav className="navbar">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>
                <Link className="normal-case text-xl ml-2 lg:ml-0" to="/">Education</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <Link to="/login" className="btn btn-warning">Login</Link>
            </div>
        </nav>
        </div>
    );
};

export default Navbar;