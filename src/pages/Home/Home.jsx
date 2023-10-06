
import BgImage from "../../components/BgImage/BgImage";
import webinar from "../../assets/webinar-bg.jpg";

const Home = () => {
    return (
        <div>
            <h1>This is Home</h1>
            <BgImage image={webinar}></BgImage>
        </div>
    );
};

export default Home;