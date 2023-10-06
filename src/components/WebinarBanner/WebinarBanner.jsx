import BgImage from "../BgImage/BgImage";

const WebinarBanner = ({image}) => {
    return (
        <div className="h-[85vh] w-[100vw] flex items-center justify-center">
            <BgImage image={image}></BgImage>
            <div>
                <h2 className="text-4xl font-bold text-white">Unlock Your Potential <br></br> Join Our Exclusive Webinar!</h2>
                <p className="text-xl font-thin text-white my-4">Empowering Minds, Inspiring Success</p>
                <button className="btn bg-[#db332a] normal-case text-white border-none hover:bg-[#b5100b]">Register Now</button>
            </div>
        </div>
    );
};

export default WebinarBanner;