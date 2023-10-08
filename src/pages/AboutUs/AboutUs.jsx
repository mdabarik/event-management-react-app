import BlogBanner from "../../components/BlogBanner/BlogBanner";
import Footer from "../../components/Footer/Footer";

const AboutUs = () => {
    return (
        <div>
            <div>
                <BlogBanner></BlogBanner>
            </div>
            <div className="mt-[95vh] w-[100vw]">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default AboutUs;