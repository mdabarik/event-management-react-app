import BgImage from "../../components/BgImage/BgImage";
import webinarImage from "../../assets/webinar-bg.jpg";


const Webinars = () => {
    return (
        <div>
            <h1 className="text-center text-3xl text-white">This is Webinar</h1>
            <BgImage image={webinarImage}></BgImage>
        </div>
    );
};

export default Webinars;