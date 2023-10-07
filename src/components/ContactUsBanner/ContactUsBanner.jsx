
import ImageContactUs from "../../assets/contact-us-bg.jpg";
import BgImage from "../BgImage/BgImage";

const ContactUsBanner = () => {
    return (
        <div>
            <BgImage isFull={false} image={ImageContactUs}></BgImage>
        </div>
    );
};

export default ContactUsBanner;