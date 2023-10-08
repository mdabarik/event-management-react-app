
import Swal from "sweetalert2";
import AboutUsImg from "../../assets/about-us.jpg";
import EventBg from '../../components/EventBanner/EventBg';

const ContactUsBanner = () => {
    return (
        <div className="h-[66vh] w-[100vw] flex items-center justify-center">
            <EventBg image={AboutUsImg}></EventBg>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">
                    Reach Out to Us – Your Partner in Excellence
                </h2>
                <p className="text-[10px] md:text-xl w-[60%] md:w-[60%] text-center  font-thin text-white my-4">
                    Connect with Our Team: Where Expertise Meets Your Needs, and Relationships Transform into Results - Your Gateway to Personalized Solutions and Lasting Collaborations with Passionate Professionals Eager to Enhance Your Experience and Achieve Your Goals Together
                </p>
            </div>

        </div>
    );
};

export default ContactUsBanner;
