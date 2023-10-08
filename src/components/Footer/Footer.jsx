import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";

const Footer = () => {

    const servicesLinks = <>
        <Link to="/workshops" className="link link-hover">Workshops</Link>
        <Link to="/webinars" className="link link-hover">Webinars</Link>
        <Link to="/career-fairs" className="link link-hover">Career Fairs</Link>
        <Link to="/conferences" className="link link-hover">Conferences</Link>
        <Link to="/seminars" className="link link-hover">Seminars</Link>
    </>

    const companyLinks = <>
        <Link to="/about-us" className="link link-hover">About Us</Link>
        <Link to="/contact-us" className="link link-hover">Contact Us</Link>
        <Link to="/blogs" className="link link-hover">Blogs</Link>
        <Link to="/login" className="link link-hover">Login</Link>
        <Link to="/registration" className="link link-hover">Registration</Link>
    </>

    const socialLinks = <>
        <Link to="#">
            <FaTwitter className="text-3xl"></FaTwitter>
        </Link>
        <Link to="#">
            <BsYoutube className="text-3xl"></BsYoutube>
        </Link>
        <Link to="#">
            <BsFacebook className="text-3xl"></BsFacebook>
        </Link>
    </>

    return (
        <footer className="bg-neutral text-neutral-content">
            <div className="footer py-8 container mx-auto">
            <nav>
                <header className="footer-title">Services</header>
                {servicesLinks}
            </nav>
            <nav>
                <header className="footer-title">Company</header>
                {companyLinks}
            </nav>
            <nav>
                <header className="footer-title">Social</header>
                <div className="grid grid-flow-col gap-4">
                    {socialLinks}
                </div>
            </nav>
            </div>
        </footer>
    );
};

export default Footer;