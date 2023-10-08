import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { AiOutlineLogout } from 'react-icons/ai';

import { CiLogin } from "react-icons/ci";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../providers/FirebaseAuthProvider";

const Navbar = () => {

    const { user, profileURL, profileName, loading } = useContext(FirebaseAuthContext);

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
                        <label tabIndex={0} className="lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm bg-slate-400 dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>
                    <Link className="normal-case text-xl ml-2 lg:ml-0" to="/">
                        <img className="w-[60px] h-[60px]" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">

                    {
                        loading ?
                            <span className="loading loading-spinner loading-md"></span>
                            :

                            user
                                ?
                                <div className="flex">
                                    <div className="dropdown dropdown-end">
                                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                            <div className="rounded-full">
                                                <img className="w-[70px] h-[70px] object-cover rounded-full" src={user.photoURL} alt="Profile" />
                                            </div>
                                        </label>
                                        <ul tabIndex={0} className="dropdown-content flex flex-col bg-[#0000004a] items-center  z-[1] shadow rounded-box w-32 py-5 gap-4">
                                            <li> {user.displayName} </li>
                                            <li className="">
                                                <button className="bg-[#db332a] py-2 px-3 flex items-center justify-center rounded-full normal-case text-white border-none hover:bg-[#b5100b] active:bg-[#b5100b]">
                                                    <AiOutlineLogout className="text-xl"></AiOutlineLogout>
                                                    <span className="text-[12px]">Logout</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>

                                </div>
                                :
                                <Link to="/login" className="btn bg-[#db332a] normal-case text-white border-none hover:bg-[#b5100b]">
                                    <CiLogin className="text-xl"></CiLogin>
                                    <span>Login</span>
                                </Link>
                    }

                </div>



            </nav>
        </div>
    );
};

export default Navbar;