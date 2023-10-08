import BgImage from "../BgImage/BgImage";

const WorkshopBanner = ({image}) => {
    return (
        <div className="h-[85vh] w-[100vw] flex items-center justify-center">
            <BgImage isFull={false} image={image}></BgImage>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-4xl text-center font-bold text-white">Master Your Skills <br/> Join Our Exclusive Workshop!</h2>
                <p className="text-xl font-thin text-white my-4">Hands-on Learning, Expert Guidance</p>
                <button className="btn bg-[#db332a] normal-case text-white border-none hover:bg-[#b5100b]">View Details</button>
            </div>
        </div>
    );
};

export default WorkshopBanner;