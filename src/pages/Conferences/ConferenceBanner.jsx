
import ConferenceImg from "../../assets/about-us.jpg";
import EventBg from '../../components/EventBanner/EventBg';

const ConferenceBanner = () => {
    return (
        <div className="h-[66vh] w-[100vw] flex items-center justify-center">
            <EventBg image={ConferenceImg}></EventBg>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">
                    Empowering: Innovations in Learning and Technology
                </h2>
                <p className="text-[10px] md:text-xl w-[60%] md:w-[60%] text-center  font-thin text-white my-4">
                    Exploring the Future of Learning Through Technology Integration, Pedagogical Advances, and Digital Transformation for Lifelong Success and Global Impact
                </p>
            </div>

        </div>
    );
};

export default ConferenceBanner;
