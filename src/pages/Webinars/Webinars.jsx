import webinarImage from "../../assets/webinar-bg.jpg";
import WebinarBanner from "../../components/WebinarBanner/WebinarBanner";


const Webinars = () => {
    return (
        <div className="w-[100vw] h-[85vh] absolute top-0 left-0 -z-10">
            <WebinarBanner isFull={false} image={webinarImage}></WebinarBanner>
        </div>
    );
};

export default Webinars;