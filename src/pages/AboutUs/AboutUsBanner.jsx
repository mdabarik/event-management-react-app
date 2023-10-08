import AOS from 'aos';
import 'aos/dist/aos.css';
import Swal from "sweetalert2";
import AboutUsImg from "../../assets/about-us.jpg";
import EventBg from '../../components/EventBanner/EventBg';

const AboutUsBanner = () => {
    const handleClickCTA = () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Thanks for booking this event.',
            showConfirmButton: false,
            timer: 1500
        })
    }
    return (
        <div className="h-[66vh] w-[100vw] flex items-center justify-center">
            <EventBg image={AboutUsImg}></EventBg>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">
                    Welcome to our educational event
                </h2>
                <p className="text-[10px] md:text-xl w-[60%] md:w-[60%] text-center  font-thin text-white my-4">
                    We are passionate about empowering individuals and organizations through transformative educational and training events. With a commitment to excellence and a focus on innovation, we strive to create meaningful learning experiences that inspire, educate, and elevate.
                </p>
                {/* <button onClick={handleClickCTA} className="px-3 py-2 text-sm md:text-lg rounded-lg bg-[#db332a] normal-case text-white border-none hover:bg-[#b5100b]">Ready to Book?</button> */}
            </div>

        </div>
    );
};

export default AboutUsBanner;
