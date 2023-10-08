
import SeminarImg from "../../assets/webinar-bg.jpg";
import EventBg from '../../components/EventBanner/EventBg';

const SeminarBanner = () => {
    return (
        <div className="h-[66vh] w-[100vw] flex items-center justify-center">
            <EventBg image={SeminarImg}></EventBg>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">
                    Revolutionizing: Navigating the Digital Frontier
                </h2>
                <p className="text-[10px] md:text-xl w-[60%] md:w-[60%] text-center  font-thin text-white my-4">
                    Transformative Strategies, Cutting-Edge Technologies, and Inclusive Pedagogies for 21st Century Learners: A Seminar on Shaping the Future of Education
                </p>
            </div>

        </div>
    );
};

export default SeminarBanner;
