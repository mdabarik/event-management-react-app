import { Link } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Logo from "../../assets/logo.png";


const Footer = () => {

    const servicesLinks = <>
        <Link to="/workshops" className="link link-hover">Workshops</Link>
        <Link to="/webinars" className="link link-hover">Webinars</Link>
        <Link to="/career-fairs" className="link link-hover">Career Fairs</Link>
        <Link to="/conferences" className="link link-hover">Conferences</Link>
        <Link to="/seminars" className="link link-hover">Seminars</Link>
    </>

    const companyLinks = <>
        <Link to="/home" className="link link-hover">Home</Link>
        <Link to="/about-us" className="link link-hover">About Us</Link>
        <Link to="/contact-us" className="link link-hover">Contact Us</Link>
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
            <div className="py-10 container mx-auto">
                <div className="flex flex-col justify-center items-center gap-1">
                    <img className="w-[80px] h-[80px]" src={Logo} alt="logo" />
                    <span>Educational Event</span>
                </div>
                <div className="flex items-center justify-center gap-4 mt-4 text-white link">
                    {
                        companyLinks
                    }
                </div>
                <div className="flex items-center justify-center gap-4 mt-6 text-white link">
                    {
                        socialLinks
                    }
                </div>

            </div>
        </footer>
    );
};

export default Footer;