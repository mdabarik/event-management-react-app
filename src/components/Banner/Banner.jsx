import BgImage from "../BgImage/BgImage";

const Banner = ({card}) => {
    return (
        <div className="h-[85vh] w-[100vw] flex items-center justify-center">
            <BgImage isFull={false} image={card.image}></BgImage>
            <div className="flex flex-col justify-center items-center">
                <h2 className="text-xl md:text-2xl lg:text-4xl text-center font-bold text-white">{card.event}</h2>
                <p className="text-[10px] md:text-xl w-[80%] md:w-[100%] text-center  font-thin text-white my-4">{card.subtitle}</p>
                <button className="px-3 py-2 text-sm md:text-lg rounded-lg bg-[#db332a] normal-case text-white border-none hover:bg-[#b5100b]">View Details</button>
            </div>
        </div>
    );
};

export default Banner;