import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Navbar.css";
import { AiOutlineLogout } from 'react-icons/ai';

import { CiLogin } from "react-icons/ci";
import { useContext } from "react";
import { FirebaseAuthContext } from "../../providers/FirebaseAuthProvider";

const Navbar = () => {
    const { user, loading, loggedIn, logOut } = useContext(FirebaseAuthContext);

    const handleLogout = () => {
        logOut()
            .then(() => {
                // log out success
            })
            .catch(() => {
                // log out fail
            })
    }

    const navLinks = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
            <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
        {
            !user ? "" :
                <>
                    <li>
                        <NavLink to="/conferences">Conferences</NavLink>
                    </li>
                    <li>
                        <NavLink to="/seminars">Seminars</NavLink>
                    </li>
                </>
        }
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
                        <img className="w-[40px] h-[40px] md:w-[60px] md:h-[60px]" src={Logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    <p>{loggedIn}</p>

                    {
                        loading ?
                            <span className="loading loading-spinner loading-md"></span>
                            :

                            user
                                ?

                                <div className="flex gap-3 items-center justify-center">
                                    <div className="flex items-center flex-col-reverse md:flex-row gap-2">
                                        <div>
                                            <p className="text-[10px] md:text-sm">{user.displayName}</p>
                                        </div>
                                        <div className="rounded-full">
                                            <img className="w-[40px] h-[40px] border-[#f0ebeb8d] border-[1px] object-cover rounded-full" src={user.photoURL} alt="Profile" />
                                        </div>
                                    </div>
                                    <div onClick={handleLogout} className="">
                                        <button className="bg-[#db332a] py-2 px-3 flex items-center justify-center rounded-full normal-case text-white border-none hover:bg-[#b5100b] active:bg-[#b5100b]">
                                            <AiOutlineLogout className="text-xl"></AiOutlineLogout>
                                            <span className="text-[12px]">Logout</span>
                                        </button>
                                    </div>
                                </div>


                                :
                                <Link to="/login" className="px-3 py-2 bg-[#db332a] normal-case flex gap-1 text-white border-none hover:bg-[#b5100b]">
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